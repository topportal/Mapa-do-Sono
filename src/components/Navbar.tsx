import React, { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

interface NavbarProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1120]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent border-b border-slate-800/40 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2.5 text-sm sm:text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-300 transition-colors"
        >
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 fill-indigo-400/20 shrink-0" />
          <span>MAPA DO SONO</span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-slate-300">
          <a
            href="#aplicativo"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            O Aplicativo
          </a>
          <a
            href="#areas"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            As 5 Áreas
          </a>
          <a
            href="#essencial"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Plano Essencial
          </a>
          <a
            href="#vip"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Plano VIP
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0 min-w-0">
          <a
            href={VIP_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl shadow-lg shadow-[#00E676]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center leading-tight"
          >
            Resolver Sono · R$ 47
          </a>
        </div>
      </div>
    </header>
  );
};
