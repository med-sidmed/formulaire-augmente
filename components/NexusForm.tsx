import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MissionType, NexusFormData } from "../types";
import { Send, Lock, Shield, Zap } from "lucide-react";

interface NexusFormProps {
  mission: MissionType;
  onSubmit: (data: NexusFormData) => void;
  isSubmitting: boolean;
}

export const NexusForm: React.FC<NexusFormProps> = ({
  mission,
  onSubmit,
  isSubmitting,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Animate button on submit
  useEffect(() => {
    if (isSubmitting && buttonRef.current) {
    }
  }, [isSubmitting]);

  const [formData, setFormData] = useState<any>({
    username: "",
    email: "",
    role: "",
    weapon: "",
    motivation: "",
    subject: "",
    message: "",
    amount: 10,
    frequency: "once",
    isAnonymous: false,
    skills: "",
    availability: "",
    topic: "general",
    question: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: checked }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim())
      newErrors.username = "Le nom d'utilisateur est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis pour la liaison.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format de flux invalide (Email).";
    }

    if (mission === MissionType.CONTACT) {
      if (!formData.message.trim())
        newErrors.message = "Le message ne peut être vide.";
    }

    if (mission === MissionType.DONATION) {
      if (Number(formData.amount) <= 0)
        newErrors.amount = "Le montant doit être positif.";
    }

    if (mission === MissionType.VOLUNTEER) {
      if (!formData.skills.trim())
        newErrors.skills = "Indique tes compétences.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const inputClass =
    "w-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-600/50 rounded-xl p-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-nexus-accent focus:ring-2 focus:ring-nexus-accent/50 transition-all duration-300 hover:border-slate-500/70 backdrop-blur-sm shadow-inner";
  const selectClass =
    "w-full bg-black border border-slate-600/50 rounded-xl p-3.5 text-white focus:outline-none focus:border-nexus-accent focus:ring-2 focus:ring-nexus-accent/50 transition-all duration-300 hover:border-slate-500/70 backdrop-blur-sm shadow-inner appearance-none cursor-pointer";
  const labelClass =
    "block text-sm font-semibold text-slate-300 mb-2 font-display tracking-wide";
  const errorClass =
    "text-red-400 text-xs mt-1.5 font-medium flex items-center gap-1";

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-800/40 via-slate-900/50 to-slate-800/40 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/60 shadow-2xl relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexus-accent/5 via-transparent to-nexus-purple/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-nexus-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-nexus-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center mb-8 text-nexus-accent"
        >
          <Shield className="w-5 h-5 mr-2 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold">
            Canal Sécurisé & Crypté
          </span>
          <Lock className="w-4 h-4 ml-2" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className={labelClass}>
              <Zap className="w-4 h-4 inline mr-1.5 text-nexus-accent" />
              Identifiant du Voyageur
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={inputClass}
              placeholder="Entrez votre pseudo..."
            />
            {errors.username && (
              <p className={errorClass}>
                <span>⚠</span> {errors.username}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className={labelClass}>
              <Zap className="w-4 h-4 inline mr-1.5 text-nexus-accent" />
              Fréquence de Liaison (Email)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="contact@nexus.com"
            />
            {errors.email && (
              <p className={errorClass}>
                <span>⚠</span> {errors.email}
              </p>
            )}
          </motion.div>
        </div>

        {/* Role & Weapon Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label className={labelClass}>Votre Rôle dans le Village</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Choisir une classe...</option>
              {["Druide du Savoir", "Jeune Guerrier", "Forgeron du Réseau"].map(
                (r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                )
              )}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label className={labelClass}>Votre Arme Anti-Obsolescence</label>
            <select
              name="weapon"
              value={formData.weapon}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Choisir un équipement...</option>
              {["Bouclier Linux (OS Libre)", "Marteau de Réemploi"].map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-8"
        >
          <label className={labelClass}>Pourquoi résistez-vous ?</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Contre les abonnements coûteux, pour la liberté..."
          />
        </motion.div>

        {/* Dynamic Fields based on Mission */}
        {mission === MissionType.CONTACT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mb-6">
              <label className={labelClass}>Objet de la transmission</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
                placeholder="Sujet du message"
              />
            </div>
            <div className="mb-6">
              <label className={labelClass}>Données du message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} h-36 resize-none`}
                placeholder="Écris ton message ici..."
              />
              {errors.message && (
                <p className={errorClass}>
                  <span>⚠</span> {errors.message}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {mission === MissionType.DONATION && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelClass}>Montant (Crédits)</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-nexus-accent font-bold text-lg">
                    €
                  </span>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                  />
                </div>
                {errors.amount && (
                  <p className={errorClass}>
                    <span>⚠</span> {errors.amount}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass}>Récurrence</label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="once">Une fois</option>
                  <option value="monthly">Mensuel (Abonnement)</option>
                  <option value="yearly">Annuel (Soutien Majeur)</option>
                </select>
              </div>
            </div>
            <div className="mb-6 flex items-center bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleCheckboxChange}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-nexus-accent focus:ring-nexus-accent cursor-pointer"
              />
              <label className="ml-3 text-slate-300 font-medium cursor-pointer">
                Rester un bienfaiteur fantôme (Anonyme)
              </label>
            </div>
          </motion.div>
        )}

        {mission === MissionType.VOLUNTEER && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mb-6">
              <label className={labelClass}>
                Compétences (Hard/Soft Skills)
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={inputClass}
                placeholder="Dev, Design, Orga, Magie..."
              />
              {errors.skills && (
                <p className={errorClass}>
                  <span>⚠</span> {errors.skills}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {mission === MissionType.INFO && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mb-6">
              <label className={labelClass}>Secteur de Recherche</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="general">Général</option>
                <option value="event">Événement (Nuit de l'Info)</option>
                <option value="tech">Technique</option>
                <option value="partnership">Partenariat</option>
              </select>
            </div>
            <div className="mb-6">
              <label className={labelClass}>Requête Précise</label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                className={`${inputClass} h-28`}
                placeholder="Quelle est votre question ?"
              />
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          ref={buttonRef}
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-5 rounded-xl font-display font-bold text-lg uppercase tracking-[0.15em] transition-all duration-300 relative overflow-hidden group ${
            isSubmitting
              ? "bg-slate-700 cursor-wait"
              : "bg-gradient-to-r from-nexus-accent via-nexus-purple to-nexus-accent bg-size-200 hover:bg-right shadow-lg hover:shadow-nexus-accent/50 text-white"
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          {isSubmitting ? (
            <motion.span
              className="flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
              Transmission en cours...
            </motion.span>
          ) : (
            <span className="flex items-center justify-center relative z-10">
              Initialiser la Mission{" "}
              <Send className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};
