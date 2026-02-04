'use client';

import { useState } from 'react';
import BrandReveal from '../components/campus/BrandReveal';
import CampusDashboard from '../components/campus/CampusDashboard';

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      {!showDashboard ? (
        <BrandReveal onEnter={() => setShowDashboard(true)} />
      ) : (
        <div className="animate-fadeIn">
          <CampusDashboard />
          
          {/* THE NEWS FRAME (The "Active Pulse" we discussed) */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-pink-300 font-bold">Campus Bulletin</p>
                <p className="text-sm text-white font-medium">
                  Enrollment for Korean Conversational Level 1 is now open! 🇰🇷
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}