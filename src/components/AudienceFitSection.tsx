import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

const benefits = [
  'Acabar com a mente acelerada na hora de deitar.',
  'Parar de acordar no meio da madrugada sem conseguir voltar a dormir.',
  'Identificar os gatilhos reais que sabotam suas noites.',
  'Aplicar técnicas imediatas de desaceleração e alívio noturno.',
  'Substituir o cansaço crônico por energia ao acordar.',
  'Ter um passo a passo prático e completo para resolver seu sono.',
];

interface AudienceFitSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const AudienceFitSection: React.FC<AudienceFitSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3 block">
            Solução Real Para Sua Dor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-balance mb-6">
            NÃO SE RESIGNE A DORMIR MAL: MAIS SONO, MAIS ENERGIA PARA A SUA VIDA.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            O ecossistema MAPA DO SONO (especialmente com o conteúdo ouro do VIP) foi criado para quem precisa:
          </p>
        </div>

        {/* 6 Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy Philosophical Close & Purchase CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50 border border-indigo-100 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Solução Concreta, Sem Achismos</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            Não se trata apenas de olhar gráficos de como você dormiu mal.
          </p>
          <p className="text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Trata-se de aplicar protocolos práticos de sono, respiração, desenvolvimento pessoal e hábitos noturnos para resolver o problema na raiz.
          </p>

          <div className="pt-3 max-w-md mx-auto space-y-2">
            <a
              href={VIP_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl shadow-xl shadow-[#00E676]/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center leading-snug transition-all"
            >
              <span>CLIQUE E RESOLVA SEU SONO · VIP (R$ 47,00)</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <p className="text-xs font-semibold text-indigo-900/80 text-center leading-snug">
              ★ Aqui está um tesouro para sua vida: todo o conteúdo para resolver seu sono.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
