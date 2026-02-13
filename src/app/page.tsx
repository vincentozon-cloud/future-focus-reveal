'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';
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

  const t = (key: string) => translations[lang][key] || key;

  const handleEnroll = async (courseName: string) => {
    const { data, error } = await supabase
      .from('enrollment')
      .insert([{ full_name: 'Interested Student', course_interest: courseName, source: 'google_seo' }]);

    if (error) console.error('Error:', error.message);
    else alert(lang === 'ko' ? `${courseName}에 대한 관심이 등록되었습니다!` : `Interest registered for ${courseName}!`);
  };

  return (
    <main className="min-h-screen relative overflow-hidden font-sans bg-black">
      
      {/* ADJUSTED DARKER WAVE BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(88, 20, 70, 0.9) 0, transparent 50%), 
              radial-gradient(at 50% 50%, rgba(120, 40, 50, 0.7) 0, transparent 60%),
              radial-gradient(at 100% 0%, rgba(20, 60, 50, 0.9) 0, transparent 50%),
              radial-gradient(at 100% 100%, rgba(10, 80, 70, 0.9) 0, transparent 50%),
              #050505
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 opacity-80" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {!showDashboard ? (
        <div className="relative z-10">
          <BrandReveal onEnter={() => setShowDashboard(true)} lang={lang} />
        </div>
      ) : (
        <div className="relative z-10 animate-fadeIn duration-[2000ms] min-h-screen">
          
          <div className="fixed top-6 right-6 z-[70] flex items-center gap-3">
            <LanguageSelector onLangChange={(l) => setLang(l)} />
            <button 
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-pink-600 transition-all shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
          </div>

          <div className={`fixed left-0 top-0 h-full w-full md:w-[400px] z-[60] transition-transform duration-1000 ease-in-out transform ${isLoginOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="h-full bg-black/40 backdrop-blur-3xl border-r border-white/10 p-8 flex flex-col justify-center shadow-2xl">
              <div className="mb-10 text-white">
                <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">{t('welcome')}</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-pink-400 font-bold mt-2">{t('subtitle')}</p>
              </div>

              <div className="space-y-6">
                <input type="text" placeholder={t('name_label')} className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white outline-none focus:border-pink-500 transition-all font-medium placeholder:text-gray-500" />
                <button className="w-full bg-white text-black py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-500 hover:text-white transition-all shadow-lg active:scale-95">
                  {t('submit_button')}
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-6 font-bold">{t('security_label')}</p>
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-4 bg-green-500/10 rounded-xl blur-2xl group-hover:bg-green-500/20 transition-all duration-500"></div>
                  
                  <button className="relative w-24 h-24 bg-black/40 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center transition-transform active:scale-95">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
                        backgroundSize: '12px 12px'
                      }}
                    />

                    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                      <div className="w-full h-[2px] bg-green-400 shadow-[0_0_15px_#4ade80] animate-scanMove"></div>
                    </div>

                    <svg className="w-10 h-10 text-green-400/80 z-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>

                    <div className="absolute bottom-1 w-full text-center">
                      <span className="text-[6px] text-green-500/60 font-mono animate-pulse uppercase tracking-tighter">System Ready</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`relative z-10 h-full transition-all duration-1000 ${isLoginOpen ? 'md:ml-[400px] blur-md md:blur-none' : 'ml-0'}`}
            onClick={() => isLoginOpen && setIsLoginOpen(false)}
          >
            <CampusDashboard onEnroll={handleEnroll} lang={lang} />
          </div>
          
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 text-white">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-pink-400 font-bold">{t('bulletin_title')}</p>
                <p className="text-sm font-medium">{t('bulletin_text')}</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </main>
  );
}