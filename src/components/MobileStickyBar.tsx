import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

interface MobileStickyBarProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after passing the initial hero
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1120]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl transition-all">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-300 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 fill-amber-300" />
            MAIS SONO, MAIS ENERGIA
          </span>
          <span className="text-xs font-black text-white leading-tight">
            Tudo aqui · VIP R$ 47,00
          </span>
        </div>

        <a
          href={VIP_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-4 text-xs font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl flex items-center gap-1.5 shadow-lg shadow-[#00E676]/40 hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer text-center leading-tight transition-all"
        >
          <span>Clique e Resolva (R$ 47)</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};
