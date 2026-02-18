import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-radial from-neon-pink/25 via-neon-purple/20 to-transparent blur-[100px] animate-spin-slow" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-neon-pink" />
          <span className="text-sm text-white/70">Начни прямо сейчас</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-hero font-black text-white mb-6 animate-fade-in-up">
          Твой блог <span className="gradient-text">работает.</span>
          <br />
          Ты — <span className="text-white">отдыхаешь.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          2026 — это эпоха цифровых личностей.
          <br />
          Запусти свою сегодня.
        </p>

        {/* CTA Button */}
        <button className="neon-button group text-lg animate-fade-in-up animate-pulse-glow">
          <span className="flex items-center gap-3">
            Запустить AI-аватара
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 animate-fade-in-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
            <span className="text-sm">Без вложений</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span className="text-sm">Мгновенный запуск</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <span className="text-sm">24/7 работа</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
};

export default CTA;
