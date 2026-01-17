import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Logo } from '@/app/components/Logo';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: 'home' },
    { name: t('nav.services'), path: 'services' },
    { name: t('nav.process'), path: 'process' },
    { name: t('nav.about'), path: 'about' },
    { name: t('nav.contact'), path: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo />
            </div>
            <p className="text-gray-light text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://github.com/novatrixdev" target='_blank' className="text-gray-light hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="cursor-pointer text-gray-light hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>{t('footer.webDev')}</li>
              <li>{t('footer.uiux')}</li>
              <li>{t('services.cloud.title')}</li>
              <li>{t('footer.consulting')}</li>
              <li>{t('services.maintenance.title')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{t('footer.connect')}</h4>
            <ul className="space-y-3 text-sm text-gray-light">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:novatrix.it@gmail.com">novatrix.it@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+380932738441">+38 (093) 273-84-41</a>
              </li>
              {/* <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                San Francisco, CA
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-light">
          <p>&copy; {new Date().getFullYear()} Novatrix. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}