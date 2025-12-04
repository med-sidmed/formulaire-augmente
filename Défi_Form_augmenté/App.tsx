import React, { useState } from 'react';
import { MissionType, NexusFormData, SubmissionResult } from './types';
import { MissionSelector } from './components/MissionSelector';
import { NexusForm } from './components/NexusForm';
import { GratitudeEcho } from './components/GratitudeEcho';
import { submitToNexus } from './services/nexusService';
import { Terminal, Cpu } from 'lucide-react';

const App: React.FC = () => {
  const [currentMission, setCurrentMission] = useState<MissionType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const handleMissionSelect = (mission: MissionType) => {
    setCurrentMission(mission);
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('nexus-form-container')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFormSubmit = async (data: NexusFormData) => {
    if (!currentMission) return;
    
    setIsSubmitting(true);
    try {
      const response = await submitToNexus(currentMission, data);
      
      if (response.success) {
        setSubmissionResult({
          success: true,
          message: response.echo,
          data: data,
          mission: currentMission,
          timestamp: new Date().toISOString(),
          year: new Date().getFullYear()
        });
      }
    } catch (error) {
      console.error("Transmission failed", error);
      alert("Erreur critique dans le flux. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setCurrentMission(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-nexus-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-nexus-dark to-black text-slate-200 selection:bg-nexus-accent selection:text-white font-sans overflow-x-hidden">
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <header className="relative z-10 p-6 md:p-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <Cpu className="w-10 h-10 text-nexus-accent animate-pulse-slow mr-3" />
          <h1 className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent via-white to-nexus-purple">
            LE NEXUS CONNECTÉ
          </h1>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
          Portail d'Intention &bull; Nuit de l'Info {new Date().getFullYear()}
        </p>
      </header>

      <main className="relative z-10 container mx-auto px-4 pb-20">
        
        {!submissionResult ? (
          <div className="flex flex-col items-center space-y-12">
            
            {/* Introduction */}
            <section className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm mb-6">
                <Terminal className="w-4 h-4 mr-2 text-nexus-success" />
                <span className="font-mono text-nexus-success">Système en ligne... En attente d'input utilisateur.</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Choisissez votre Voie
              </h2>
              <p className="text-slate-400">
                L'association a besoin de vous. Sélectionnez une mission ci-dessous pour ouvrir le canal de communication approprié.
              </p>
            </section>

            {/* Selector */}
            <MissionSelector 
              selectedMission={currentMission} 
              onSelect={handleMissionSelect} 
            />

            {/* Dynamic Form Area */}
            {currentMission && (
              <div id="nexus-form-container" className="w-full">
                <div className="flex items-center justify-center mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent w-full max-w-md"></div>
                </div>
                <NexusForm 
                  mission={currentMission} 
                  onSubmit={handleFormSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            )}
          </div>
        ) : (
          /* Confirmation View */
          <GratitudeEcho 
            result={submissionResult} 
            onReset={handleReset} 
          />
        )}
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-900/50">
        <p>Projet Nexus v.2.5 &bull; Développé pour Axolotl &bull; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;