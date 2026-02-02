'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CourseGrid } from './CourseGrid';
import { EnrollmentTools } from './EnrollmentTools'; // Fixed path here

export default function CampusDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: '#1a2e26', // Deep chalkboard green
        backgroundImage: `
          radial-gradient(circle at center, #2d4a3e 0%, #1a2e26 100%),
          url("https://www.transparenttextures.com/patterns/asfalt-light.png")
        `,
      }}
    >
      {/* Primary Chalk Dust Effect */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" 
        style={{ filter: 'contrast(150%) brightness(80%)' }}
      />

      {/* Rough Chalkboard "Wiped" Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/chalkboard.png')`,
          filter: 'contrast(120%) brightness(100%)',
        }}
      />

      {/* CAMPUS NAV */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#1B4332] font-black text-xs shadow-lg">FF</div>
          <span className="font-black text-white tracking-tighter uppercase">Future Focus</span>
        </div>
        <div className="hidden md:block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
          eMVeOzHub • 2026 Student Portal
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="px-6 pt-16 pb-4 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.85] mb-6 uppercase italic tracking-tighter drop-shadow-lg">
            Welcome to <br/>
            <span className="text-yellow-400">The Campus</span>
          </h1>
          <div className="h-1.5 w-24 bg-pink-500 mx-auto mb-6 rounded-full shadow-glow" />
          <p className="text-white/70 font-medium max-w-md mx-auto text-sm md:text-base">
            Select your program below. We are ready for your enrollment, online or face-to-face.
          </p>
        </motion.div>
      </header>

      <div className="relative z-10">
        <CourseGrid />
        <EnrollmentTools />
      </div>

      {/* FOOTER */}
      <footer className="py-20 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Strategic Partner</span>
          <div className="w-[1px] h-4 bg-white/20" />
          <span className="text-[11px] font-black text-white tracking-tighter uppercase">eMVeOzHub</span>
        </div>
      </footer>
    </motion.div>
  );
}