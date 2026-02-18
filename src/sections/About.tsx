import { useEffect, useRef } from 'react';
import { UserCircle, Camera, Megaphone, Video, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: UserCircle,
    title: 'Создание AI-персонажа',
    description: 'Как создать своего AI-персонажа, который ведёт блог',
  },
  {
    icon: Camera,
    title: 'Без камеры',
    description: 'Как сделать ИИ-аватар без камеры и съёмочной команды',
  },
  {
    icon: Megaphone,
    title: 'Нативная реклама',
    description: 'Как интегрировать рекламу в контент нативно',
  },
  {
    icon: Video,
    title: 'Reels и Shorts',
    description: 'Как вести Reels и Shorts, чтобы набрать первые 10.000 подписчиков уже через месяц',
  },
  {
    icon: TrendingUp,

    title: 'Масштабирование',
    description: 'Как масштабировать блог в 2026 году и начать монетизировать блог с первого месяца',
  },
];

const About = () => {
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
        (card as HTMLElement).style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0a]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-neon-purple/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-section font-black text-center text-white mb-16 md:mb-20"
        >
          О чём <span className="gradient-text">этот проект</span>
        </h2>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group animate-fade-in-up"
            >
              <div className="icon">
                <feature.icon className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
