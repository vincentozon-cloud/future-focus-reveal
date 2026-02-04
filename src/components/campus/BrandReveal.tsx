'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandReveal({ onEnter }: { onEnter: () => void }) {
  const [showNewSchool, setShowNewSchool] = useState(false);

  useEffect(() => {
    // LAYER 1 DURATION: 2 Seconds
    const transitionTimer = setTimeout(() => {
      setShowNewSchool(true);
    }, 2000);

    // LAYER 2 DURATION: 2 Seconds (Total 4s from start)
    // Automatically enters the dashboard after the second layer has been visible
    const autoEnterTimer = setTimeout(() => {
      onEnter();
    }, 4000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(autoEnterTimer);
    };
  }, [onEnter]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {!showNewSchool ? (
          /* LAYER 1: CAMI TEACHES KOREAN */
          <motion.div
            key="cami-layer"
            initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ 
              opacity: 0, 
              filter: "blur(40px)", 
              scale: 1.1,
              transition: { duration: 1, ease: "easeInOut" } 
            }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#FFB6C1]"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 5px #ff1493)", "drop-shadow(0 0 25px #ff1493)", "drop-shadow(0 0 5px #ff1493)"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl p-4">
                <img src="/CamiTeachesKorean_Logo.png" alt="Cami Logo" className="w-full h-auto" />
              </div>
            </motion.div>
            <p className="mt-8 text-[#ff1493] font-black uppercase tracking-[0.3em] animate-pulse">
              
            </p>
          </motion.div>
        ) : (
          /* LAYER 2: FUTURE FOCUS */
          <motion.div
            key="future-focus"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              filter: "blur(0px)",
              transition: { duration: 2, ease: "easeOut" } 
            }}
            className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #D64C72 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="z-10 flex flex-col items-center text-center px-4">
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8 border-b-8 border-[#1B4332]"
              >
                <img 
                  src="/FutureFocus_Logo.png" 
                  alt="Future Focus Logo" 
                  className="w-56 h-auto"
                />
              </motion.div>

              <h1 className="text-white text-5xl md:text-6xl font-black tracking-tighter drop-shadow-2xl">
                FUTURE FOCUS
              </h1>
              <p className="text-pink-200 text-lg md:text-xl font-light tracking-[0.4em] mt-2">
                LANGUAGE AND TRAINING INSTITUTE
              </p>

              {/* AUTO-LOADING BAR (Replaces static button feel) */}
              <div className="mt-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "linear" }}
                  className="h-full bg-white"
                />
              </div>
              <p className="mt-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Entering Campus...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}