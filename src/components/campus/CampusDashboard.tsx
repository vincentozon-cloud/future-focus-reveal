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

export default function CampusDashboard() {
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
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: '#1a2e26',
        backgroundImage: `radial-gradient(circle at center, #2d4a3e 0%, #1a2e26 100%), url("https://www.transparenttextures.com/patterns/asfalt-light.png")`,
      }}
    >
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" style={{ filter: 'contrast(150%) brightness(80%)' }} />

      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#1B4332] font-black text-xs">FF</div>
          <span className="font-black text-white tracking-tighter uppercase">Future Focus</span>
        </div>
      </nav>

      <header className="px-6 pt-16 pb-4 text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-white text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter">
          Welcome to <span className="text-yellow-400">The Campus</span>
        </h1>
        {/* NEWS BULLETIN */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-lg mx-auto flex items-center gap-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="text-sm text-white/90 font-medium italic">"Korean Class Level 1 starts Monday."</p>
        </div>
      </header>

      <div className="relative z-10">
        <CourseGrid />

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

              {/* CREATIVE NAVIGATION ARROWS - PLACED HERE */}
              <button 
                onClick={prev} 
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 group/btn"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-pink-500 group-hover/btn:border-pink-400 group-hover/btn:scale-110 opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
              </button>

              <button 
                onClick={next} 
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group/btn"
              >
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

          {/* SOCIAL SECTION HEADER */}
          <div className="mt-20 mb-12 text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                Stay Connected
              </h2>
              <h3 className="text-white text-4xl md:text-5xl font-black uppercase italic tracking-tighter drop-shadow-md">
                Follow us on<span className="text-pink-500">:</span>
              </h3>
              <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* BRAND-OFFICIAL SOCIAL LINKS */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { 
                  id: 'fb-p', 
                  full: 'Facebook', 
                  color: '#1877F2', 
                  link: 'https://www.facebook.com/camiteacheskorean',
                  svg: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                },
                { 
                  id: 'yt', 
                  full: 'YouTube', 
                  color: '#FF0000', 
                  link: 'https://www.youtube.com/@CamiTeachesKorean',
                  svg: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                },
                { 
                  id: 'tk', 
                  full: 'TikTok', 
                  color: '#000000', 
                  link: 'https://www.tiktok.com/@camiteacheskorean',
                  svg: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96a6.66 6.66 0 0 1 4.44-1.56c.05 1.63.02 3.26.02 4.88-.06-.01-.11-.01-.17-.01-1.51-.03-3.2.74-3.9 2.03-.8 1.41-.61 3.3.44 4.58.77.96 2 1.43 3.2 1.3 1.34-.04 2.6-.82 3.22-2 .41-.75.54-1.62.53-2.48.01-4.67 0-9.33.01-14.01z"/>
                }
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
          Strategic Partner <div className="w-[1px] h-4 bg-white/20" /> eMVeOzHub
        </div>
      </footer>
    </motion.div>
  );
}