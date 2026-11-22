import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

interface ValueTableSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

const valueItems = [
  { item: 'Aplicativo MAPA DO SONO Completo (todas as 5 áreas)', price: 'R$ 27,00' },
  { item: 'Palestra Especial: Resiliência e Inteligência Emocional', price: 'R$ 67,00' },
  { item: 'Palestra Especial: Alta Performance Profissional', price: 'R$ 67,00' },
  { item: 'Imersão Completa: Código do Sono Perfeito (6 sessões)', price: 'R$ 197,00' },
  { item: 'Mini Curso: 5 Pilares do Atendimento ao Cliente', price: 'R$ 67,00' },
  { item: 'Desafio Prático: 21 Dias Alongue-se em Casa', price: 'R$ 57,90' },
  { item: 'Treino Guiado: Qi Gong 7 Dias por Semana', price: 'R$ 47,90' },
];

export const ValueTableSection: React.FC<ValueTableSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="ofertas" className="py-20 md:py-28 bg-[#0B1426] text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
            Comparativo de Valor Real
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            AGORA VEJA O VALOR DE TUDO O QUE VOCÊ RECEBE!
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Se você fosse adquirir cada material separadamente pelo valor individual de mercado:
          </p>
        </div>

        {/* Tabular Value Breakdown Table */}
        <div className="bg-slate-900/95 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden mb-10">
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Conteúdo Incluído</span>
            <span className="text-right">Valor Individual</span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {valueItems.map((row, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 text-sm hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{row.item}</span>
                </div>
                <span className="font-mono tabular-nums text-slate-400 font-semibold whitespace-nowrap">
                  {row.price}
                </span>
              </div>
            ))}

            {/* Total Row */}
            <div className="p-5 sm:p-6 bg-slate-950/80 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Valor Total do VIP Sem Desconto
                </p>
                <p className="text-sm font-bold text-white mt-0.5">
                  TOTAL SE COMPRADO SEPARADO:
                </p>
              </div>
              <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-slate-300 line-through decoration-rose-500/80 decoration-2">
                R$ 530,80
              </span>
            </div>
          </div>

          {/* Plus App Callout */}
          <div className="p-5 bg-indigo-950/40 border-t border-indigo-900/60 flex items-center gap-3 text-xs sm:text-sm text-indigo-200">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <span>
              <strong>Tudo reunido no VIP:</strong> acesso completo ao aplicativo <strong>MAPA DO SONO</strong> com todas as 5 áreas + todo o acervo de conteúdos exclusivos por 1 ano.
            </span>
          </div>
        </div>

        {/* Narrative Synthesis */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            São duas palestras, seis sessões de imersão, um mini curso, um desafio de 21 dias, um programa de Qi Gong e todas as funcionalidades do aplicativo.
          </p>
          <p className="text-white font-semibold">
            Tudo reunido em uma única experiência.
          </p>
        </div>

        {/* VIP Price Spotlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0C152B] via-slate-900 to-slate-950 border-2 border-emerald-400 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-md">
            Economia Real de R$ 483,80
          </div>

          <p className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mt-2 mb-2">
            SEU INVESTIMENTO NO PLANO COMPLETO VIP:
          </p>

          <div className="flex flex-col items-center justify-center gap-1 mb-4">
            <span className="text-sm sm:text-base text-slate-400 line-through">
              De R$ 530,80
            </span>
            <div className="flex items-baseline justify-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mr-2">R$</span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_40px_rgba(52,211,153,0.5)]">
                47
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">,00</span>
            </div>
            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider bg-slate-800/90 border border-slate-700/80 px-4 py-1 rounded-full mt-1">
              pagamento único · acesso imediato por 1 ano
            </span>
          </div>

          <p className="text-lg sm:text-xl font-extrabold text-white mb-2">
            Isso mesmo. Apenas R$ 20 a mais que o plano básico!
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6">
            Por apenas <strong>R$ 20 de diferença</strong>, você destrava um acervo inteiro com ferramentas práticas para ajudar a acalmar a mente acelerada e transformar suas noites.
          </p>

          <div className="py-2.5 px-4 rounded-xl bg-slate-900/80 border border-amber-400/30 text-xs sm:text-sm text-amber-200 font-semibold mb-8 max-w-lg mx-auto">
            Não é só quantidade: ali dentro está um tesouro para sua vida e para ajudar a melhorar seu sono.
          </div>

          <div className="space-y-2.5 max-w-xl mx-auto">
            <a
              href={VIP_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-4 sm:px-10 sm:py-5 text-xs sm:text-base md:text-lg font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl shadow-2xl shadow-[#00E676]/45 ring-2 ring-[#00E676]/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center leading-snug"
            >
              <span>QUERO CUIDAR DO MEU SONO · VIP (R$ 47,00)</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
            <p className="text-xs sm:text-sm font-bold text-amber-300 leading-snug">
              ★ Mais sono, mais energia, tudo aqui — um tesouro para sua vida pelo valor de um lanche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
