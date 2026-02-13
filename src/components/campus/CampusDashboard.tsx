'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CourseGrid } from './CourseGrid';
import { EnrollmentTools } from './EnrollmentTools';

const images = [
  '/gallery1.jpg', 
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
];

// Added lang prop to the interface
export default function CampusDashboard({ onEnroll, lang = 'en' }: { onEnroll: (courseName: string) => void, lang?: string }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => { next(); }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden bg-transparent" // CHANGED: Set to transparent
    >
      {/* Background Textures - Kept subtle for depth but transparent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" style={{ filter: 'contrast(150%) brightness(80%)' }} />

      {/* UPDATED NAV: SIDE-BY-SIDE LOGOS */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-1.5 pr-4 border border-white/10">
            {/* Cami Logo */}
            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg">
              <img 
                src="/CamiTeachesKorean_Logo.png" 
                alt="Cami Teaches Korean" 
                className="w-full h-auto" 
              />
            </div>

            {/* Divider Line */}
            <div className="w-[1px] h-6 bg-white/20 mx-1" />

            {/* Future Focus Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg">
                <img 
                  src="/FutureFocus_Logo.png" 
                  alt="Future Focus" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white text-[10px] tracking-tighter uppercase leading-none">
                  {lang === 'ko' ? '퓨처 포커스' : 'Future Focus'}
                </span>
                <span className="text-[7px] text-white/40 font-bold uppercase tracking-widest mt-0.5">
                  {lang === 'ko' ? '언어 및 교육 기관' : 'Language and Training Institute'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BADGE */}
        <div className="hidden md:block">
          <div className="px-4 py-2 bg-yellow-400 rounded-full text-[#1B4332] text-[10px] font-black uppercase tracking-widest shadow-xl">
            {lang === 'ko' ? '공식 등록 포털' : 'Official Enrollment Portal'}
          </div>
        </div>
      </nav>

      {/* REFINED ACADEMIC HEADER */}
      <header className="px-6 pt-20 pb-12 text-center max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-[0.6em] mb-4 drop-shadow-sm">
            {lang === 'ko' ? '공식 포털에 오신 것을 환영합니다' : 'Welcome to the Official Portal'}
          </h2>
          
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-tight leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            <span className="font-black block mb-2 tracking-tighter uppercase">
              {lang === 'ko' ? '퓨처 포커스' : 'Future Focus'}
            </span>
            <span className="text-2xl md:text-3xl font-serif italic text-white/80 block border-t border-white/10 pt-4 mt-4 max-w-2xl mx-auto">
              {lang === 'ko' ? '언어 및 교육 기관' : 'Language and Training Institute'}
            </span>
          </h1>

          {/* ELEGANT DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-8 opacity-30">
            <div className="h-[1px] w-12 bg-white" />
            <div className="w-2 h-2 rounded-full border border-white rotate-45" />
            <div className="h-[1px] w-12 bg-white" />
          </div>

          {/* REFINED NEWS BULLETIN */}
          <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 inline-flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">
              {lang === 'ko' ? '학사 공지: 한국어 수업 레벨 1 월요일 시작' : 'Academic Notice: Korean Class Level 1 starts Monday'}
            </p>
          </div>
        </motion.div>
      </header>

      <div className="relative z-10">
        {/* Pass the lang prop down to CourseGrid */}
        <CourseGrid onEnroll={onEnroll} lang={lang} />

        {/* GALLERY SECTION */}
        <div className="max-w-6xl mx-auto px-4 my-16 group">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl">
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-2xl bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={index} 
                  src={images[index]} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 1.2 }} 
                  className="absolute inset-0 w-full h-full object-contain p-2" 
                />
              </AnimatePresence>

              {/* NAVIGATION ARROWS */}
              <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 group/btn">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-pink-500 group-hover/btn:border-pink-400 group-hover/btn:scale-110 opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
              </button>

              <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group/btn">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-yellow-400 group-hover/btn:border-yellow-300 group-hover/btn:scale-110 group-hover/btn:text-[#1B4332] opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-yellow-400' : 'w-3 bg-white/20'}`} />
            ))}
          </div>

          {/* SOCIAL SECTION */}
          <div className="mt-20 mb-12 text-center relative z-20">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                {lang === 'ko' ? '함께하세요' : 'Stay Connected'}
              </h2>
              <h3 className="text-white text-4xl md:text-5xl font-black uppercase italic tracking-tighter" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
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
                  className="group relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 pr-6 transition-all duration-300 shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]" style={{ color: social.color }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 filter drop-shadow-md">
                      {social.svg}
                    </svg>
                  </div>
                  <span className="ml-3 text-white font-sans font-black uppercase tracking-tighter text-lg italic transition-all duration-300 group-hover:text-yellow-400">
                    {social.full}
                  </span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <EnrollmentTools />
      </div>

      <footer className="py-20 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
          Powered by <div className="w-[1px] h-4 bg-white/20" /> eMVeOzHub
        </div>
      </footer>
    </motion.div>
  );
}