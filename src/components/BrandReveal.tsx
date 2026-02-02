'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandReveal() {
  const [showNewSchool, setShowNewSchool] = useState(false);

  useEffect(() => {
    // Dramatic pause for the Cami Logo before the transition
    const timer = setTimeout(() => setShowNewSchool(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {!showNewSchool ? (
          /* LAYER 1: CAMI TEACHES KOREAN (The Departure) */
          <motion.div
            key="cami-layer"
            initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ 
              opacity: 0, 
              filter: "blur(40px)", 
              scale: 1.1,
              transition: { duration: 2, ease: "easeInOut" } 
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
          </motion.div>
        ) : (
          /* LAYER 2: FUTURE FOCUS (The Arrival) */
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
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="z-10 flex flex-col items-center text-center px-4">
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
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

              {/* UPDATED: GLOWING BUTTON LOGIC */}
              <motion.button
                initial={{ boxShadow: "0 0 0px rgba(255, 255, 255, 0)" }}
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)", 
                    "0 0 25px rgba(255, 255, 255, 0.6)", 
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-4 bg-white text-[#1B4332] font-black rounded-full shadow-xl uppercase tracking-widest hover:bg-pink-50 transition-all"
              >
                Enter Campus
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}