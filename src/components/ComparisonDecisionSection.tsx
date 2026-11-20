import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { PlanType, ESSENCIAL_CHECKOUT_URL, VIP_CHECKOUT_URL } from '../types';

interface ComparisonDecisionSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const ComparisonDecisionSection: React.FC<ComparisonDecisionSectionProps> = ({
  onOpenCheckout,
}) => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3 block">
            Decisão Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 text-balance">
            QUAL PLANO VALE MAIS A PENA?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Veja com clareza o que cada opção entrega e escolha a que melhor se encaixa no seu momento.
          </p>
        </div>

        {/* 2 Plans Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Plan 1: Essencial */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                Para quem quer começar
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 mt-4 mb-2">
                PLANO ESSENCIAL
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-slate-900">R$ 27,00</span>
                <span className="text-xs text-slate-500">pagamento único · acesso por 1 ano</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Para quem deseja começar com o aplicativo MAPA DO SONO e a palestra Resiliência e Inteligência Emocional.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Aplicativo MAPA DO SONO Completo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>As 5 Áreas de Registro e Acompanhamento</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Palestra: Resiliência e Inteligência Emocional</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={ESSENCIAL_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-4 text-sm font-black text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
              >
                Clique e Comece no Essencial (R$ 27)
              </a>
            </div>
          </div>

          {/* Plan 2: Completo VIP - HIGHLY VISIBLE & HIGHLIGHTED */}
          <div className="bg-gradient-to-b from-[#0C152B] via-[#080E1C] to-slate-950 text-white rounded-3xl border-2 border-emerald-400 ring-4 ring-emerald-500/20 p-8 sm:p-9 flex flex-col justify-between shadow-2xl relative md:-translate-y-2">
            <div className="absolute -top-3.5 right-6">
              <span className="bg-emerald-400 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                94% ESCOLHEM ESTA OPÇÃO
              </span>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-md">
                Experiência Mais Completa
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-2">
                PLANO COMPLETO VIP
              </h3>

              {/* Huge Highlighted R$ 47 */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Apenas R$ 20 a mais que o básico:
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-black text-emerald-400">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                    47
                  </span>
                  <span className="text-2xl font-black text-emerald-400">,00</span>
                  <span className="text-xs text-slate-400 ml-2">pagamento único · acesso por 1 ano</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                Para quem deseja tudo do Essencial e também os <strong className="text-white">5 conteúdos exclusivos</strong>: Alta Performance, Código do Sono Perfeito, 5 Pilares do Atendimento ao Cliente, Alongamento 21 Dias e Qi Gong.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-200">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tudo do Plano Essencial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+ Palestra Alta Performance Profissional</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+ Imersão Código do Sono Perfeito (6 sessões)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+ Mini Curso: 5 Pilares do Atendimento ao Cliente</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+ Desafio 21 Dias: Alongue-se em Casa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+ Treino Qi Gong 7 Dias por Semana</span>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-2">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 text-xs sm:text-sm md:text-base font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl transition-all shadow-xl shadow-[#00E676]/40 ring-2 ring-[#00E676]/60 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-center leading-snug"
              >
                <span>CLIQUE E RESOLVA SEU SONO · VIP (R$ 47)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-[11px] sm:text-xs font-bold text-amber-300 text-center leading-snug">
                ★ Aqui mora um tesouro para sua vida: tudo para resolver seu sono hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            A diferença é de apenas R$ 20 — mas o ganho para sua vida no VIP é imenso.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Enquanto o Essencial te ajuda a iniciar o controle, o VIP entrega o acervo completo com imersão, desenvolvimento profissional e práticas corporais para resolver seu sono pela raiz.
          </p>
        </div>
      </div>
    </section>
  );
};
