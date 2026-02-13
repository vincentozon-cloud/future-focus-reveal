import React, { useState } from 'react';

const languages = [
  { name: 'EN', flag: '🇺🇸', lang: 'en' },
  { name: 'KO', flag: '🇰🇷', lang: 'ko' }
];

export default function LanguageSelector({ onLangChange }: { onLangChange: (l: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (l: typeof languages[0]) => {
    setSelected(l);
    onLangChange(l.lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all active:scale-95"
      >
        <span className="text-xl leading-none">{selected.flag}</span>
        <span className="font-bold tracking-widest text-xs text-white">{selected.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-32 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[80] overflow-hidden">
          {languages.map((l) => (
            <button
              key={l.lang}
              className="flex items-center w-full gap-3 px-4 py-3 text-left hover:bg-blue-600/20 text-white"
              onClick={() => handleSelect(l)}
            >
              <span className="text-lg">{l.flag}</span>
              <span className="font-bold text-xs tracking-widest">{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}