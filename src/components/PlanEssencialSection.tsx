import React from 'react';
import { Check, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import { PlanType, ESSENCIAL_CHECKOUT_URL, VIP_CHECKOUT_URL } from '../types';

interface PlanEssencialSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const PlanEssencialSection: React.FC<PlanEssencialSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="essencial" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Tag */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase bg-slate-100 px-3 py-1.5 rounded-full inline-block mb-3">
            OPÇÃO 01
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            PLANO ESSENCIAL
          </h2>
          <p className="text-base sm:text-lg font-bold text-indigo-700">
            MAPA DO SONO + RESILIÊNCIA E INTELIGÊNCIA EMOCIONAL
          </p>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-slate-500 font-semibold mt-1">
            PARA QUEM DESEJA COMEÇAR A CUIDAR DE SI.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            {/* Left: App Features */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Você recebe no Aplicativo:
              </h3>
              <ul className="space-y-3">
                {[
                  'Aplicativo MAPA DO SONO completo.',
                  'Diário pessoal do sono.',
                  'Análise de padrões.',
                  'Organização da rotina noturna.',
                  'Recursos SOS.',
                  'Histórico e acompanhamento da evolução.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Included Masterclass */}
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    CONTEÚDO ESPECIAL INCLUSO
                  </span>
                  <span className="text-xs font-semibold text-slate-500 line-through">
                    R$ 67,00
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-1">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">
                      PALESTRA ESPECIAL: RESILIÊNCIA E INTELIGÊNCIA EMOCIONAL
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Valor individual: R$ 67,00 (Grátis no Essencial)
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 mb-3 bg-slate-900 shadow-sm">
                  <img
                    src="/src/assets/images/palestra_resiliencia_cover_1794240730973.jpg"
                    alt="Palestra Especial de Resiliência e Inteligência Emocional"
                    className="w-full h-auto object-cover aspect-[16/9]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Uma palestra gravada de aproximadamente 20 a 25 minutos para ampliar seus conhecimentos sobre desenvolvimento emocional e resiliência.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Uma oportunidade de refletir sobre como lidar com desafios, desenvolver recursos emocionais e fortalecer sua jornada de desenvolvimento pessoal.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-indigo-600">
                <span>Gravada · Assista no seu ritmo · Acesso Imediato</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA - Cleanly framed inside card box */}
          <div className="pt-6 border-t border-slate-200 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Seu investimento no Plano Essencial:
                </p>
                <div className="flex flex-wrap items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    R$ 27,00
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    pagamento único · acesso por 1 ano
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Você recebe o aplicativo e uma palestra especial de desenvolvimento emocional.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full md:w-auto md:max-w-[340px]">
                <a
                  href={ESSENCIAL_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.98] cursor-pointer text-center leading-snug"
                >
                  <span>CLIQUE E COMECE NO ESSENCIAL (R$ 27)</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 text-center">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-xs sm:text-sm text-indigo-700 hover:text-indigo-900 font-bold underline cursor-pointer text-center leading-relaxed break-words px-2 py-1 rounded-lg hover:bg-indigo-50/70 transition-colors"
              >
                ★ Ou clique aqui e leve o VIP (R$ 47,00) — um tesouro para sua vida com tudo para resolver seu sono →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
