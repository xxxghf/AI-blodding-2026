import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
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
        (child as HTMLElement).style.animationDelay = `${index * 150}ms`;
        observer.observe(child);
      });
    }

    if (imageRef.current) {
      imageRef.current.classList.add('opacity-0');
      imageRef.current.style.animationDelay = '300ms';
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Gradient Orb Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-pink/30 via-neon-purple/20 to-transparent blur-[100px] animate-spin-slow" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div ref={contentRef} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-neon-pink" />
              <span className="text-sm text-white/70">Эпоха цифровых личностей</span>
            </div>

            <h1 className="text-hero font-black uppercase tracking-tight mb-6">
              <span className="block text-white">ИИ в</span>
              <span className="block gradient-text">блогинге</span>
              <span className="block text-white">2026</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-medium mb-4 max-w-xl">
              Создай своего цифрового персонажа и зарабатывай без съёмок и продакшена
            </p>

            <p className="text-base md:text-lg text-white/60 mb-10 max-w-lg mx-auto lg:mx-0">
              Запусти блог с AI-аватаром, продавай рекламу и масштабируйся из любой точки мира без вложений.
            </p>
<a
  href="https://t.me/xxxghf"
  target="_blank"
  rel="noopener noreferrer"
  className="neon-button group text-lg inline-flex items-center justify-center no-underline"
>
  <span className="flex items-center gap-3">
    Создать AI-блог
    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  </span>
</a>
          </div>

          {/* AI Avatar Image */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end animate-fade-in-scale"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-pink/40 via-neon-purple/30 to-transparent blur-[80px] scale-110" />
              
              {/* Image Container */}
              <div className="relative animate-float">
                <img
                  src="/ai-avatar.jpg"
                  alt="AI Avatar 2026"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-neon-pink/30 rounded-full animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-neon-purple/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Tech Labels */}
                <div className="absolute top-8 left-0 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-neon-pink/30 rounded-lg">
                  <span className="text-xs font-mono text-neon-pink">AI-GENERATED</span>
                </div>
                <div className="absolute bottom-16 right-0 translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-neon-purple/30 rounded-lg">
                  <span className="text-xs font-mono text-neon-purple">2026 READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
