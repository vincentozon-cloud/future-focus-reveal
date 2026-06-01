'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CampusDashboard from '@/components/campus/CampusDashboard';
import { EnrollmentTools } from '@/components/campus/EnrollmentTools';
import LanguageSelector from '@/components/LanguageSelector'; 
import en from '@/../public/en.json';
import ko from '@/../public/ko.json';

const translations: any = { en, ko };

export default function Home() {
  const [lang, setLang] = useState('en');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const t = (key: string) => translations[lang][key] || key;

  const handleEnroll = async (courseName: string) => {
    const { error } = await supabase
      .from('enrollment')
      .insert([{ full_name: 'Interested Student', course_interest: courseName, source: 'google_seo' }]);

    if (error) console.error('Error:', error.message);
    else alert(lang === 'ko' ? `${courseName}에 대한 관심이 등록되었습니다!` : `Interest registered for ${courseName}!`);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 dark:text-white transition-colors duration-1000 bg-gradient-to-br from-pink-100 via-white to-emerald-100 dark:from-pink-950 dark:via-[#0a0a0a] dark:to-emerald-950">
      
      {/* ========================================= */}
      {/* BACKGROUND TEXTURE & FADED LOGO OVERLAY */}
      {/* ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <img 
          src="/FutureFocus_Logo.png" 
          alt="Future Focus Watermark" 
          className="w-[120vw] md:w-[60vw] opacity-[0.04] dark:opacity-[0.08] object-contain grayscale mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
        />
      </div>

      {/* FLOATING ACTION BUTTONS */}
      {/* FIXED: Shifted down to top-24 so it doesn't overlap the fixed Navbar */}
      <div className="fixed top-24 right-6 z-50 flex items-center gap-3">
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
        <section id="home" className="min-h-screen pt-4 md:pt-12">
          
          <header className="px-4 pb-12 w-full max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center">
              <div className="inline-block mb-8 px-4 py-2 bg-yellow-400 rounded-full text-[#1B4332] text-[10px] font-black uppercase tracking-widest shadow-xl">
                {lang === 'ko' ? '공식 등록 포털' : 'Official Enrollment Portal'}
              </div>

              <div className="w-full flex items-center justify-between gap-2 md:gap-8">
                <div className="shrink-0">
                  <img src="/FutureFocus_Logo.png" alt="Future Focus Official Logo" className="w-16 sm:w-20 md:w-32 h-auto object-contain drop-shadow-md" />
                </div>
                <div className="flex-1 text-center">
                  <h1 className="text-emerald-900 dark:text-emerald-400 text-[11px] sm:text-sm md:text-2xl font-black uppercase tracking-widest leading-tight drop-shadow-sm transition-colors" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {lang === 'ko' ? '퓨처 포커스 언어 및 교육 기관' : (
                      <>Future Focus Language And <br className="hidden md:block" /> Training Institute, Inc.</>
                    )}
                  </h1>
                  <div className="w-12 h-[2px] bg-emerald-500/30 mx-auto my-3 md:my-4 rounded-full transition-colors"></div>
                  <p className="text-[6px] sm:text-[8px] md:text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                    Unit 301, 3rd Floor & Antonio Bldg., Prime St. <br />
                    Brgy. Ayala Alabang, Muntinlupa City, Metro Manila
                  </p>
                </div>
                <div className="shrink-0">
                  <img src="/CamiTeachesKorean_Logo.png" alt="Cami Teaches Korean Logo" className="w-16 sm:w-20 md:w-32 h-auto object-contain drop-shadow-md" />
                </div>
              </div>
            </motion.div>
          </header>

          <CampusDashboard onEnroll={handleEnroll} lang={lang} />
        </section>

        {/* Section 2: About View */}
        <section id="about" className="min-h-screen flex items-center justify-center border-t border-slate-300/30 dark:border-white/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto p-8 text-center bg-white/30 dark:bg-black/30 rounded-3xl backdrop-blur-md shadow-xl border border-white/40 dark:border-white/10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">{t('about_title') || 'About Us'}</h2>
            <div className="w-16 h-1 bg-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg opacity-80 leading-relaxed font-bold tracking-widest text-slate-500 dark:text-slate-400">
                  현재 콘텐츠를 준비 중입니다.<br />
              <span className="text-xs uppercase tracking-[0.3em]">( Coming Soon )</span>
            </p>
          </div>
        </section>

        {/* Section 3: Programs View */}
        <section id="programs" className="min-h-screen flex items-center justify-center border-t border-slate-300/30 dark:border-white/10 backdrop-blur-sm pb-24">
          <div className="max-w-4xl mx-auto p-8 text-center bg-white/30 dark:bg-black/30 rounded-3xl backdrop-blur-md shadow-xl border border-white/40 dark:border-white/10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">{t('programs_title') || 'Our Programs'}</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg opacity-80 leading-relaxed font-bold tracking-widest text-slate-500 dark:text-slate-400">
              현재 콘텐츠를 준비 중입니다.<br />
            <span className="text-xs uppercase tracking-[0.3em]">( Coming Soon )</span>
            </p>
          </div>
        </section>

        {/* ========================================= */}
        {/* NEW SECTION: CONTACTS, MAP & CALCULATOR   */}
        {/* ========================================= */}
        <section id="contacts" className="min-h-screen flex flex-col items-center justify-center border-t border-slate-300/30 dark:border-white/10 backdrop-blur-sm pt-24 pb-32">
          <div className="max-w-6xl mx-auto w-full px-4">
            
            {/* SOCIAL SECTION MERGED HERE */}
            <div className="mb-20 text-center relative z-20">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-slate-500 dark:text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 transition-colors">
                  {lang === 'ko' ? '함께하세요' : 'Stay Connected'}
                </h2>
                <h3 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black uppercase italic tracking-tighter transition-colors" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  {lang === 'ko' ? '팔로우 하기' : 'Follow us on'}<span className="text-pink-500">:</span>
                </h3>
                <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {[
                  { id: 'fb', full: 'Facebook', color: '#1877F2', link: 'https://www.facebook.com/camiteacheskorean', svg: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/> },
                  { id: 'yt', full: 'YouTube', color: '#FF0000', link: 'https://www.youtube.com/@CamiTeachesKorean', svg: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> },
                  { id: 'tk', full: 'TikTok', color: '#000000', link: 'https://www.tiktok.com/@camiteacheskorean', svg: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96a6.66 6.66 0 0 1 4.44-1.56c.05 1.63.02 3.26.02 4.88-.06-.01-.11-.01-.17-.01-1.51-.03-3.2.74-3.9 2.03-.8 1.41-.61 3.3.44 4.58.77.96 2 1.43 3.2 1.3 1.34-.04 2.6-.82 3.22-2 .41-.75.54-1.62.53-2.48.01-4.67 0-9.33.01-14.01z"/> }
                ].map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl p-2 pr-6 transition-all duration-300 shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.4)' }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-360" style={{ color: social.color }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 filter drop-shadow-md">
                        {social.svg}
                      </svg>
                    </div>
                    <span className="ml-3 text-slate-800 dark:text-white font-sans font-black uppercase tracking-tighter text-lg italic transition-all duration-300 group-hover:text-yellow-500 dark:group-hover:text-yellow-400">
                      {social.full}
                    </span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ENROLLMENT TOOLS (CALCULATOR & MAP) MERGED HERE */}
            <EnrollmentTools />

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

      {/* FOOTER MERGED HERE */}
      <footer className="py-12 text-center relative z-10 w-full border-t border-slate-300/30 dark:border-white/10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/40 text-[10px] font-bold uppercase tracking-widest transition-colors">
          Powered by <div className="w-px h-4 bg-slate-300 dark:bg-white/20" /> eMVeOzHub
        </div>
      </footer>

    </main>
  );
}