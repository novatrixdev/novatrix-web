import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/app/translations';
import { REPO_NAME } from '../consts/repo-name';

type LanguageType = Language;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<LanguageType>('en');

  useEffect(() => {
    // Get language from URL or localStorage
    const path = window.location.pathname.replace(REPO_NAME, '');
    const langFromUrl = path.startsWith('/ua') ? 'ua' : path.startsWith('/en') ? 'en' : null;
    const savedLang = localStorage.getItem('language') as LanguageType | null;
    
    if (langFromUrl) {
      setLanguageState(langFromUrl);
      localStorage.setItem('language', langFromUrl);
    } else if (savedLang) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replaceAll('/ua', '').replaceAll('/en', '');
    const newPath = `${pathWithoutLang || `/home`}/${lang}`.replace('//', '/');
    
    window.history.pushState({}, '', newPath);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}