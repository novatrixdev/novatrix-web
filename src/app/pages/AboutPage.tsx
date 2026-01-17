import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { REPO_NAME } from '../consts/repo-name';

export function AboutPage() {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Sarah Johnson',
      role: t('about.team.ceo'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: t('about.team.cto'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: t('about.team.design'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Kim',
      role: t('about.team.dev'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
      color: 'text-[#0b8c99]',
      bg: 'bg-[#0b8c99]/10',
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
      color: 'text-[#d2620e]',
      bg: 'bg-[#d2620e]/10',
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.desc'),
      color: 'text-[#990b66]',
      bg: 'bg-[#990b66]/10',
    },
    {
      icon: Shield,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.desc'),
      color: 'text-[#07565f]',
      bg: 'bg-[#07565f]/10',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[#0b8c99] text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/${REPO_NAME}/images/lego-creation-20260115T102402.png)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-white/90 tracking-wider">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
              {t('about.story.title')}
            </h2>
            <div className="space-y-4 text-lg text-gray">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0b8c99] text-white p-8 rounded-lg">
              <Target size={48} className="mb-4" />
              <h3 className="mb-4 text-3xl" style={{ fontWeight: 600 }}>
                {t('about.mission.title')}
              </h3>
              <p className="text-white/90 text-2xl tracking-wider">
                {t('about.mission.desc')}
              </p>
            </div>
            <div className="bg-[#d2620e] text-white p-8 rounded-lg">
              <Eye size={48} className="mb-4" />
              <h3 className="text-3xl mb-4" style={{ fontWeight: 600 }}>
                {t('about.vision.title')}
              </h3>
              <p className="text-white/90 text-2xl tracking-wider">
                {t('about.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-light hover:shadow-lg transition-shadow"
              >
                <div className={`${value.bg} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                  <value.icon className={value.color} size={32} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="text-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-light"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>
                    {member.name}
                  </h3>
                  <p className="text-[#0b8c99]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
