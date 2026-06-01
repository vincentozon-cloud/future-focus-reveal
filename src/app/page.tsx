'use client';

import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import BrandReveal from '@/components/campus/BrandReveal';
import CampusDashboard from '@/components/campus/CampusDashboard';
import LanguageSelector from '@/components/LanguageSelector'; 
import en from '@/../public/en.json';
import ko from '@/../public/ko.json';

const translations: any = { en, ko };

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [lang, setLang] = useState('en');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('introPlayed') === 'true') {
      setShowDashboard(true);
    }
  }, []);

  const t = (key: string) => translations[lang][key] || key;

  const handleEnroll = async (courseName: string) => {
    const { error } = await supabase
      .from('enrollment')
      .insert([{ full_name: 'Interested Student', course_interest: courseName, source: 'google_seo' }]);

    if (error) console.error('Error:', error.message);
    else alert(lang === 'ko' ? `${courseName}에 대한 관심이 등록되었습니다!` : `Interest registered for ${courseName}!`);
  };

  const handleRevealComplete = () => {
    setShowDashboard(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('introPlayed', 'true');
      window.dispatchEvent(new Event('showNavbar')); 
    }
  };

  return (
    // FIX: A single, responsive gradient background applied directly to the main container.
    // Light Mode: Pink to White to Emerald
    // Dark Mode: Dark Pink to Deep Gray/Black to Dark Emerald
    <main className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 dark:text-white transition-colors duration-1000 bg-gradient-to-br from-pink-100 via-white to-emerald-100 dark:from-pink-950 dark:via-[#0a0a0a] dark:to-emerald-950">
      
      {/* ========================================= */}
      {/* BACKGROUND TEXTURE & FADED LOGO OVERLAY */}
      {/* ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle Carbon Fiber Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Giant Centered Logo - Uses the logo we saved earlier */}
        <img 
          src="/FutureFocus_Logo.png" 
          alt="Future Focus Watermark" 
          className="w-[120vw] md:w-[60vw] opacity-[0.2] dark:opacity-[0.2] object-contain grayscale mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
        />
      </div>

      {!showDashboard ? (
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <BrandReveal onEnter={handleRevealComplete} lang={lang} />
        </div>
      ) : (
        <div className="relative z-10 animate-fadeIn duration-2000">
          
          {/* FLOATING ACTION BUTTONS */}
          <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
            <LanguageSelector onLangChange={(l) => setLang(l)} />
            <button 
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="p-3 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-full text-slate-800 dark:text-white hover:bg-pink-500 hover:text-white transition-all shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
          </div>

          {/* LOGIN SIDEBAR */}
          <div className={`fixed left-0 top-0 h-full w-full md:w-100 z-50 transition-transform duration-1000 ease-in-out transform ${isLoginOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="h-full bg-white/90 dark:bg-black/90 backdrop-blur-3xl border-r border-slate-200 dark:border-white/10 p-8 flex flex-col justify-center shadow-2xl transition-colors duration-500">
              <div className="mb-10 text-slate-900 dark:text-white">
                <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">{t('welcome')}</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-pink-600 dark:text-pink-400 font-bold mt-2">{t('subtitle')}</p>
              </div>

              <div className="space-y-6">
                <input type="text" placeholder={t('name_label')} className="w-full bg-slate-100 dark:bg-white/5 border-b-2 border-slate-300 dark:border-white/10 p-4 text-slate-900 dark:text-white outline-none focus:border-pink-500 transition-all font-medium placeholder:text-slate-500 dark:placeholder:text-gray-500" />
                <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-600 dark:hover:bg-green-500 transition-all shadow-lg active:scale-95">
                  {t('submit_button')}
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-gray-400 mb-6 font-bold">{t('security_label')}</p>
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-4 bg-green-500/10 rounded-xl blur-2xl group-hover:bg-green-500/20 transition-all duration-500"></div>
                  
                  <button className="relative w-24 h-24 bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden flex items-center justify-center transition-transform active:scale-95">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`, backgroundSize: '12px 12px' }} />
                    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                      <div className="w-full h-0.5 bg-green-500 dark:bg-green-400 shadow-[0_0_15px_#4ade80] animate-scanMove"></div>
                    </div>
                    <svg className="w-10 h-10 text-green-600/80 dark:text-green-400/80 z-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <div className="absolute bottom-1 w-full text-center">
                      <span className="text-[6px] text-green-700/60 dark:text-green-500/60 font-mono animate-pulse uppercase tracking-tighter">System Ready</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN SINGLE-PAGE SCROLL CONTENT */}
          <div 
            className={`relative z-10 transition-all duration-1000 ${isLoginOpen ? 'md:ml-100 blur-md md:blur-none' : 'ml-0'}`}
            onClick={() => isLoginOpen && setIsLoginOpen(false)}
          >
            {/* Section 1: Dashboard View */}
            <section id="home" className="min-h-screen">
              <CampusDashboard onEnroll={handleEnroll} lang={lang} />
            </section>

            {/* Section 2: About View */}
            <section id="about" className="min-h-screen flex items-center justify-center border-t border-slate-300/30 dark:border-white/10 backdrop-blur-sm">
              <div className="max-w-4xl mx-auto p-8 text-center bg-white/30 dark:bg-black/30 rounded-3xl backdrop-blur-md shadow-xl border border-white/40 dark:border-white/10">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">{t('about_title') || 'About Us'}</h2>
                <div className="w-16 h-1 bg-pink-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg opacity-80 leading-relaxed font-medium">
                  [Waiting for Cami's text. This is now fully integrated into the main scroll view.]
                </p>
              </div>
            </section>

            {/* Section 3: Programs View */}
            <section id="programs" className="min-h-screen flex items-center justify-center border-t border-slate-300/30 dark:border-white/10 backdrop-blur-sm pb-24">
              <div className="max-w-4xl mx-auto p-8 text-center bg-white/30 dark:bg-black/30 rounded-3xl backdrop-blur-md shadow-xl border border-white/40 dark:border-white/10">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">{t('programs_title') || 'Our Programs'}</h2>
                <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg opacity-80 leading-relaxed font-medium">
                  [Waiting for Cami's text. The Mock Test Engine will live on a separate route at /mocktest as requested.]
                </p>
              </div>
            </section>
          </div>
          
          {/* FLOATING NEWS BULLETIN */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-40 pointer-events-none">
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 text-slate-900 dark:text-white transition-colors duration-500 pointer-events-auto">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600 dark:bg-green-500"></span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400 font-bold">{t('bulletin_title')}</p>
                <p className="text-sm font-semibold">{t('bulletin_text')}</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </main>
  );
}