'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CourseGrid } from './CourseGrid';

const images = [
  '/gallery1.jpg', 
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
];

export default function CampusDashboard({ onEnroll, lang = 'en' }: { onEnroll: (courseName: string) => void, lang?: string }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => { next(); }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    // FIX: Swapped motion.div for a standard div to bypass the React 19 visibility bug
    <div className="relative w-full bg-transparent">
      <div className="relative z-10 pt-4">
        
        {/* THIS IS YOUR DASHBOARD CONTENT */}
        <CourseGrid onEnroll={onEnroll} lang={lang} />

        {/* GALLERY SECTION */}
        <div className="max-w-6xl mx-auto px-4 my-16 group">
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl transition-colors">
            <div className="relative h-100 md:h-150 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-black/40 transition-colors">
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
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-pink-500 group-hover/btn:border-pink-400 group-hover/btn:scale-110 opacity-0 group-hover:opacity-100 group-hover/btn:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
              </button>

              <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group/btn">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-yellow-400 group-hover/btn:border-yellow-300 group-hover/btn:scale-110 group-hover/btn:text-[#1B4332] opacity-0 group-hover:opacity-100">
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
              <button key={i} onClick={() => setIndex(i)} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-yellow-400' : 'w-3 bg-slate-300 dark:bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}