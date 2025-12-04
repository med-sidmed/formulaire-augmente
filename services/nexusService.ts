import { GoogleGenAI } from "@google/genai";
import { MissionType, NexusFormData } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGratitudeEcho = async (
  mission: MissionType, 
  data: NexusFormData
): Promise<string> => {
  const currentYear = new Date().getFullYear();
  
  // Prompt construction based on mission type
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
    // Fallback message if AI fails
    return `Salutations, ${data.username} ! Ta mission ${mission} a été enregistrée dans nos bases de données pour le cycle ${currentYear}. Merci de ton soutien !`;
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