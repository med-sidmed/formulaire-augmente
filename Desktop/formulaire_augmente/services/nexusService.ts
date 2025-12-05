import { GoogleGenAI } from "@google/genai";
import { MissionType, NexusFormData } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Server endpoint
const SERVER_URL = (import.meta as any).env?.VITE_SERVER_URL || "http://localhost:5000";

export const generateGratitudeEcho = async (
  mission: MissionType, 
  data: NexusFormData
): Promise<string> => {
  const currentYear = new Date().getFullYear();
  
  let specificContext = "";
  switch (mission) {
    case MissionType.DONATION:
      const donationData = data as any;
      specificContext = `Il a fait un don de ${donationData.amount} crédits (${donationData.frequency}). C'est un héros des ressources.`;
      break;
    case MissionType.VOLUNTEER:
      specificContext = "Il souhaite rejoindre la Guilde des Bénévoles. C'est un futur chevalier.";
      break;
    case MissionType.CONTACT:
      specificContext = "Il cherche à établir un contact diplomatique.";
      break;
    case MissionType.INFO:
      specificContext = "Il est en quête de savoir et de données.";
      break;
  }

  const prompt = `
    Tu es Axolotl, le gardien d'une association numérique cyberpunk appelée "Le Nexus".
    Un utilisateur nommé "${data.username}" vient d'accomplir la mission : "${mission}".
    
    Contexte : ${specificContext}
    Année actuelle du cycle : ${currentYear}.

    Rédige un message de remerciement et de confirmation épique, gamifié et chaleureux.
    
    Contraintes :
    - Utilise le tutoiement respectueux.
    - Utilise un vocabulaire "Tech / RPG / Cyber" (Flux, Données, Serveurs, Quête, XP).
    - Mentionne explicitement l'année ${currentYear} comme étant cruciale.
    - Limite la réponse à environ 50-70 mots.
    - Le ton doit être encourageant et légendaire.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Communication établie. Merci pour ton interaction avec le Nexus.";
  } catch (error) {
    console.error("Erreur de communication avec le coeur du Nexus (Gemini):", error);
    return `Salutations, ${data.username} ! Ta mission ${mission} a été enregistrée dans nos bases de données pour le cycle ${currentYear}. Merci de ton soutien !`;
  }
};

/**
 * Submit form data to secure server endpoint
 */
export const submitToNexusSecure = async (
  mission: MissionType,
  data: NexusFormData
): Promise<{ success: boolean; message: string; submissionId?: string; timestamp?: string }> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ mission, data }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Erreur lors de la transmission");
    }

    const result = await response.json();
    return {
      success: result.success,
      message: result.message,
      submissionId: result.submissionId,
      timestamp: result.timestamp,
    };
  } catch (error) {
    console.error("Secure submission error:", error);
    throw new Error(
      error instanceof Error ? error.message : "Erreur de communication sécurisée"
    );
  }
};

/**
 * Check server health
 */
export const checkServerHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/health`);
    return response.ok;
  } catch (error) {
    console.warn("Server health check failed:", error);
    return false;
  }
};

export const submitToNexus = async (
  mission: MissionType,
  data: NexusFormData
): Promise<{ success: boolean; echo: string }> => {
  // Simulate network delay for "Encryption"
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Call AI for the response
  const echo = await generateGratitudeEcho(mission, data);
  
  return {
    success: true,
    echo: echo
  };
};