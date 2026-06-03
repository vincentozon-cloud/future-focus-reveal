'use client';

import React, { useState, useEffect } from 'react';
import { CourseGrid } from './CourseGrid';

const images = [
  '/gallery1.jpg', 
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg', 
  '/gallery7.jpg',
  '/gallery8.jpg',
  '/gallery9.jpg',
  '/gallery10.jpg',
  '/gallery11.jpg',
  '/gallery12.jpg',
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
    <div className="relative w-full bg-transparent">
      <div className="relative z-10 pt-4">
        
        <CourseGrid onEnroll={onEnroll} lang={lang} />

        <div className="max-w-3xl mx-auto px-4 my-16 group">
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl transition-colors transform-gpu">
            <div className="relative h-[500px] md:h-[750px] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-black/40 transition-colors">
              
              {/* I completely removed Framer Motion here and replaced it with native Tailwind CSS opacity transitions to bypass iOS rendering bugs */}
              {images.map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  className={`absolute inset-0 w-full h-full object-contain p-2 transform-gpu transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                  alt="Gallery content"
                />
              ))}

              {/* NAVIGATION ARROWS */}
              <button onClick={prev} className="cursor-pointer touch-manipulation select-none absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[60] group/btn">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-pink-500 group-hover/btn:border-pink-400 group-hover/btn:scale-110 opacity-0 group-hover:opacity-100 group-hover/btn:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 pointer-events-none group-hover/btn:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
              </button>

              <button onClick={next} className="cursor-pointer touch-manipulation select-none absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-[60] group/btn">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white shadow-2xl transition-all duration-300 group-hover/btn:bg-yellow-400 group-hover/btn:border-yellow-300 group-hover/btn:scale-110 group-hover/btn:text-[#1B4332] opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 pointer-events-none group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-6 relative z-50">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)} 
                className={`cursor-pointer touch-manipulation select-none h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-yellow-400' : 'w-3 bg-slate-300 dark:bg-white/20'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}