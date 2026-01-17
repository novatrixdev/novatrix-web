import { ArrowRight, Code, Palette, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { REPO_NAME } from '../consts/repo-name';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t('home.features.custom.title'),
      description: t('home.features.custom.desc'),
      color: 'text-[#0b8c99]',
    },
    {
      icon: Palette,
      title: t('home.features.design.title'),
      description: t('home.features.design.desc'),
      color: 'text-[#d2620e]',
    },
    {
      icon: Zap,
      title: t('home.features.performance.title'),
      description: t('home.features.performance.desc'),
      color: 'text-[#990b66]',
    },
    {
      icon: Shield,
      title: t('home.features.security.title'),
      description: t('home.features.security.desc'),
      color: 'text-[#07565f]',
    },
  ];

  const stats = [
    // { value: '150+', label: t('home.stats.projects') },
    { value: '95%', label: t('home.stats.satisfaction') },
    { value: '5+', label: t('home.stats.team') },
    { value: '10+', label: t('home.stats.experience') },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0b8c99] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/${REPO_NAME}/images/5XJUdKzT4hrnMfCgdIa40.png)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 tracking-wider">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer bg-[#d2620e] text-white px-8 py-4 rounded-lg hover:bg-[#980b1c] transition-colors inline-flex items-center justify-center gap-2 text-lg"
              >
                {t('home.hero.cta')}
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="cursor-pointer bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20"
              >
                {t('home.hero.learn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-[#0b8c99] mb-2" style={{ fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
              {t('home.why.title')}
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              {t('home.why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-light"
              >
                <feature.icon className={`${feature.color} mb-4`} size={40} />
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0b8c99] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="cursor-pointer bg-white text-[#0b8c99] px-8 py-4 rounded-lg hover:bg-gray-light transition-colors text-lg inline-flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            {t('home.cta.button')}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}