import { useState, useEffect } from 'react';

// For now, we import them directly for simplicity
import en from '../../public/en.json';
import ko from '../../public/ko.json';

const translations: any = { en, ko };

export const useTranslation = () => {
  // We'll store the language in a simple state for now
  const [lang, setLang] = useState('en');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return { t, setLang, lang };
};