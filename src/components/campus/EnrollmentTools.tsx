'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Named export to match your Dashboard import
export function EnrollmentTools() {
  const [coursePrice, setCoursePrice] = useState(4000);
  const [downpayment, setDownpayment] = useState(1000);

  const balance = coursePrice - downpayment;
  const weekly = (balance / 4).toFixed(2);
  const monthly = (balance / 2).toFixed(2);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      
      {/* LEFT: INSTALLMENT CALCULATOR */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100"
      >
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">
          Payment Calculator
        </h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">eMVeOzHub Financial Tool</p>
        
        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Select Course</label>
            <select 
              onChange={(e) => setCoursePrice(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-slate-700 focus:ring-2 focus:ring-[#1B4332]"
            >
              <option value="4000">EPS-TOPIK Boot Camp (₱4,000)</option>
              <option value="2500">Elementary Korean (₱2,500)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Downpayment (₱)</label>
            <input 
                type="number" 
                value={downpayment === 0 ? '' : downpayment} // If 0, show empty so the next digit typed is the first
                onChange={(e) => setDownpayment(Number(e.target.value))}
                onFocus={(e) => e.target.select()} // Bonus: selects the text when clicked for easy replacement
                 className="w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-[#1B4332] focus:ring-2 focus:ring-[#1B4332]"
            />
          </div>

          <div className="p-6 bg-[#1B4332] rounded-2xl text-white shadow-inner">
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-4 italic">Estimated Installments</p>
            <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
              <span className="text-sm font-medium">4x Weekly:</span>
              <span className="text-2xl font-black text-yellow-400">₱{weekly}</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium">2x Monthly:</span>
              <span className="text-2xl font-black text-yellow-400">₱{monthly}</span>
            </div>
          </div>
          
          <p className="text-[9px] text-center text-slate-400 font-medium">
            *Final payment terms may vary upon enrollment at the campus.
          </p>
        </div>
      </motion.div>

      {/* RIGHT: MAP & DIRECTIONS */}
      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="space-y-6"
>
  <div className="bg-slate-200 h-80 rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-white">
    {/* Official Metroview Building Location */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.353392473456!2d120.99013807584556!3d14.571563985913203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd845c828eaf%3A0x779f9233a2d58c03!2sMetroview%20Building!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
  
  <div className="p-6 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-between">
    <div>
      <h4 className="font-black text-slate-900 uppercase italic tracking-tighter">Visit Our Campus</h4>
      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
        Unit 407-409, 4th Floor, Metroview Building <br/>
        942 Quirino Ave, Malate, Manila
      </p>
    </div>
    <a 
      href="https://maps.google.com/?cid=8619751370097265667&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D64C72] text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#b03e5d] transition-all shadow-lg text-center"
    >
      Open Maps
    </a>
  </div>
</motion.div>
    </section>
  );
}