"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the theme safely without returning null and deleting the navbar
  const currentTheme = mounted ? theme : 'dark';

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tighter uppercase italic">
              Future Focus <span className="text-pink-600 dark:text-pink-400">Language Institute</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className={`inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest transition-all ${pathname === '/' ? "text-emerald-600 dark:text-green-400 border-b-2 border-emerald-600 dark:border-green-400" : "text-gray-600 dark:text-gray-400 hover:text-emerald-600"}`}>Home</Link>
            <Link href="/#about" className="inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all">About</Link>
            <Link href="/#programs" className="inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all">Programs</Link>
            <Link href="/mock-tests" className={`inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest transition-all ${pathname === '/mock-tests' ? "text-emerald-600 dark:text-green-400 border-b-2 border-emerald-600 dark:border-green-400" : "text-gray-600 dark:text-gray-400 hover:text-emerald-600"}`}>Mock Tests</Link>
            <Link href="/#contacts" className="inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-all">Contacts</Link>

            <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all">
              {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <div className="flex items-center md:hidden space-x-2">
            <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className="p-3 rounded-full bg-gray-100 dark:bg-white/10">
               {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 rounded-md text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-100 dark:border-white/5 text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-100 dark:border-white/5 text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">About</Link>
          <Link href="/#programs" onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-100 dark:border-white/5 text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">Programs</Link>
          <Link href="/mock-tests" onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-100 dark:border-white/5 text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">Mock Tests</Link>
          <Link href="/#contacts" onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-100 dark:border-white/5 text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">Contacts</Link>
        </div>
      )}
    </nav>
  );
}

const SunIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const MenuIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CloseIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;