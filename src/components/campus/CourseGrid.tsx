'use client';

import React, { useRef, useEffect, useState } from 'react';

const classPrograms = [
  {
    id: 'eps-topik',
    tag: 'Advanced',
    title: 'EPS-TOPIK Boot Camp',
    schedule: 'Weekends (Starts Jul 25)',
    time: '7:00 PM - 10:00 PM',
    hours: '60 HRS',
    fee: '₱4,000.00',
    req: 'Basic Korean or EKC 1-1 Level Test',
    theme: 'bg-emerald-900 border-emerald-700',
    textTheme: 'text-emerald-100'
  },
  {
    id: 'elem-1-1',
    tag: 'Intermediate',
    title: 'Elementary Korean 1-1',
    schedule: 'Mon-Wed-Fri (Starts Jul 20)',
    time: '10:00 AM - 12:00 PM',
    hours: '60 HRS',
    fee: '₱2,500.00',
    req: 'Basic Korean or EKC 1-1 Level Test',
    theme: 'bg-pink-900 border-pink-700',
    textTheme: 'text-pink-100'
  },
  {
    id: 'elem-1-2',
    tag: 'Intermediate',
    title: 'Elementary Korean 1-2',
    schedule: 'Mon - Fri (Starts Jul 20)',
    time: '5:30 PM - 7:00 PM',
    hours: '60 HRS',
    fee: '₱2,500.00',
    req: 'EKC 1-1 or EKC 1-2 Level Test',
    theme: 'bg-pink-900 border-pink-700',
    textTheme: 'text-pink-100'
  },
  {
    id: 'basic-we',
    tag: 'Beginner',
    title: 'Basic Korean Class',
    schedule: 'Weekends (Starts Jul 25)',
    time: '1:00 PM - 4:00 PM',
    hours: '60 HRS',
    fee: '₱2,000.00',
    req: 'None',
    theme: 'bg-slate-900 border-slate-700',
    textTheme: 'text-slate-300'
  },
  {
    id: 'basic-wd',
    tag: 'Beginner',
    title: 'Basic Korean Class',
    schedule: 'Mon-Wed-Fri (Starts Jul 20)',
    time: '8:00 PM - 10:00 PM',
    hours: '60 HRS',
    fee: '₱2,000.00',
    req: 'None',
    theme: 'bg-slate-900 border-slate-700',
    textTheme: 'text-slate-300'
  }
];

export function CourseGrid({ onEnroll, lang }: { onEnroll: (course: string) => void, lang: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div id="programs" className="scroll-mt-32 w-full max-w-6xl mx-auto px-4 mt-8">
      
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
            3rd Semester <span className="text-pink-600 dark:text-pink-400">Programs</span>
          </h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
            Jul 19 — Sep 26, 2026 • Online Classes
          </p>
        </div>
        
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="cursor-pointer touch-manipulation relative z-50 select-none p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-pink-500 hover:text-white transition-all active:scale-95"
          >
            <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="cursor-pointer touch-manipulation relative z-50 select-none p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-yellow-400 hover:text-[#1B4332] transition-all active:scale-95"
          >
            <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {classPrograms.map((course) => (
            <div 
              key={course.id} 
              className={`min-w-70 md:min-w-[320px] snap-center shrink-0 rounded-3xl p-6 border shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-2 ${course.theme}`}
            >
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 backdrop-blur-md">
                  {course.tag}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                  {course.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🗓️</span>
                    <p className={`text-xs font-bold tracking-wider uppercase ${course.textTheme}`}>{course.schedule}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">⏰</span>
                    <p className={`text-xs font-bold tracking-wider uppercase ${course.textTheme}`}>{course.time} <span className="opacity-50">({course.hours})</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">⚠️</span>
                    <p className={`text-[9px] font-bold tracking-widest uppercase ${course.textTheme} leading-relaxed`}>Req: {course.req}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-lg font-black text-white tracking-tighter">{course.fee}</span>
                <button 
                  onClick={() => onEnroll(course.title)}
                  onPointerDown={() => onEnroll(course.title)}
                  className="cursor-pointer touch-manipulation relative z-50 select-none px-4 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 hover:text-[#1B4332] transition-colors"
                >
                  {lang === 'ko' ? '등록하기' : 'Enroll Now'}
                </button>
              </div>
            </div>
          ))}
          
          <div className="min-w-70 md:min-w-[320px] snap-center shrink-0 rounded-3xl p-6 border border-dashed border-slate-400 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-4">🤫</span>
            <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tighter mb-2">Secret Program</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Revealing Soon...</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}