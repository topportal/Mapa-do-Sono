import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { PlanType, ESSENCIAL_CHECKOUT_URL, VIP_CHECKOUT_URL } from '../types';

interface HeroSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-[#0A1120] text-white overflow-hidden border-b border-slate-800/60">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-indigo-950/30 via-slate-900/10 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Kicker Label */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            <span>Aplicativo de Autocuidado & Registro Noturno</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">Acesso Imediato</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.16] text-balance">
            Você cuida de tudo e de todos.{' '}
            <span className="text-indigo-400 font-bold block mt-2">
              Mas quando foi a última vez que cuidou de você?
            </span>
          </h1>
        </div>

        {/* IMAGEM BEM CHAMATIVA DEBAIXO DO TÍTULO */}
        <div className="relative group max-w-4xl mx-auto mb-10">
          {/* Glowing colorful aura around the image */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-emerald-400/25 to-purple-500/30 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500 -z-10" />

          <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/40 bg-slate-900 shadow-2xl">
            <img
              src="/src/assets/images/banner_destaque_titulo_1794239273781.jpg"
              alt="Pessoa dormindo profundamente e em paz, ao lado do celular com o aplicativo Mapa do Sono ativo"
              className="w-full h-auto object-cover max-h-[480px] aspect-[16/9]"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Bottom floating banner inside the image */}
            <div className="p-4 sm:p-5 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>MAPA DO SONO · Tecnologia para Desacelerar e Descansar</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Conheça seus horários, registre suas noites em 1 minuto e recupere sua energia
                </p>
              </div>
              <span className="text-xs font-black text-emerald-400 bg-emerald-950/90 border border-emerald-600/70 px-3.5 py-1.5 rounded-full shrink-0">
                Disponível para iOS e Android
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Section: Short Copy on Left, Evident R$ 27 Action Box on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Left Column: Short Punchy Copy */}
          <div className="lg:col-span-5 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg text-slate-200 font-medium">
              Corpo exausto, mas mente acelerada. Você deita, vira de um lado para o outro, acorda na madrugada e levanta destruído.
            </p>

            <div className="p-4 bg-indigo-950/60 border border-indigo-700/60 rounded-2xl text-indigo-100 font-semibold text-sm">
              Mais sono, mais energia, tudo aqui: a solução prática para desligar a mente e resolver seu sono.
            </div>

            <p className="text-sm text-slate-300">
              O <strong className="text-white font-bold">MAPA DO SONO</strong> une diagnóstico diário, ferramentas de alívio imediato para a madrugada e um acervo completo de conteúdos práticos para transformar suas noites e sua disposição.
            </p>

            <p className="text-indigo-300 font-bold text-sm">
              Não é só acompanhar como você dorme — é clicar no botão e resolver seu sono de verdade.
            </p>
          </div>

          {/* Right Column: High-Converting Eye-Catching Action Box */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 bg-slate-900/95 border-2 border-emerald-400 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-400 text-slate-950 text-[10px] sm:text-[11px] font-black uppercase px-3 sm:px-4 py-1 rounded-bl-2xl tracking-wider">
                Liberação Imediata
              </div>

              {/* Ultra Evident 27 Spotlight */}
              <div className="mb-5 pt-2 sm:pt-0">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-emerald-400 shrink-0" />
                  COMECE A RESOLVER SEU SONO POR APENAS
                </span>

                <div className="flex flex-wrap items-baseline gap-3 mt-1.5">
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mr-1">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                      27
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">,00</span>
                  </div>

                  <span className="text-xs sm:text-sm text-slate-300 font-medium bg-slate-800/90 border border-slate-700/80 px-3 py-1 rounded-lg">
                    pagamento único (sem mensalidades)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Você recebe o <strong className="text-white">Aplicativo MAPA DO SONO completo</strong> + Palestra Especial de Resiliência.
                  <span className="block text-indigo-300 font-semibold mt-0.5">
                    Ou leve o VIP Completo com os 5 conteúdos para resolver seu sono por R$ 47,00.
                  </span>
                </p>
              </div>

              {/* Eye-Catching Vibrant Purchase Buttons - Perfectly framed on mobile */}
              <div className="flex flex-col gap-3">
                <a
                  href={ESSENCIAL_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer text-center leading-snug"
                >
                  <span>CLIQUE E COMECE POR R$ 27,00</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <div className="space-y-1.5">
                  <a
                    href={VIP_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 rounded-2xl hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer shadow-md text-center leading-snug"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>CLIQUE E RESOLVA SEU SONO · VIP (R$ 47,00)</span>
                  </a>
                  <p className="text-[11px] sm:text-xs text-amber-300/95 font-medium text-center leading-snug px-2">
                    ★ Um tesouro para sua vida: mais sono, mais energia, tudo aqui para resolver seu sono.
                  </p>
                </div>
              </div>

              {/* Quick Jump Link */}
              <div className="text-center mt-3">
                <button
                  onClick={scrollToOffers}
                  className="text-xs text-slate-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Ver tabela comparativa dos planos</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-indigo-400" />
                  <span>Liberação Imediata</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Garantia Legal de 7 Dias</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Pagamento via PIX ou Cartão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
