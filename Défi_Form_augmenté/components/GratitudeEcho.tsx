import React from 'react';
import { SubmissionResult, MissionType } from '../types';
import { CheckCircle, Calendar, Target, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface GratitudeEchoProps {
  result: SubmissionResult;
  onReset: () => void;
}

export const GratitudeEcho: React.FC<GratitudeEchoProps> = ({ result, onReset }) => {
  const currentYear = result.year;

  // Mock data for chart visualization
  const chartData = [
    { name: 'Serveurs', value: 30 },
    { name: 'Projets', value: 50 },
    { name: 'Événements', value: 20 },
  ];
  const COLORS = ['#0ea5e9', '#8b5cf6', '#10b981'];

  return (
    <div className="w-full max-w-4xl mx-auto text-center animate-in zoom-in duration-700">
      
      {/* Header Badge */}
      <div className="inline-flex items-center justify-center p-4 bg-nexus-success/10 rounded-full border border-nexus-success text-nexus-success mb-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
        <CheckCircle className="w-8 h-8 mr-3" />
        <span className="text-xl font-display font-bold">Mission Accomplie</span>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-nexus-accent to-transparent" />

        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Écho du Nexus
        </h1>

        {/* Personalized Message from AI */}
        <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-nexus-purple text-left mb-8">
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans italic">
            "{result.message}"
          </p>
        </div>

        {/* Temporal Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
            <Calendar className="w-6 h-6 text-nexus-gold mx-auto mb-2" />
            <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">Cycle Temporel</h3>
            <p className="text-2xl text-white font-display">{currentYear}</p>
            <p className="text-xs text-slate-500 mt-1">Année critique</p>
          </div>
          
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
            <Target className="w-6 h-6 text-nexus-accent mx-auto mb-2" />
            <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">Objectif Annuel</h3>
            <p className="text-sm text-white mt-1">Expansion du Réseau {currentYear}</p>
            <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
              <div className="bg-nexus-accent h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
            <Activity className="w-6 h-6 text-nexus-success mx-auto mb-2" />
            <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold">Impact</h3>
            <p className="text-sm text-white mt-1">Soutien confirmé</p>
             <p className="text-xs text-nexus-success mt-1 animate-pulse">Liaison active</p>
          </div>
        </div>

        {/* Chart Visualization (Only for Donations or General Flair) */}
        {result.mission === MissionType.DONATION && (
          <div className="mb-8 h-48 w-full flex flex-col items-center">
            <h3 className="text-sm text-slate-400 mb-2">Répartition des Ressources {currentYear}</h3>
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
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        <button
          onClick={onReset}
          className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-display font-medium transition-colors"
        >
          Retour au Portail
        </button>
      </div>
      
      <p className="mt-8 text-slate-500 text-sm">
        Le Nexus vous remercie. Restez connectés pour suivre l'évolution de la Nuit de l'Info {currentYear}.
      </p>
    </div>
  );
};