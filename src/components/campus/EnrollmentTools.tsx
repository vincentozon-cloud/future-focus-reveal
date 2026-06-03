'use client';

import React, { useState } from 'react';

const courses = [
  { id: 'eps', name: 'EPS-TOPIK Boot Camp', fee: 4000, weeks: 10 },
  { id: 'elem1', name: 'Elementary Korean 1-1', fee: 2500, weeks: 10 },
  { id: 'elem2', name: 'Elementary Korean 1-2', fee: 2500, weeks: 10 },
  { id: 'basic-we', name: 'Basic Korean Class (Weekends)', fee: 2000, weeks: 10 },
  { id: 'basic-wd', name: 'Basic Korean Class (Weekdays)', fee: 2000, weeks: 10 },
];

export function EnrollmentTools() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const [paymentMode, setPaymentMode] = useState<'full' | 'weekly'>('weekly');
  
  const activeCourse = courses.find(c => c.id === selectedCourse) || courses[0];
  const weeklyRate = activeCourse.fee / activeCourse.weeks;

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      
      {/* LEFT: Tuition Calculator */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl transform-gpu border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-center transition-colors duration-500">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white mb-6 select-none">
          Tuition <span className="text-pink-600 dark:text-pink-400">Calculator</span>
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 select-none">Select 3rd Semester Program</label>
            <div className="relative">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="cursor-pointer touch-manipulation relative z-50 w-full bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-sm font-bold text-slate-800 dark:text-white outline-none focus:border-pink-500 transition-colors appearance-none select-none"
              >
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                ▼
              </div>
            </div>
          </div>

          {/* Payment Mode Toggle */}
          <div className="flex bg-slate-200 dark:bg-black/40 p-1 rounded-xl">
            <button
              onClick={() => setPaymentMode('weekly')}
              onPointerDown={() => setPaymentMode('weekly')}
              className={`...`}
            >
              Weekly Plan
            </button>

            <button
              onClick={() => setPaymentMode('full')}
              onPointerDown={() => setPaymentMode('full')}
              className={`...`}
            >
              Full Payment
            </button>
          </div>

          {/* Dynamic Calculation Output */}
          <div className="p-6 bg-slate-900 dark:bg-black/80 rounded-2xl border border-slate-800 dark:border-white/10 flex flex-col gap-4 transition-all duration-300 pointer-events-none select-none">
            <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span>Total Tuition</span>
              <span className={paymentMode === 'full' ? 'text-white' : ''}>₱{activeCourse.fee.toLocaleString()}.00</span>
            </div>
            
            {paymentMode === 'weekly' && (
              <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span>Semester Duration</span>
                <span>{activeCourse.weeks} Weeks</span>
              </div>
            )}

            <div className="flex justify-between items-start text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span>Inclusions</span>
              <span className="text-right text-[10px] leading-tight">
                Softcopy of EPS-TOPIK <br/>
                Book 1 & 2, Unlimited <br/>
                Sit-in, Class Recording
              </span>
            </div>
            
            <div className="w-full h-px bg-slate-700/50 my-1"></div>
            
            <div className="flex justify-between items-end text-white text-lg font-black uppercase tracking-tighter">
              <span>{paymentMode === 'weekly' ? 'Weekly Investment' : 'Total Payment'}</span>
              <div className="text-right">
                {paymentMode === 'weekly' ? (
                  <span className="text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.5)] text-2xl">
                    ₱{weeklyRate.toLocaleString()}.00 <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">/wk</span>
                  </span>
                ) : (
                  <span className="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)] text-2xl">
                    ₱{activeCourse.fee.toLocaleString()}.00
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: MAP & DIRECTIONS - Swapped broken iframe for a high-performance static map block */}
      <div className="space-y-6">
        <div className="bg-slate-200 h-80 rounded-4xl overflow-hidden shadow-2xl relative border-4 border-white transform-gpu group">
          {/* I used a static map placeholder that links directly to the app/browser map */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=8+Antonio+Center+Bldg+Prime+St+Ayala+Alabang" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=14.4239,121.0360&zoom=15&size=600x400&key=YOUR_API_KEY_HERE')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all flex items-center justify-center">
              <span className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl text-slate-900">
                View in Maps App
              </span>
            </div>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-4xl shadow-xl border border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="font-black text-slate-900 uppercase italic tracking-tighter">Visit Our Campus</h4>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
              Unit 301, 3rd Floor 8 Antonio Center Bldg. Prime St., Madrigal Business Park <br/>
              Brgy. Ayala Alabang, Muntinlupa City Metro Manila
            </p>
          </div>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=8+Antonio+Center+Bldg+Prime+St+Ayala+Alabang" 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer touch-manipulation relative z-50 bg-[#D64C72] text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#b03e5d] transition-all shadow-lg text-center select-none"
          >
            Open Maps
          </a>
        </div>
      </div>
    </section>
  );
}