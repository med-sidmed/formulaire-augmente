import React, { useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { SubmissionResult, MissionType } from "../types";
import {
  CheckCircle,
  Calendar,
  Target,
  Activity,
  Zap,
  TrendingUp,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  getDonationImpact,
  getAnnualObjectiveMessage,
} from "../config/business";

interface GratitudeEchoProps {
  result: SubmissionResult;
  onReset: () => void;
}

export const GratitudeEcho: React.FC<GratitudeEchoProps> = ({
  result,
  onReset,
}) => {
  const currentYear = result.year;

  // Generate personalized message based on mission type
  const generatePersonalizedMessage = (): {
    title: string;
    subtitle: string;
  } => {
    const username = (result.data as any).username || "Voyageur";
    const year = currentYear;

    switch (result.mission) {
      case MissionType.CONTACT:
        return {
          title: `Salutations, ${username}! 👋`,
          subtitle: `Ton message a bien été acheminé vers nos serveurs centraux 📡. Nos "Agents de Support" 🕵️ te répondront sous peu. Merci de nous avoir contacté en cette année cruciale ${year}! ✨`,
        };

      case MissionType.DONATION: {
        const donationData = result.data as any;
        const amount = donationData.amount || 0;
        const frequency =
          donationData.frequency === "once"
            ? "unique"
            : donationData.frequency === "monthly"
            ? "mensuel"
            : "annuel";
        const isAnonymous = donationData.isAnonymous ? "anonyme" : "nommé";

        return {
          title: `Un immense "GG", ${username}! 🏆`,
          subtitle: `Ton "Don de Ressources" 💎 de ${amount}€ (${frequency}) est une bénédiction pour notre cause 🙏. 
Ce soutien ${isAnonymous} permettra de financer nos projets technologiques 🚀 et d'étendre notre communauté en ${year}. 
Ton impact est immense! 🌟 Merci de croire en notre mission! ❤️`,
        };
      }

      case MissionType.VOLUNTEER: {
        const volunteerData = result.data as any;
        const skills = volunteerData.skills || "diverse";

        return {
          title: `Bienvenue, ${username}! 🛡️`,
          subtitle: `Tu as rejoint la "Guilde des Bénévoles" ! 🎖️ Tes compétences en ${skills} seront précieuses pour nos initiatives en ${year}.
Les "Gardiens du Nexus" 🗡️ t'accueillent chaleureusement. Reste connecté pour connaître tes premières missions! 📬`,
        };
      }

      case MissionType.INFO: {
        const infoData = result.data as any;
        const topic = infoData.topic || "domaine";

        return {
          title: `Accès Accordé, ${username}! 🔓`,
          subtitle: `Ta requête sur le ${topic} a été enregistrée dans nos archives 📚. 
Nos "Sages du Nexus" 🧙 analyseront ta question et te fourniront une réponse détaillée sous peu. 
Merci d'explorer notre savoir en ${year}! 🌍`,
        };
      }

      default:
        return {
          title: `Mission Accomplie, ${username}! ✨`,
          subtitle: result.message,
        };
    }
  };

  const { title, subtitle } = generatePersonalizedMessage();

  // Mock data for chart visualization
  const chartData = [
    { name: "Serveurs", value: 30 },
    { name: "Projets", value: 50 },
    { name: "Événements", value: 20 },
  ];
  const COLORS = ["#0ea5e9", "#8b5cf6", "#10b981"];

  useEffect(() => {
    // Primary header pop-in with enhanced elasticity
    anime({
      targets: ".gratidude-echo-head",
      translateY: [-18, 0],
      opacity: [0, 1],
      duration: 900,
      easing: "easeOutElastic(1, .8)",
    });

    // Badge pulse with bounce
    anime({
      targets: ".gratidude-badge",
      scale: [0.85, 1.06, 1],
      duration: 900,
      delay: 150,
      easing: "easeOutBack",
    });

    // Stagger cards entrance from left/right
    anime({
      targets: ".gratitude-card",
      translateX: (el, i) => (i % 2 === 0 ? [-20, 0] : [20, 0]),
      opacity: [0, 1],
      duration: 700,
      delay: anime.stagger(120, { start: 300 }),
      easing: "easeOutQuad",
    });

    // Message fade-in with slight rotate
    anime({
      targets: ".gratitude-message",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
      delay: 400,
      easing: "easeOutQuad",
    });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header Badge */}
        <div className="inline-flex items-center justify-center p-4 bg-nexus-success/10 rounded-full border border-nexus-success text-nexus-success mb-8 shadow-[0_0_20px_rgba(16,185,129,0.3)] gratidude-badge">
          <CheckCircle className="w-8 h-8 mr-3" />
          <span className="text-xl font-display font-bold">
            Mission Accomplie
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-nexus-accent to-transparent" />

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 gratidude-echo-head">
            Écho du Nexus
          </h1>

          {/* Personalized Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-nexus-accent mb-4">
            {title}
          </h2>

          {/* Personalized Message from AI */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-nexus-purple text-left mb-8 gratitude-message"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans whitespace-pre-line">
              {subtitle}
            </p>
          </motion.div>

          {/* Temporal Context Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              className="bg-slate-800/30 p-4 rounded-lg border border-slate-700 gratitude-card"
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(14, 165, 233, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-6 h-6 text-nexus-gold mx-auto mb-2" />
              <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                Cycle Temporel
              </h3>
              <p className="text-2xl text-white font-display">{currentYear}</p>
              <p className="text-xs text-slate-500 mt-1">Année critique</p>
            </motion.div>

            {result.mission === MissionType.DONATION ? (
              <motion.div
                className="bg-slate-800/30 p-4 rounded-lg border border-nexus-purple gratitude-card"
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-6 h-6 text-nexus-purple mx-auto mb-2" />
                <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                  Tier de Donateur
                </h3>
                {(() => {
                  const amount = (result.data as any).amount || 0;
                  const impact = getDonationImpact(amount, currentYear);
                  return (
                    <div>
                      <p className="text-2xl font-display mt-1">
                        {impact.emoji} {impact.tier}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {impact.impact}
                      </p>
                    </div>
                  );
                })()}
              </motion.div>
            ) : (
              <motion.div
                className="bg-slate-800/30 p-4 rounded-lg border border-slate-700 gratitude-card"
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgba(235, 179, 8, 0.2)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-6 h-6 text-nexus-accent mx-auto mb-2" />
                <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                  {result.mission === MissionType.VOLUNTEER
                    ? "Compétences"
                    : "Objectif Annuel"}
                </h3>
                {result.mission === MissionType.VOLUNTEER && (
                  <div>
                    <p className="text-sm text-white mt-1 font-mono">
                      {(
                        (result.data as any).skills || "Diverses compétences"
                      ).substring(0, 30)}
                      {((result.data as any).skills || "").length > 30
                        ? "..."
                        : ""}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Prêt à contribuer
                    </p>
                  </div>
                )}
                {result.mission !== MissionType.VOLUNTEER && (
                  <div>
                    <p className="text-sm text-white mt-1">
                      Expansion du Réseau {currentYear}
                    </p>
                    <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
                      <motion.div
                        className="bg-nexus-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{
                          duration: 1,
                          delay: 0.8,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            <motion.div
              className="bg-slate-800/30 p-4 rounded-lg border border-slate-700 gratitude-card"
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Activity className="w-6 h-6 text-nexus-success mx-auto mb-2" />
              <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                Impact
              </h3>
              <p className="text-sm text-white mt-1">Soutien confirmé</p>
              <p className="text-xs text-nexus-success mt-1 animate-pulse">
                Liaison active
              </p>
            </motion.div>
          </div>

          {/* Chart Visualization (Only for Donations or General Flair) */}
          {result.mission === MissionType.DONATION && (
            <div className="mb-8 h-48 w-full flex flex-col items-center">
              <h3 className="text-sm text-slate-400 mb-2">
                Répartition des Ressources {currentYear}
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Donation Impact Details */}
          {result.mission === MissionType.DONATION && (
            <motion.div
              className="mb-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-xl border border-slate-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-nexus-purple" />
                <h3 className="text-lg font-display font-bold text-white">
                  Détails de ton Impact
                </h3>
              </div>
              {(() => {
                const amount = (result.data as any).amount || 0;
                const impact = getDonationImpact(amount, currentYear);
                return (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-300 mb-2">
                        <span className="text-xl">{impact.emoji}</span>{" "}
                        <span className="font-bold text-white">
                          {impact.tier}
                        </span>
                      </p>
                      <p className="text-sm text-slate-400">{impact.details}</p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-3">
                        📊 Allocation des Ressources
                      </p>
                      <div className="space-y-2">
                        {impact.allocation.map((alloc, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-sm text-slate-300 min-w-[140px]">
                              {alloc.project}
                            </span>
                            <div className="flex-1 bg-slate-700/50 h-2 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-nexus-purple to-nexus-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${alloc.percentage}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 0.6 + idx * 0.15,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                            <span className="text-xs text-slate-400 min-w-[35px] text-right">
                              {alloc.percentage}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 italic">
                      💡 Ton don contribue directement à l'avancement de nos
                      projets critiques. Merci pour ton soutien! 🙏
                    </p>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* Annual Objective Section */}
          <motion.div
            className="mb-8 p-6 bg-slate-800/40 rounded-xl border border-slate-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-nexus-gold" />
              <h3 className="text-lg font-display font-bold text-white">
                Objectif Annuel {currentYear}
              </h3>
            </div>
            {(() => {
              const objective = getAnnualObjectiveMessage(currentYear);
              const projectData = objective.projects.map((p) => ({
                name: p.name,
                progress: p.progress,
              }));

              return (
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    🎯{" "}
                    <span className="font-bold text-white">
                      {objective.objective}
                    </span>
                  </p>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                        Progression Globale
                      </span>
                      <span className="text-lg font-display font-bold text-nexus-accent">
                        {objective.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-nexus-accent to-nexus-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${objective.progress}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.9,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                      📋 Projets en cours
                    </p>
                    {projectData.map((project, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-slate-800/30 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 + idx * 0.1 }}
                      >
                        <span className="text-sm text-slate-300 flex-1">
                          {project.name}
                        </span>
                        <div className="flex-1 max-w-[100px] bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-nexus-success"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-400 min-w-[30px] text-right">
                          {project.progress}%
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 italic mt-3">
                    {objective.message}
                  </p>
                </div>
              );
            })()}
          </motion.div>

          <motion.button
            onClick={onReset}
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-display font-medium transition-colors"
            whileHover={{ scale: 1.02, backgroundColor: "#475569" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Retour au Portail
          </motion.button>

          {/* Data Persistence Confirmation */}
          <motion.div
            className="mt-6 pt-6 border-t border-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
              <span className="text-lg">🔐</span>
              Enregistrement #{result.timestamp?.slice(-8)}
              <span className="text-lg">•</span>
              Données chiffrées AES-256
              <span className="text-nexus-success text-lg">✅</span>
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Tes données sont sécurisées et stockées de manière sécurisée.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-slate-400 text-sm mb-4">
            ✨ Le Nexus vous remercie de tout cœur! ❤️
          </p>
          <p className="text-slate-300 text-base font-light max-w-2xl mx-auto">
            Reste connecté pour suivre nos exploits tout au long de l'année{" "}
            {currentYear}! 🚀
            <br />
            Ensemble, nous construisons un futur plus brillant pour notre
            communauté. 🌟
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
