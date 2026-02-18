import { useEffect, useRef } from 'react';
import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: 'START',
    icon: Zap,
    description: 'Создание AI-персонажа',
    features: ['Актальные инструменты по ИИ', 'Освой профессию ИИ креатора', 'Создание качественного AI-аватара', 'Уроки по генерации контента'],
    featured: false,
    price: "2 990",
    href: "https://t.me/xxxghf",
  },
  {
    name: 'PRO',
    icon: Star,
    description: 'Автоматизация блога',
    features: [
      'Всё из START',
      'Наши связки по монетизации',
      'Научись работать с брендами',
      'Уникальные сценарии контента',
      'Приоритетная поддержка',
    ],
    featured: true,
    price: "6 990",
    href: "https://t.me/xxxghf",
    badge: 'ХИТ',
  },
  {
    name: 'ULTRA',
    icon: Crown,
    description: 'Полная AI-система',
    features: [
      'Всё из PRO',
      'Масштабирование через контент-завод',
      'Запустим контент-машину, которая приводит клиентов 24/7',
      'Полная поддержка при запуске',
      'Персональный менеджер',
    ],
    featured: false,
    price: "14 990",
    href: "https://t.me/xxxghf",
  },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0');
      observer.observe(titleRef.current);
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        card.classList.add('opacity-0');
        (card as HTMLElement).style.animationDelay = `${index * 150}ms`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-neon-pink/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-section font-black text-center text-white mb-16"
        >
          Форматы <span className="gradient-text">участия</span>
        </h2>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative animate-fade-in-up ${
                plan.featured ? 'featured' : ''
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-sm font-bold text-white shadow-neon">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.featured 
                      ? 'bg-gradient-to-br from-neon-pink to-neon-purple shadow-neon' 
                      : 'bg-white/10'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.featured ? 'text-white' : 'text-neon-pink'}`} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.featured ? 'bg-neon-pink/20' : 'bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-neon-pink' : 'text-white/60'}`} />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
  href={plan.href}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 no-underline
    ${plan.featured 
      ? 'neon-button' 
      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
    }`}
>
  <span>{plan.price}</span>
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
