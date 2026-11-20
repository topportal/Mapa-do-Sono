import React from 'react';
import { Layers } from 'lucide-react';

export const SpecialContentIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0E1729] text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Layers className="w-4 h-4" />
          <span>Onde Está o Verdadeiro Ouro</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 text-balance">
          MAIS SONO, MAIS ENERGIA, TUDO AQUI — CLIQUE E RESOLVA SEU SONO!
        </h2>

        <p className="text-lg sm:text-xl font-bold text-emerald-400 mb-6 text-balance">
          O APLICATIVO MAPEIA O PROBLEMA. OS CONTEÚDOS DO VIP ENTREGAM O CAMINHO PRÁTICO PARA TRANSFORMAR SUAS NOITES.
        </p>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Não entregamos apenas um diário vazio: no acesso completo, você destrava imersões, desenvolvimento pessoal e profissional, descompressão emocional e treinos corporais para resolver seu sono pela raiz.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <strong className="text-white">Escolha seu nível de transformação:</strong>
          </div>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-indigo-200">Essencial para começar.</span>
          <span className="text-slate-500 hidden sm:inline">·</span>
          <span className="text-amber-300 font-bold">VIP Completo: o tesouro para sua vida e para resolver seu sono.</span>
        </div>
      </div>
    </section>
  );
};
