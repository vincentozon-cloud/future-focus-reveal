"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Mock Tests", href: "/mock-tests" },
    { name: "Contacts", href: "/contacts" },
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
    <nav className="fixed top-0 w-full z-[80] bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-extrabold text-white tracking-tighter uppercase italic">
              Future Focus <span className="text-pink-400">Language Institute</span>
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
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-white hover:border-b-2 hover:border-pink-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-colors"
              aria-expanded={isOpen}
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
          <div className="pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-3xl border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3 border-l-4 text-xs font-black uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "bg-white/5 border-green-400 text-green-400"
                    : "border-transparent text-gray-400 hover:bg-white/5 hover:border-pink-500 hover:text-white"
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