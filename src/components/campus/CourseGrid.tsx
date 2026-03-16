'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for the prop we are passing down
interface CourseGridProps {
  onEnroll: (courseName: string) => void;
  lang?: string;
}

export function CourseGrid({ onEnroll, lang = 'en' }: CourseGridProps) {
  const courses = [
    {
      title: lang === 'ko' ? "EPS-TOPIK 부트캠프" : "EPS-TOPIK BOOT CAMP",
      instructor: lang === 'ko' ? "카미 선생님" : "Teacher Cami",
      price: 4000,
      schedule: lang === 'ko' ? "매주 화-목-토 (오후 8:00 – 10:00)" : "Every TUE-THU-SAT (8:00 PM – 10:00 PM)",
      starts: lang === 'ko' ? "2026년 1월 27일" : "Jan 27, 2026",
      duration: "60 Hours",
      enrollLink: "https://tinyurl.com/EPS-TOPIKBOOTCAMP",
      color: "#1B4332"
    },
    {
      title: lang === 'ko' ? "기초 한국어 클래스" : "ELEMENTARY KOREAN CLASS",
      instructor: lang === 'ko' ? "미코 선생님" : "Teacher Meeko",
      price: 2500,
      schedule: lang === 'ko' ? "매주 월-수-금 (오후 6:00 – 9:00)" : "Every MON-WED-FRI (6:00 PM – 9:00 PM)",
      starts: lang === 'ko' ? "2026년 2월 2일" : "Feb 2, 2026",
      duration: "60 Hours",
      enrollLink: "https://tinyurl.com/ELEMKOREANCLASS",
      color: "#D64C72"
    }
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-4xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
          >
            <div className="p-8 text-white" style={{ backgroundColor: course.color }}>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">{course.title}</h3>
              <p className="text-sm opacity-80 italic">
                {lang === 'ko' ? `${course.instructor}와 함께` : `with ${course.instructor}`}
              </p>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-slate-600 text-sm font-medium">
                📅 {lang === 'ko' ? '시작일:' : 'Starts:'} {course.starts}
              </p>
              <p className="text-slate-600 text-sm font-medium">⏰ {course.schedule}</p>
              <div className="pt-4">
                <a 
                  href={course.enrollLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => onEnroll(course.title)}
                  className="block w-full text-center py-4 rounded-xl font-bold bg-slate-900 text-white"
                >
                  {lang === 'ko' ? '지금 등록하기' : 'ENROLL NOW'}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}