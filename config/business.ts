/**
 * Configuration des données métier
 * Objectifs annuels, impacts de dons, projets
 */

export const ANNUAL_GOALS = {
  2025: {
    year: 2025,
    mainObjective: "Expansion du Réseau Technologique",
    projects: [
      {
        name: "Infrastructure Cloud",
        progress: 65,
        description: "Migration vers une infrastructure scalable et décentralisée",
        funding: 15000,
        funded: 9750,
      },
      {
        name: "Plateforme Collaborative",
        progress: 45,
        description: "Développement d'une plateforme de collaboration en temps réel",
        funding: 10000,
        funded: 4500,
      },
      {
        name: "Formation & Mentorship",
        progress: 80,
        description: "Programme de formation pour les nouvelles recrues",
        funding: 5000,
        funded: 4000,
      },
    ],
    overallProgress: 63,
    totalFunding: 30000,
    totalFunded: 18250,
  },
  2024: {
    year: 2024,
    mainObjective: "Consolidation de la Communauté",
    projects: [
      {
        name: "Documentation API",
        progress: 100,
        description: "Documentation complète de l'API Nexus",
        funding: 3000,
        funded: 3000,
      },
      {
        name: "Événements Mensuels",
        progress: 100,
        description: "Organisation de 12 événements mensuels",
        funding: 5000,
        funded: 5000,
      },
    ],
    overallProgress: 100,
    totalFunding: 8000,
    totalFunded: 8000,
  },
};

/**
 * Impact du don selon le montant
 */
export const getDonationImpact = (amount: number, year: number = 2025) => {
  const goals = ANNUAL_GOALS[year] || ANNUAL_GOALS[2025];

  if (amount < 10) {
    return {
      tier: "Contributeur Étoile",
      emoji: "⭐",
      impact: "Contribution aux serveurs quotidiens",
      details:
        "Votre soutien finance les coûts d'hébergement et de maintenance de nos serveurs.",
      allocation: [
        { project: "Infrastructure", percentage: 50 },
        { project: "Formation", percentage: 50 },
      ],
    };
  } else if (amount < 50) {
    return {
      tier: "Gardien du Nexus",
      emoji: "🛡️",
      impact: "Financement du projet Formation & Mentorship",
      details: `Votre don de ${amount}€ finance directement le "${goals.projects[2]?.name}" et forme les futurs contributeurs.`,
      allocation: [
        { project: "Formation & Mentorship", percentage: 60 },
        { project: "Infrastructure", percentage: 40 },
      ],
    };
  } else if (amount < 200) {
    return {
      tier: "Chevalier du Code",
      emoji: "⚔️",
      impact: `${Math.floor((amount / goals.projects[1].funding) * 100)}% du financement pour la Plateforme Collaborative`,
      details: `Grâce à votre généreux don de ${amount}€, vous accélérez le développement de notre plateforme collaborative et contribuez directement à l'expansion du Nexus.`,
      allocation: [
        { project: "Plateforme Collaborative", percentage: 70 },
        { project: "Infrastructure Cloud", percentage: 30 },
      ],
    };
  } else {
    return {
      tier: "Légende du Nexus",
      emoji: "👑",
      impact: `${Math.floor((amount / goals.totalFunding) * 100)}% de l'objectif annuel ${year}!`,
      details: `Vous êtes un véritable héros! Votre don monumental de ${amount}€ représente une part significative du budget annuel ${year}. Vous participez activement à transformer notre vision en réalité.`,
      allocation: [
        { project: "Infrastructure Cloud", percentage: 40 },
        { project: "Plateforme Collaborative", percentage: 35 },
        { project: "Formation & Mentorship", percentage: 25 },
      ],
    };
  }
};

/**
 * Messages dynamiques pour les objectifs annuels
 */
export const getAnnualObjectiveMessage = (year: number = 2025) => {
  const goals = ANNUAL_GOALS[year] || ANNUAL_GOALS[2025];
  const percentage = Math.round(
    (goals.totalFunded / goals.totalFunding) * 100
  );

  return {
    objective: goals.mainObjective,
    progress: percentage,
    message: `En ${year}, notre objectif est : "${goals.mainObjective}". Nous avons atteint ${percentage}% de notre financement grâce à des contributeurs comme toi! 🎯`,
    projects: goals.projects,
  };
};

/**
 * Messages de gratitude personnalisés
 */
export const getGratitudeMessage = (mission: string, data: any, year: number = 2025) => {
  const username = data.username || "Voyageur";

  const messages: Record<string, string> = {
    CONTACT: `Salutations, ${username}! 👋 Ton message a bien été acheminé vers nos serveurs centraux 📡 en ce jour du cycle ${year}. Nos "Agents de Support" 🕵️ te répondront sous peu. Ton contact établit un lien précieux avec notre communauté! ✨`,

    DONATION: `Un immense "GG", ${username}! 🏆 Ton "Don de Ressources" 💎 de ${data.amount}€ est une bénédiction pour notre cause 🙏. 
Ce soutien ${data.isAnonymous ? "anonyme" : "nommé"} permettra de financer nos projets technologiques 🚀 et d'étendre notre communauté en ${year}. 
Ton impact est immense! 🌟 Merci de croire en notre mission! ❤️`,

    VOLUNTEER: `Bienvenue, ${username}! 🛡️ Tu as rejoint la "Guilde des Bénévoles" ! 🎖️ Tes compétences en ${data.skills} seront précieuses pour nos initiatives en ${year}.
Les "Gardiens du Nexus" 🗡️ t'accueillent chaleureusement. Reste connecté pour connaître tes premières missions! 📬`,

    INFO: `Accès Accordé, ${username}! 🔓 Ta requête sur le ${data.topic === "general" ? "domaine général" : data.topic} a été enregistrée dans nos archives 📚 en ${year}. 
Nos "Sages du Nexus" 🧙 analyseront ta question et te fourniront une réponse détaillée sous peu. 🌍`,
  };

  return messages[mission] || `Mission acceptée, ${username}. Merci de ton soutien en ${year}! ✨`;
};
