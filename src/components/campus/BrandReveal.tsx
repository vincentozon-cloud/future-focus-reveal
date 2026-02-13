'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import en from '@/../public/en.json';
import ko from '@/../public/ko.json';

const translations: any = { en, ko };

export default function BrandReveal({ onEnter, lang = 'en' }: { onEnter: () => void, lang?: string }) {
  const [showNewSchool, setShowNewSchool] = useState(false);
  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    // LAYER 1 DURATION: Now Snappy (1 Second)
    const transitionTimer = setTimeout(() => {
      setShowNewSchool(true);
    }, 1000);

    // LAYER 2 DURATION: Now Long & Focused (4 Seconds)
    // Total wait: 5s to allow for a "Future" build-up
    const autoEnterTimer = setTimeout(() => {
      onEnter();
    }, 5000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(autoEnterTimer);
    };
  }, [onEnter]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {!showNewSchool ? (
          /* LAYER 1: CAMI TEACHES KOREAN - QUICK TRANSITION */
          <motion.div
            key="cami-layer"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              filter: "blur(20px)",
              transition: { duration: 0.4, ease: "circIn" } // Fast exit
            }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#FFB6C1]"
          >
            {/* RESTORED GLOWING HEARTBEAT */}
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
                filter: [
                  "drop-shadow(0 0 10px rgba(255,20,147,0.5))", 
                  "drop-shadow(0 0 40px rgba(255,20,147,0.8))", 
                  "drop-shadow(0 0 10px rgba(255,20,147,0.5))"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl p-4">
                <img src="/CamiTeachesKorean_Logo.png" alt="Cami Logo" className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* LAYER 2: FUTURE FOCUS - SLOW & IMMERSIVE */
          <motion.div
            key="future-focus"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              filter: "blur(0px)",
              transition: { duration: 2.5, ease: "easeOut" } // Long, cinematic entry
            }}
            className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #D64C72 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="z-10 flex flex-col items-center text-center px-4">
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }} // Delayed logo appearance
                className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8 border-b-8 border-[#1B4332]"
              >
                <img 
                  src="/FutureFocus_Logo.png" 
                  alt="Future Focus Logo" 
                  className="w-56 h-auto"
                />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="text-white text-5xl md:text-6xl font-black tracking-tighter drop-shadow-2xl"
              >
                {lang === 'ko' ? '퓨처 포커스' : 'FUTURE FOCUS'}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="text-pink-200 text-lg md:text-xl font-light tracking-[0.4em] mt-2"
              >
                {lang === 'ko' ? '언어 및 교육 기관' : 'LANGUAGE AND TRAINING INSTITUTE'}
              </motion.p>

              {/* SLOW LOADING BAR */}
              <div className="mt-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }} // Matches the slower theme
                  className="h-full bg-white"
                />
              </div>
              <p className="mt-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {lang === 'ko' ? '보안 링크 설정 중...' : 'Establishing Secure Link...'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}