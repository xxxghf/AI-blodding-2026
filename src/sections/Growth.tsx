import { useEffect, useRef } from 'react';
import { TrendingUp, Sparkles, Type, Clock, Layers } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'AI анализирует тренды',
    description: 'Отслеживание вирусного контента в реальном времени',
  },
  {
    icon: Sparkles,
    title: 'Вирусные сценарии',
    description: 'Генерация контента с высоким потенциалом охватов',
  },
  {
    icon: Type,
    title: 'Вирусные карусели',
    description: 'Создавай карусели за 2 минуты по нашим уникальным промтам',
  },
  {
    icon: Clock,
    title: 'Контент за минуты',
    description: 'Генерируй видео со своим персонажем буквально за несколько минут',
  },
  {
    icon: Layers,
    title: 'Адаптация под платформы',
    description: 'Один контент — на все платформы Insta, YouTube, TikTok, VK клипы, Дзен',
  },
];

const Growth = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) {
      imageRef.current.classList.add('opacity-0');
      imageRef.current.style.animationDelay = '200ms';
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-neon-blue/15 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-section font-black text-white mb-6">
              <span className="gradient-text">0₽</span> на продвижение
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Никаких вложений в рекламу и продвижение, подписчики приходят с виральных охватов 
              
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-pink/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Chart Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-pink/25 via-neon-purple/20 to-transparent blur-[60px] scale-110" />
              
              {/* Chart Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-float">
                <img
                  src="/growth-chart.jpg"
                  alt="Growth Chart"
                  className="w-full max-w-lg"
                />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <div className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-neon-pink/30">
                    <div className="text-xs text-white/50 mb-1">Рост за месяц</div>
                    <div className="text-xl font-bold text-neon-pink font-mono">+847%</div>
                  </div>
                  <div className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-neon-purple/30">
                    <div className="text-xs text-white/50 mb-1">Новые подписчики</div>
                    <div className="text-xl font-bold text-neon-purple font-mono">12.5K</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-neon-pink/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 border border-neon-purple/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
