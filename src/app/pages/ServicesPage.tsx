import { Code2, Smartphone, Cloud, Database, Settings, Headphones } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { REPO_NAME } from '../consts/repo-name';

interface PageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: PageProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: [
        t('services.web.feature1'),
        t('services.web.feature2'),
        t('services.web.feature3'),
        t('services.web.feature4'),
      ],
      color: 'bg-[#0b8c99]',
    },
    {
      icon: Smartphone,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      features: [
        t('services.design.feature1'),
        t('services.design.feature2'),
        t('services.design.feature3'),
        t('services.design.feature4'),
      ],
      color: 'bg-[#d2620e]',
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.desc'),
      features: [
        t('services.cloud.feature1'),
        t('services.cloud.feature2'),
        t('services.cloud.feature3'),
        t('services.cloud.feature4'),
      ],
      color: 'bg-[#990b66]',
    },
    // {
    //   icon: Database,
    //   title: t('services.mobile.title'),
    //   description: t('services.mobile.desc'),
    //   features: [
    //     t('services.mobile.feature1'),
    //     t('services.mobile.feature2'),
    //     t('services.mobile.feature3'),
    //     t('services.mobile.feature4'),
    //   ],
    //   color: 'bg-[#07565f]',
    // },
    {
      icon: Settings,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      features: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3'),
        t('services.consulting.feature4'),
      ],
      color: 'bg-[#980b1c]',
    },
    {
      icon: Headphones,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4'),
      ],
      color: 'bg-[#666666]',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[#0b8c99] text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/${REPO_NAME}/images/h_DiSEovukA_7vaN96ncl.png)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-white/90 tracking-wider">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-light"
              >
                <div className={`${service.color} p-6`}>
                  <service.icon className="text-white mb-4" size={48} />
                  <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className={`${service.color} text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          ✓
                        </span>
                        <span className="text-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
              {t('services.technology.title')}
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              {t('services.technology.label')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'Redis', 'MongoDB', 'Vercel', 'Docker', 'GraphQL', 'Sanity CMS', 'Tailwind', 'Figma'].map((tech) => (
              <div
                key={tech}
                className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-light"
              >
                <div className="text-lg" style={{ fontWeight: 600 }}>{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b8c99] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
            {t('service.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('service.cta.description')}
          </p>
          <button 
            onClick={() => {
              onNavigate('contact');
            }}  
            className="cursor-pointer bg-[#d2620e] text-white px-8 py-4 rounded-lg hover:bg-[#980b1c] transition-colors text-lg">
              {t('service.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}