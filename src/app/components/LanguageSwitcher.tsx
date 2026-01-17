import { Globe } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ua' as const, label: 'Укр', fullName: 'Українська' },
    { code: 'en' as const, label: 'Eng', fullName: 'English' },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* <Globe size={18} className="text-gray" /> */}
      <div className="flex items-center gap-1">
        {languages.map((lang, index) => (
          <span key={lang.code} className="flex items-center">
            <button
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer px-2 py-1 rounded transition-colors ${
                language === lang.code
                  ? 'text-primary'
                  : 'text-gray hover:text-primary'
              }`}
              style={{ fontWeight: language === lang.code ? 600 : 400 }}
              title={lang.fullName}
            >
              {lang.label}
            </button>
            {index < languages.length - 1 && (
              <span className="text-gray-light">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
