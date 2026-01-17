import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, TestTube } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { REPO_NAME } from '../consts/repo-name';

interface PageProps {
  onNavigate: (page: string) => void;
}

export function ProcessPage({ onNavigate }: PageProps) {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      activities: [
        t('process.step1.detail1'),
        t('process.step1.detail2'),
        t('process.step1.detail3'),
        t('process.step1.detail4'),
      ],
      color: 'border-[#0b8c99]',
      iconColor: 'text-[#0b8c99]',
      bgColor: 'bg-[#0b8c99]/10',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      activities: [
        t('process.step2.detail1'),
        t('process.step2.detail2'),
        t('process.step2.detail3'),
        t('process.step2.detail4'),
      ],
      color: 'border-[#d2620e]',
      iconColor: 'text-[#d2620e]',
      bgColor: 'bg-[#d2620e]/10',
    },
    {
      number: '03',
      icon: Code,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      activities: [
        t('process.step3.detail1'),
        t('process.step3.detail2'),
        t('process.step3.detail3'),
        t('process.step3.detail4'),
      ],
      color: 'border-[#990b66]',
      iconColor: 'text-[#990b66]',
      bgColor: 'bg-[#990b66]/10',
    },
    {
      number: '04',
      icon: TestTube,
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      activities: [
        t('process.step4.detail1'),
        t('process.step4.detail2'),
        t('process.step4.detail3'),
        t('process.step4.detail4'),
      ],
      color: 'border-[#07565f]',
      iconColor: 'text-[#07565f]',
      bgColor: 'bg-[#07565f]/10',
    },
    {
      number: '05',
      icon: Rocket,
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
      activities: [
        t('process.step5.detail1'),
        t('process.step5.detail2'),
        t('process.step5.detail3'),
        t('process.step5.detail4'),
      ],
      color: 'border-[#980b1c]',
      iconColor: 'text-[#980b1c]',
      bgColor: 'bg-[#980b1c]/10',
    },
    {
      number: '06',
      icon: CheckCircle,
      title: t('process.step6.title'),
      description: t('process.step6.desc'),
      activities: [
        t('process.step6.detail1'),
        t('process.step6.detail2'),
        t('process.step6.detail3'),
        t('process.step6.detail4'),
      ],
      color: 'border-[#666666]',
      iconColor: 'text-[#666666]',
      bgColor: 'bg-[#666666]/10',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[#0b8c99] text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/${REPO_NAME}/images/_zGXD1VEh_TzArfMH6mDg.png)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
              {t('process.hero.title')}
            </h1>
            <p className="text-xl text-white/90 tracking-wider">
              {t('process.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 border-l-4 ${step.color} pl-8 py-4`}
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${step.bgColor} rounded-full p-4`}>
                      <step.icon className={step.iconColor} size={32} />
                    </div>
                    <span className="text-5xl text-gray-400" style={{ fontWeight: 700 }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-gray">{step.description}</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="mb-4 text-xl" style={{ fontWeight: 600 }}>
                      {t('process.steps.activities')}:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex gap-2 leading-8 items-center">
                          <span className={`${step.iconColor} mt-0`}>▸</span>
                          <span className="text-gray text-lg">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b8c99] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
            {t('process.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('process.cta.description')}
          </p>
          <button 
            className="cursor-pointer bg-white text-[#0b8c99] px-8 py-4 rounded-lg hover:bg-gray-light transition-colors text-lg" 
            style={{ fontWeight: 600 }}
            onClick={() => {
              onNavigate('contact');
            }}   
          >
            {t('process.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}
