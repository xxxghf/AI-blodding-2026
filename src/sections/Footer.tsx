import { Telegram } from 'lucide-react';

const socialLinks = [
  { 
    icon: Send, 
    href: 'https://t.me/xxxghf', 
    label: 'Telegram' 
  }
];

const Footer = () => {
  return (
    <footer className="relative py-16 bg-[#0a0a0a]">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                <span className="text-white font-black text-lg">AI</span>
              </div>
              <span className="text-white font-bold text-xl">Blogging 2026</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-white/50 text-center mb-8 max-w-md">
            Эпоха цифровых личностей началась. 
            Создай своего AI-аватара и зарабатывай на автопилоте.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-pink hover:border-neon-pink/30 hover:bg-neon-pink/10 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['О проекте', 'Тарифы', 'Блог', 'Поддержка', 'Политика конфиденциальности'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white/40 hover:text-white animated-underline transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/30 text-sm">
              © 2026 AI Blogging. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
