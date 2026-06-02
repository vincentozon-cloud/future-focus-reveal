'use client';

import React, { useState } from 'react';

const courses = [
  { id: 'eps', name: 'EPS-TOPIK Boot Camp', fee: 4000 },
  { id: 'elem1', name: 'Elementary Korean 1-1', fee: 2500 },
  { id: 'elem2', name: 'Elementary Korean 1-2', fee: 2500 },
  { id: 'basic-we', name: 'Basic Korean Class (Weekends)', fee: 2000 },
  { id: 'basic-wd', name: 'Basic Korean Class (Weekdays)', fee: 2000 },
];

export function EnrollmentTools() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const activeCourse = courses.find(c => c.id === selectedCourse) || courses[0];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      
      {/* LEFT: Tuition Calculator */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-center transition-colors duration-500">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white mb-6">
          Tuition <span className="text-pink-600 dark:text-pink-400">Calculator</span>
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Select 3rd Semester Program</label>
            <div className="relative">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-sm font-bold text-slate-800 dark:text-white outline-none focus:border-pink-500 transition-colors cursor-pointer appearance-none"
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

          <div className="p-6 bg-slate-900 dark:bg-black/80 rounded-2xl border border-slate-800 dark:border-white/10 flex flex-col gap-3">
            <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span>Base Tuition</span>
              <span>₱{activeCourse.fee.toLocaleString()}.00</span>
            </div>
            
            <div className="flex justify-between items-start text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span>Inclusions</span>
              <span className="text-right text-[10px] leading-tight">
                Softcopy of EPS-TOPIK <br/>
                Book 1 & 2, Unlimited <br/>
                Sit-in, Class Recording
              </span>
            </div>

            <div className="w-full h-px bg-slate-700/50 my-2"></div>
            <div className="flex justify-between items-center text-white text-lg font-black uppercase tracking-tighter">
              <span>Total Estimated</span>
              <span className="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">₱{activeCourse.fee.toLocaleString()}.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: MAP & DIRECTIONS */}
      <div className="space-y-6">
        <div className="bg-slate-200 h-80 rounded-4xl overflow-hidden shadow-2xl relative border-4 border-white">
          {/* Real Antonio Center Location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.0733856149814!2d121.03157597584447!3d14.451792480084321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d02008f1b62f%3A0x6b499839c063167!2sAntonio%20Center!5e0!3m2!1sen!2sph!4v1707240000000!5m2!1sen!2sph"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
            href="https://maps.app.goo.gl/pW8vT5uD2i4CgYVz9" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D64C72] text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#b03e5d] transition-all shadow-lg text-center"
          >
            Open Maps
          </a>
        </div>
      </div>
    </section>
  );
}