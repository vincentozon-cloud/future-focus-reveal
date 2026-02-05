'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import BrandReveal from '../components/campus/BrandReveal';
import CampusDashboard from '../components/campus/CampusDashboard';

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  // We add 'className' here so we know which button was clicked
  const handleEnroll = async (courseName: string) => {
    const { data, error } = await supabase
      .from('enrollment')
      .insert([
        { 
          full_name: 'Interested Student', 
          course_interest: courseName, // "EPS-TOPIK with Cami" or "Elem Korean with Meeko"
          source: 'google_seo',
        }
      ]);

    if (error) {
      console.error('Error:', error.message);
    } else {
      alert(`Interest registered for ${courseName}!`);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {!showDashboard ? (
        <BrandReveal onEnter={() => setShowDashboard(true)} />
      ) : (
        <div className="animate-fadeIn">
          {/* We pass the function down to the Dashboard here */}
          <CampusDashboard onEnroll={handleEnroll} />
          
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