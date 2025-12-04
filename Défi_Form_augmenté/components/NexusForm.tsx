import React, { useState } from 'react';
import { MissionType, NexusFormData } from '../types';
import { Send, Lock } from 'lucide-react';

interface NexusFormProps {
  mission: MissionType;
  onSubmit: (data: NexusFormData) => void;
  isSubmitting: boolean;
}

export const NexusForm: React.FC<NexusFormProps> = ({ mission, onSubmit, isSubmitting }) => {
  // Generic state handler
  const [formData, setFormData] = useState<any>({
    username: '',
    email: '',
    // Contact defaults
    subject: '',
    message: '',
    // Donation defaults
    amount: 10,
    frequency: 'once',
    isAnonymous: false,
    // Volunteer defaults
    skills: '',
    availability: '',
    motivation: '',
    // Info defaults
    topic: 'general',
    question: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    // Clear error when user types
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
    
    if (!formData.username.trim()) newErrors.username = "Le nom d'utilisateur est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis pour la liaison.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format de flux invalide (Email).";
    }

    if (mission === MissionType.CONTACT) {
      if (!formData.message.trim()) newErrors.message = "Le message ne peut être vide.";
    }
    
    if (mission === MissionType.DONATION) {
      if (Number(formData.amount) <= 0) newErrors.amount = "Le montant doit être positif.";
    }

    if (mission === MissionType.VOLUNTEER) {
      if (!formData.skills.trim()) newErrors.skills = "Indique tes compétences.";
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

  const inputClass = "w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-colors font-sans";
  const labelClass = "block text-sm font-medium text-slate-400 mb-1 font-display";
  const errorClass = "text-nexus-danger text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex items-center justify-center mb-6 text-nexus-accent">
        <Lock className="w-4 h-4 mr-2" />
        <span className="text-xs uppercase tracking-widest">Canal Sécurisé & Crypté</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass}>Identifiant du Voyageur</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={inputClass}
            placeholder="Pseudo ou Nom"
          />
          {errors.username && <p className={errorClass}>{errors.username}</p>}
        </div>
        <div>
          <label className={labelClass}>Fréquence de Liaison (Email)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="contact@nexus.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      {/* Dynamic Fields based on Mission */}
      {mission === MissionType.CONTACT && (
        <>
          <div className="mb-6">
            <label className={labelClass}>Objet de la transmission</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
              placeholder="Sujet"
            />
          </div>
          <div className="mb-6">
            <label className={labelClass}>Données du message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} h-32 resize-none`}
              placeholder="Écris ton message ici..."
            />
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>
        </>
      )}

      {mission === MissionType.DONATION && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClass}>Montant (Crédits)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-slate-500">€</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`${inputClass} pl-8`}
                />
              </div>
              {errors.amount && <p className={errorClass}>{errors.amount}</p>}
            </div>
            <div>
              <label className={labelClass}>Récurrence</label>
              <select name="frequency" value={formData.frequency} onChange={handleChange} className={inputClass}>
                <option value="once">Une fois</option>
                <option value="monthly">Mensuel (Abonnement)</option>
                <option value="yearly">Annuel (Soutien Majeur)</option>
              </select>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleCheckboxChange}
              className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-nexus-gold focus:ring-nexus-gold"
            />
            <label className="ml-2 text-slate-300">Rester un bienfaiteur fantôme (Anonyme)</label>
          </div>
        </>
      )}

      {mission === MissionType.VOLUNTEER && (
        <>
          <div className="mb-6">
            <label className={labelClass}>Compétences (Hard/Soft Skills)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className={inputClass}
              placeholder="Dev, Design, Orga, Magie..."
            />
            {errors.skills && <p className={errorClass}>{errors.skills}</p>}
          </div>
          <div className="mb-6">
            <label className={labelClass}>Motivation</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              className={`${inputClass} h-24`}
              placeholder="Pourquoi rejoindre la Guilde ?"
            />
          </div>
        </>
      )}

      {mission === MissionType.INFO && (
        <>
          <div className="mb-6">
            <label className={labelClass}>Secteur de Recherche</label>
            <select name="topic" value={formData.topic} onChange={handleChange} className={inputClass}>
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
              className={`${inputClass} h-24`}
              placeholder="Quelle est votre question ?"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg font-display font-bold text-lg uppercase tracking-wider transition-all transform hover:-translate-y-1 ${
          isSubmitting 
            ? 'bg-slate-600 cursor-wait' 
            : 'bg-gradient-to-r from-nexus-accent to-nexus-purple hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] text-white'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
            Transmission en cours...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Initialiser la Mission <Send className="ml-2 w-5 h-5" />
          </span>
        )}
      </button>

    </form>
  );
};