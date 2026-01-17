import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/app/components/Logo';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: 'home' },
    { name: t('nav.services'), path: 'services' },
    { name: t('nav.process'), path: 'process' },
    { name: t('nav.about'), path: 'about' },
    { name: t('nav.contact'), path: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:gap-7 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`cursor-pointer transition-colors ${
                  currentPage === item.path
                    ? 'text-primary'
                    : 'text-gray hover:text-primary'
                }`}
                style={{ fontWeight: currentPage === item.path ? 600 : 400 }}
              >
                {item.name}
              </button>
            ))}
            <LanguageSwitcher />
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-colors"
            >
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray hover:text-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-light animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${
                    currentPage === item.path
                      ? 'text-primary'
                      : 'text-gray hover:text-primary'
                  }`}
                  style={{ fontWeight: currentPage === item.path ? 600 : 400 }}
                >
                  {item.name}
                </button>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-colors text-center"
              >
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}