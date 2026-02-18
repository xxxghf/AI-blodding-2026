import { useEffect, useRef } from 'react';
import { Check, X, Globe, Sun, Users } from 'lucide-react';

const benefits = [
  { icon: X, text: 'Никаких съёмок', negative: true },
  { icon: X, text: 'Никакого оборудования', negative: true },
  { icon: Globe, text: 'Работа из любой точки мира', negative: false },
  { icon: Sun, text: 'Продавай свои услуги брендам и блогерам', negative: false },
  { icon: Users, text: 'Монетизируй свои знания ИИ креатора в любой сфере', negative: false },
];

const NoCamera = () => {
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
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-radial from-neon-blue/15 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-pink/25 via-neon-purple/20 to-transparent blur-[60px] scale-110" />
              
              {/* Phone Mockup */}
              <div className="relative animate-float">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                  <img
                    src="/reel-mockup.jpg"
                    alt="AI Reel Mockup"
                    className="w-full max-w-sm"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-neon-pink/30">
                    <span className="text-sm font-mono text-neon-pink">AI-GENERATED REEL</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-neon-pink/30 rounded-full animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-neon-purple/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <h2 className="text-section font-black text-white mb-6">
              Блог <span className="gradient-text">без камеры</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Работай из любой точки мира. Без студий, света и продакшена. 
              ИИ создаёт видео, текст, рилсы и сторис автоматически.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    benefit.negative 
                      ? 'bg-white/5 border border-white/10' 
                      : 'bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/20'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    benefit.negative 
                      ? 'bg-white/10' 
                      : 'bg-neon-pink/20'
                  }`}>
                    <benefit.icon className={`w-5 h-5 ${
                      benefit.negative ? 'text-white/50' : 'text-neon-pink'
                    }`} />
                  </div>
                  <span className={`font-medium ${
                    benefit.negative ? 'text-white/50 line-through' : 'text-white'
                  }`}>
                    {benefit.text}
                  </span>
                  {!benefit.negative && (
                    <Check className="w-5 h-5 text-neon-pink ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoCamera;
