import { useEffect, useRef } from 'react';
import { Palette, Mic, FileText, Rocket, UserCircle } from 'lucide-react';

const subFeatures = [
  {
    icon: Palette,
    title: 'Генерация внешности',
    description: 'Уникальный визуальный стиль под вашу нишу',
  },
  {
    icon: Mic,
    title: 'Синтез голоса',
    description: 'Естественная речь с нужной интонацией',
  },
  {
    icon: FileText,
    title: 'Сценарии постов',
    description: 'AI генерирует контент автоматически',
  },
  {
    icon: Rocket,
    title: 'Монетизация',
    description: 'Несколько вариантов монетизации в любой нише',
  },
];

const Character = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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

    if (contentRef.current) {
      const children = contentRef.current.children;
      Array.from(children).forEach((child, index) => {
        child.classList.add('opacity-0');
        (child as HTMLElement).style.animationDelay = `${index * 100}ms`;
        observer.observe(child);
      });
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        card.classList.add('opacity-0');
        (card as HTMLElement).style.animationDelay = `${200 + index * 100}ms`;
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
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-neon-pink/15 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-section font-black text-white mb-6">
              Твой <span className="gradient-text">цифровой герой</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Создай уникального персонажа: внешность, голос, характер, стиль общения. 
              Настрой его под нишу — лайфстайл, бизнес, технологии, обзоры, психология.
            </p>

            {/* Sub Features Grid */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-4">
              {subFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-5 group animate-fade-in-up"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-neon-pink" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/30 via-neon-pink/20 to-transparent blur-[80px] scale-125" />
              
              {/* Character Creation Interface Mockup */}
              <div className="relative glass-card p-8 max-w-md animate-float">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                    <UserCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">AI Персонаж</div>
                    <div className="text-white/50 text-sm">Настройка параметров</div>
                  </div>
                </div>
                
                {/* Parameter Sliders */}
                <div className="space-y-4">
                  {['Внешность', 'Голос', 'Характер', 'Стиль'].map((param, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">{param}</span>
                        <span className="text-neon-pink font-mono">{85 + i * 5}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"
                          style={{ width: `${85 + i * 5}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Status Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-neon-pink/20 rounded-full border border-neon-pink/30">
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                  <span className="text-sm text-neon-pink font-medium">Готово к запуску</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-neon-pink/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 border-2 border-neon-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
