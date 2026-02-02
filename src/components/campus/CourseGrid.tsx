'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Remove 'default' here to match the new import style
export function CourseGrid() {
  const courses = [
    {
      title: "EPS-TOPIK BOOT CAMP",
      instructor: "Teacher Cami",
      price: 4000,
      schedule: "Every TUE-THU-SAT (8:00 PM – 10:00 PM)",
      starts: "Jan 27, 2026",
      duration: "60 Hours",
      enrollLink: "https://tinyurl.com/EPS-TOPIKBOOTCAMP",
      color: "#1B4332",
      badge: "Institute Head"
    },
    {
      title: "ELEMENTARY KOREAN CLASS",
      instructor: "Teacher Meeko",
      price: 2500,
      schedule: "Every MON-WED-FRI (6:00 PM – 9:00 PM)",
      starts: "Feb 2, 2026",
      duration: "60 Hours",
      enrollLink: "https://tinyurl.com/ELEMKOREANCLASS",
      color: "#D64C72",
      badge: "Language Partner"
    }
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
          >
            <div className="p-8 text-white" style={{ backgroundColor: course.color }}>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">{course.title}</h3>
              <p className="text-sm opacity-80 italic">with {course.instructor}</p>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-slate-600 text-sm font-medium">📅 Starts: {course.starts}</p>
              <p className="text-slate-600 text-sm font-medium">⏰ {course.schedule}</p>
              <div className="pt-4">
                <a href={course.enrollLink} target="_blank" className="block w-full text-center py-4 rounded-xl font-bold bg-slate-900 text-white">
                  ENROLL NOW
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}