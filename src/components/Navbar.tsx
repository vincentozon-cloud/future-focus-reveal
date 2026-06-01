"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; // 1. Import the theme hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();
  
  // 2. Initialize the theme hook
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#programs" },
    { name: "Mock Tests", href: "/mock-tests" },
    { name: "Contacts", href: "/#contacts" },
  ];

  useEffect(() => {
    setIsMounted(true);
    
    // If we are NOT on the home page, always show the Navbar
    if (pathname !== "/") {
      setShowNav(true);
    } else {
      // If on home page, check if intro already played in this session
      setShowNav(sessionStorage.getItem("introPlayed") === "true");
    }

    // Listen for the signal from BrandReveal
    const handleShowNavbar = () => setShowNav(true);
    window.addEventListener("showNavbar", handleShowNavbar);
    
    return () => window.removeEventListener("showNavbar", handleShowNavbar);
  }, [pathname]);

  // Prevent hydration mismatch on initial load
  if (!isMounted) return null;
  
  // Hide the Navbar if we are on the Home page and the intro is still playing
  if (pathname === "/" && !showNav) return null;

  return (
    // 3. Update the nav container to respond to dark mode implicitly
    <nav className="fixed top-0 w-full z-80 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tighter uppercase italic">
              Future Focus <span className="text-pink-600 dark:text-pink-400">Language Institute</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  pathname === link.href
                    ? "text-emerald-600 dark:text-green-400 border-b-2 border-emerald-600 dark:border-green-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-b-2 hover:border-pink-600 dark:hover:border-pink-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 4. Desktop Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                // Sun Icon (when in dark mode)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon (when in light mode)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            {/* 5. Mobile Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition-all"
            >
               {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-black/80 backdrop-blur-3xl border-t border-gray-200 dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3 border-l-4 text-xs font-black uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "bg-emerald-50 dark:bg-white/5 border-emerald-600 dark:border-green-400 text-emerald-700 dark:text-green-400"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:border-pink-600 dark:hover:border-pink-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}