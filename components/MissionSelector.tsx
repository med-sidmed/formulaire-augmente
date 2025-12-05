import React from "react";
import { motion } from "framer-motion";
import { MissionType } from "../types";
import {
  MessageSquare,
  Heart,
  Shield,
  HelpCircle,
  LucideIcon,
  Sparkles,
} from "lucide-react";

interface MissionCardProps {
  type: MissionType;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: (type: MissionType) => void;
  isSelected: boolean;
}

const MissionCard: React.FC<MissionCardProps> = ({
  type,
  icon: Icon,
  title,
  description,
  color,
  onClick,
  isSelected,
}) => {
  const baseClasses =
    "relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group hover:scale-105";
  const selectedClasses = isSelected
    ? `border-${color} bg-${color}/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] scale-105`
    : "border-slate-700 bg-slate-800/50 hover:border-slate-500";

  // Dynamic color handling for inline styles since dynamic tailwind classes can be tricky
  const style = isSelected
    ? { borderColor: color, boxShadow: `0 0 15px ${color}40` }
    : {};

  return (
    <motion.div
      className={`${baseClasses} ${selectedClasses}`}
      style={style}
      onClick={() => onClick(type)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      animate={
        isSelected
          ? { scale: 1.02, boxShadow: `0 10px 30px ${color}40` }
          : { scale: 1 }
      }
      transition={{ duration: 0.32 }}
    >
      <div className="flex items-center justify-between mb-4">
        <Icon
          className="w-8 h-8 transition-transform group-hover:rotate-12"
          style={{ color: isSelected ? color : "#94a3b8" }}
        />
        {isSelected && (
          <div
            className="h-2 w-2 rounded-full animate-ping"
            style={{ backgroundColor: color }}
          />
        )}
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-400 text-sm font-sans">{description}</p>

      {/* Decorative background element */}
      <div
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

interface MissionSelectorProps {
  selectedMission: MissionType | null;
  onSelect: (mission: MissionType) => void;
}

export const MissionSelector: React.FC<MissionSelectorProps> = ({
  selectedMission,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mb-8">
      <MissionCard
        type={MissionType.CONTACT}
        icon={MessageSquare}
        title="Établir le Contact"
        description="Envoie un signal direct à nos opérateurs."
        color="#0ea5e9" // Cyan
        onClick={onSelect}
        isSelected={selectedMission === MissionType.CONTACT}
      />
      <MissionCard
        type={MissionType.DONATION}
        icon={Heart}
        title="Offrir un Don"
        description="Finance les ressources du Nexus pour l'année à venir."
        color="#eab308" // Gold
        onClick={onSelect}
        isSelected={selectedMission === MissionType.DONATION}
      />
      <MissionCard
        type={MissionType.VOLUNTEER}
        icon={Shield}
        title="Rejoindre la Guilde"
        description="Propose tes compétences et deviens un Gardien."
        color="#10b981" // Emerald
        onClick={onSelect}
        isSelected={selectedMission === MissionType.VOLUNTEER}
      />
      <MissionCard
        type={MissionType.INFO}
        icon={HelpCircle}
        title="Quête de Savoir"
        description="Accède aux archives et pose tes questions."
        color="#8b5cf6" // Purple
        onClick={onSelect}
        isSelected={selectedMission === MissionType.INFO}
      />
      <MissionCard
        type={MissionType.NUIT_INFO}
        icon={Sparkles}
        title="Le village Numérique Résistant"
        description="Rejoignez la communauté NIRD et obtenez votre manifeste personnalisé."
        color="#eab308"
        onClick={onSelect}
        isSelected={selectedMission === MissionType.NUIT_INFO}
      />
    </div>
  );
};
