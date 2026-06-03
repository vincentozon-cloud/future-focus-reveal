"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'dark';

  // Extracting the functions so we can bind them to both onClick and onPointerDown
  const handleLang = () => window.dispatchEvent(new CustomEvent('toggleLanguage'));
  const handleLogin = () => window.dispatchEvent(new CustomEvent('toggleLogin'));
  const handleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 w-full flex h-20 items-center justify-between relative">
        
        {/* DESKTOP LEFT SPACER */}
        <div className="hidden md:block w-1/4 shrink-0"></div>

        {/* CENTER: Navigation Links (SCROLLABLE) */}
        {/* I added pr-[150px] so the links don't hide underneath the absolute buttons on small phones */}
        <div 
          className="flex-1 md:w-2/4 flex items-center justify-start md:justify-center overflow-x-auto whitespace-nowrap hide-scrollbar gap-4 sm:gap-6 pr-[150px] md:pr-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <Link href="/" className={`inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all cursor-pointer touch-manipulation select-none py-2 ${pathname === '/' ? "text-emerald-600 dark:text-green-400 border-b-2 border-emerald-600 dark:border-green-400" : "text-gray-600 dark:text-gray-400 hover:text-emerald-600"}`}>Home</Link>
          <Link href="/#about" className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all cursor-pointer touch-manipulation select-none py-2">About</Link>
          <Link href="/#programs" className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all cursor-pointer touch-manipulation select-none py-2">Programs</Link>
          <Link href="/mock-tests" className={`inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all cursor-pointer touch-manipulation select-none py-2 ${pathname === '/mock-tests' ? "text-emerald-600 dark:text-green-400 border-b-2 border-emerald-600 dark:border-green-400" : "text-gray-600 dark:text-gray-400 hover:text-emerald-600"}`}>Mock Tests</Link>
          <Link href="/#contacts" className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all cursor-pointer touch-manipulation select-none py-2">Contacts</Link>
        </div>

        {/* RIGHT: Fixed Controls (ABSOLUTELY POSITIONED SO THEY DO NOT SCROLL) */}
        {/* I added onPointerDown to brute-force the event instantly upon touch */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 bg-white/70 dark:bg-black/70 md:bg-transparent md:dark:bg-transparent backdrop-blur-md md:backdrop-blur-none px-3 py-2 md:p-0 rounded-full shadow-xl md:shadow-none border border-slate-200 dark:border-white/10 md:border-none z-50">
          
          <button onClick={handleTheme} onPointerDown={handleTheme} className="cursor-pointer touch-manipulation select-none p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all text-slate-600 dark:text-white">
            {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button onClick={handleLang} onPointerDown={handleLang} className="cursor-pointer touch-manipulation select-none flex items-center justify-center min-w-[60px] px-3 py-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-white">EN / KR</span>
          </button>

          <button onClick={handleLogin} onPointerDown={handleLogin} className="cursor-pointer touch-manipulation select-none p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all text-slate-600 dark:text-white">
            <UserIcon />
          </button>
          
        </div>

      </div>
    </nav>
  );
}

const SunIcon = () => <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const UserIcon = () => <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;