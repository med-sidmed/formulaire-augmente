/**
 * Serveur Express pour "Le Nexus Connecté"
 * Gère la validation, l'authentification, et la persistance des données
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import {
  getDonationImpact,
  getAnnualObjectiveMessage,
  getGratitudeMessage,
} from "./config/business.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ============== MIDDLEWARE ==============

// Security headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5000",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// Body parser
app.use(express.json({ limit: "1mb" }));

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message:
    "Trop de requêtes depuis cette adresse IP, veuillez réessayer plus tard.",
  standardHeaders: true,
  legacyHeaders: false,
});

const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1, // 1 submission per hour per IP
  skipSuccessfulRequests: false,
});

app.use("/api/submit", strictLimiter);
app.use("/api/", limiter);

// ============== VALIDATION SCHEMAS ==============

const baseFormSchema = z.object({
  username: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(/^[a-zA-Z0-9_\-àâäæçéèêëîïôöœùûüœ\s]+$/i, "Caractères invalides"),
  email: z.string().email("Email invalide").max(100, "Email trop long"),
});

const missionSchemas = {
  CONTACT: baseFormSchema.extend({
    subject: z
      .string()
      .min(3, "Le sujet doit contenir au moins 3 caractères")
      .max(100, "Le sujet ne peut pas dépasser 100 caractères"),
    message: z
      .string()
      .min(10, "Le message doit contenir au moins 10 caractères")
      .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  }),

  DONATION: baseFormSchema.extend({
    amount: z
      .number()
      .positive("Le montant doit être positif")
      .max(100000, "Le montant est trop élevé"),
    frequency: z.enum(["once", "monthly", "yearly"]),
    isAnonymous: z.boolean(),
  }),

  VOLUNTEER: baseFormSchema.extend({
    skills: z
      .string()
      .min(3, "Veuillez spécifier vos compétences")
      .max(500, "Les compétences ne peuvent pas dépasser 500 caractères"),
    availability: z.string().optional(),
    motivation: z
      .string()
      .min(10, "La motivation doit contenir au moins 10 caractères")
      .max(1000, "La motivation ne peut pas dépasser 1000 caractères"),
  }),

  INFO: baseFormSchema.extend({
    topic: z.enum(["general", "event", "tech", "partnership"]),
    question: z
      .string()
      .min(5, "La question doit contenir au moins 5 caractères")
      .max(1000, "La question ne peut pas dépasser 1000 caractères"),
  }),
};

// ============== ENCRYPTION UTILS ==============

const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "dev-key-32chars-do-not-use-prod";
const ENCRYPTION_IV_LENGTH = 16;

/**
 * Encrypt sensitive data
 */
function encryptData(data) {
  try {
    const iv = crypto.randomBytes(ENCRYPTION_IV_LENGTH);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(ENCRYPTION_KEY.padEnd(32, "0").slice(0, 32)),
      iv
    );

    let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
    encrypted += cipher.final("hex");

    return iv.toString("hex") + ":" + encrypted;
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Erreur de chiffrement des données");
  }
}

/**
 * Decrypt sensitive data
 */
function decryptData(encryptedData) {
  try {
    const [ivHex, encrypted] = encryptedData.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(ENCRYPTION_KEY.padEnd(32, "0").slice(0, 32)),
      iv
    );

    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Erreur de déchiffrement des données");
  }
}

/**
 * Hash email for privacy (no reversal possible)
 */
function hashEmail(email) {
  return crypto.createHash("sha256").update(email.toLowerCase()).digest("hex");
}

// ============== DATA PERSISTENCE ==============

const dataDir = path.join(__dirname, "data");
const submissionsFile = path.join(dataDir, "submissions.json");

/**
 * Ensure data directory exists
 */
async function ensureDataDir() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
}

/**
 * Load all submissions
 */
async function loadSubmissions() {
  try {
    const data = await fs.readFile(submissionsFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

/**
 * Save submission to file
 */
async function saveSubmission(submission) {
  try {
    await ensureDataDir();
    const submissions = await loadSubmissions();
    submissions.push(submission);
    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
  } catch (error) {
    console.error("Error saving submission:", error);
    throw new Error("Erreur lors de la sauvegarde");
  }
}

// ============== ROUTES ==============

/**
 * Health check endpoint
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

/**
 * Main submission endpoint
 */
app.post("/api/submit", async (req, res) => {
  try {
    const { mission, data } = req.body;

    // Validate mission type
    if (!missionSchemas[mission]) {
      return res.status(400).json({
        success: false,
        error: "Type de mission invalide",
      });
    }

    // Validate data against schema
    const schema = missionSchemas[mission];
    const validatedData = schema.parse(data);

    // Create submission record
    const emailHash = hashEmail(validatedData.email);
    const encryptedEmail = encryptData(validatedData.email);
    const encryptedData = encryptData(validatedData);

    const submission = {
      id: crypto.randomUUID(),
      mission,
      emailHash, // For deduplication without storing email in plain text
      encryptedEmail,
      encryptedData,
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get("user-agent"),
    };

    // Save to persistence
    await saveSubmission(submission);

    // Generate personalized response
    const year = new Date().getFullYear();
    const responseMessage = generateResponseMessage(
      mission,
      validatedData,
      year
    );

    res.status(200).json({
      success: true,
      message: responseMessage,
      submissionId: submission.id,
      timestamp: submission.timestamp,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: "Validation échouée",
        details: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      });
    }

    console.error("Submission error:", error);
    res.status(500).json({
      success: false,
      error: "Erreur lors du traitement de la mission",
    });
  }
});

/**
 * Generate response message based on mission
 */
function generateResponseMessage(mission, data, year) {
  const username = data.username || "Voyageur";

  // Use business logic for gratitude messages
  let message = getGratitudeMessage(mission, data, year);

  // Enhance donation message with impact details
  if (mission === "DONATION" && data.amount) {
    const impact = getDonationImpact(data.amount, year);
    const objective = getAnnualObjectiveMessage(year);

    message += `\n\n💡 Impact Détaillé:\n`;
    message += `${impact.emoji} ${impact.tier} - ${impact.impact}\n`;
    message += `📊 Ton don contribue à: ${impact.allocation
      .map((a) => `${a.project} (${a.percentage}%)`)
      .join(", ")}\n`;
    message += `🎯 Cela aide à atteindre notre objectif ${year}: ${objective.progress}% complété`;
  }

  return message;
}

// ============== ERROR HANDLING ==============

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    error: "Erreur interne du serveur",
  });
});

// ============== SERVER START ==============

await ensureDataDir();

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  🌐 LE NEXUS CONNECTÉ - Serveur       ║
║  Port: ${PORT}                       ║
║  Sécurité: Activée ✅                 ║
║  Chiffrement: AES-256-CBC ✅           ║
║  Rate Limiting: Actif ✅              ║
╚════════════════════════════════════════╝
  `);
});
