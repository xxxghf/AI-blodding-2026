import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, FileText, Target, Funnel, Handshake } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Нативная интеграция',
    description: 'Органично добавляй товары бренда в контент',
  },
  {
    icon: FileText,
    title: 'Генерация сценариев',
    description: 'AI создаёт вирусные сценарии',
  },
  {
    icon: Target,
    title: 'Персонализация',
    description: 'Контент под любую нишу',
  },
  {
    icon: Funnel,
    title: 'Автоворонки',
    description: 'Полная автоматизация продаж',
  },
  {
    icon: Handshake,
    title: 'Партнёрские программы',
    description: 'Дадим несколько вариантов монетизации твоего ИИ-блогера',
  },
];

const stats = [
  { value: 340, suffix: '%', label: 'Рост CTR', prefix: '+' },
  { value: 10, suffix: 'x', label: 'Подписчиков', prefix: '' },
  { value: 90, suffix: '%', label: 'Автоматизация', prefix: '' },
];

const CountUp = ({ end, suffix, prefix, duration = 2000 }: { end: number; suffix: string; prefix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const Monetization = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
        (card as HTMLElement).style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
      });
    }

    if (statsRef.current) {
      statsRef.current.classList.add('opacity-0');
      observer.observe(statsRef.current);
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
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-purple/15 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-section font-black text-center text-white mb-16"
        >
          Автоматизируй <span className="gradient-text">процессы</span>
        </h2>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group animate-fade-in-up"
            >
              <div className="icon">
                <feature.icon className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Block */}
        <div
          ref={statsRef}
          className="relative glass-card p-8 md:p-12 animate-fade-in-up overflow-hidden"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-neon-purple/10 to-neon-blue/10 opacity-50" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-neon-pink/20 to-transparent blur-[40px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-neon-purple/20 to-transparent blur-[40px]" />
        </div>
      </div>
    </section>
  );
};

export default Monetization;
