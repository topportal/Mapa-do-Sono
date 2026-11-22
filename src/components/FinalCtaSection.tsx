import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Moon } from 'lucide-react';
import { PlanType, ESSENCIAL_CHECKOUT_URL, VIP_CHECKOUT_URL } from '../types';

interface FinalCtaSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0A1120] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
            Sua Virada de Chave Começa Hoje
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
            MAIS SONO, MAIS ENERGIA, TUDO AQUI. CLIQUE NO BOTÃO E COMECE.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-white">
              Você cuida de tanta coisa todos os dias.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Seu trabalho</span>
              <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Sua família</span>
              <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Seus compromissos</span>
              <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Suas responsabilidades</span>
            </div>
            <p className="text-emerald-400 font-bold text-base sm:text-lg pt-2">
              Não aceite mais acordar exausto quando o apoio prático para melhorar seu sono custa menos que uma refeição.
            </p>
            <div className="space-y-1.5 text-slate-300 text-sm sm:text-base">
              <p>Identifique a raiz das suas madrugadas acordado.</p>
              <p>Desligue a mente acelerada com técnicas imediatas.</p>
              <p>Use os 5 conteúdos do VIP para transformar sua rotina e melhorar seu sono de verdade.</p>
            </div>
          </div>
        </div>

        {/* 2 Quick Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Card Essencial */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1">
                MAPA DO SONO — ESSENCIAL
              </p>
              <p className="text-sm text-slate-300 mb-4">
                Aplicativo + Resiliência e Inteligência Emocional.
              </p>
              <div className="text-3xl font-black text-white mb-4">
                R$ 27,00
              </div>
            </div>
            <a
              href={ESSENCIAL_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all cursor-pointer text-center"
            >
              Clique e Comece no Essencial (R$ 27)
            </a>
          </div>

          {/* Card VIP - Ultra Evident R$ 47 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0C152B] via-slate-900 to-slate-950 border-2 border-emerald-400 ring-2 ring-emerald-500/20 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 right-4 bg-emerald-400 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-md tracking-wider">
              Mais Sono, Mais Energia · VIP
            </div>
            <div>
              <p className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 mb-1">
                MAPA DO SONO — COMPLETO VIP
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mb-3">
                Tudo do Essencial + 5 conteúdos práticos para ajudar no seu sono (Economize R$ 483,80).
              </p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-xl font-black text-emerald-400">R$</span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                  47
                </span>
                <span className="text-xl font-black text-emerald-400">,00</span>
                <span className="text-[11px] text-slate-400 ml-2">pagamento único · acesso por 1 ano</span>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 text-xs sm:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl shadow-lg shadow-[#00E676]/35 ring-2 ring-[#00E676]/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 text-center leading-snug"
              >
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950 shrink-0" />
                <span>QUERO CUIDAR DO MEU SONO (R$ 47,00)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-[11px] font-bold text-amber-300 text-center leading-snug">
                ★ O verdadeiro tesouro para sua vida e para ajudar no seu sono.
              </p>
            </div>
          </div>
        </div>

        {/* Big Central CTA */}
        <div className="text-center mb-14 max-w-xl mx-auto px-2 space-y-3">
          <p className="text-xs sm:text-sm text-slate-400">
            Mais sono, mais energia, tudo aqui — clique abaixo e comece hoje mesmo.
          </p>
          <a
            href={VIP_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-4 sm:px-12 sm:py-5 text-sm sm:text-lg md:text-xl font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl shadow-2xl shadow-[#00E676]/45 ring-2 ring-[#00E676]/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center leading-snug"
          >
            <span>CLIQUE E CUIDE DO SEU SONO · VIP (R$ 47)</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          </a>
          <p className="text-xs sm:text-sm font-bold text-amber-300 leading-snug">
            ★ Dentro do VIP está um tesouro para sua vida: tudo para apoiar o seu descanso.
          </p>
        </div>

        {/* 7 Days Guarantee Box */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left mb-14">
          <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Garantia Incondicional de 7 Dias
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Experimente o MAPA DO SONO com total tranquilidade. Se dentro de 7 dias você sentir que o conteúdo não é para você, basta solicitar o reembolso direto na plataforma, sem burocracia. Risco zero para o seu investimento.
            </p>
          </div>
        </div>

        {/* Brand Finale Closing */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-xl font-extrabold text-white">
            <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
            <span>MAPA DO SONO</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-indigo-300">
            Conheça suas noites. Cuide dos seus hábitos. Valorize seu descanso.
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Uma experiência criada para tornar o acompanhamento do sono mais acessível e incentivar uma relação mais consciente com o autocuidado.
          </p>

          <p className="text-sm font-extrabold text-white pt-2">
            Seu próximo passo começa aqui.
          </p>
        </div>
      </div>
    </section>
  );
};
