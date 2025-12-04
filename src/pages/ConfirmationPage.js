import React from "react";

function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-green-500/20 rounded-full mb-4"></div>
          <h1 className="text-4xl font-bold text-white mb-4">titre</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-6 text-white">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-lg mb-4">le contenu</p>
            <div className="flex items-center gap-2 text-cyan-300">
              <p className="font-semibold">2025</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-400/30">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">
              🎯 Objectif 2025
            </h3>
            <p>projet</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-center italic">
              "Ensemble, protégeons les océans et préservons la vie marine !
              🌊🐠"
            </p>
            <p className="text-center text-sm text-gray-400 mt-2">
              Reste connecté pour suivre nos exploits tout au long de l'année
              2025 !
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg">
            Retour au Portail 🚪
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
