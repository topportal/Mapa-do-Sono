import React from 'react';
import { PenLine, Eye, Sparkles } from 'lucide-react';

const steps = [
  {
    step: 'PASSO 01',
    action: 'DIAGNOSTIQUE',
    description:
      'Anote em 1 minuto como foi sua noite. O aplicativo revela os gatilhos exatos que estão mantendo sua mente acesa e roubando seu descanso.',
    icon: <PenLine className="w-6 h-6 text-indigo-400" />,
    badge: 'Identifique a raiz',
  },
  {
    step: 'PASSO 02',
    action: 'APLIQUE A PRÁTICA',
    description:
      'Use o botão SOS nas noites difíceis e mergulhe nos conteúdos do VIP (Imersão Código do Sono Perfeito, palestras, Mini Curso 5 Pilares do Atendimento e Qi Gong) para desligar a mente e evoluir.',
    icon: <Eye className="w-6 h-6 text-purple-400" />,
    badge: 'O ouro está aqui',
  },
  {
    step: 'PASSO 03',
    action: 'RECUPERE SUAS NOITES',
    description:
      'Veja suas noites ficarem contínuas, profundas e restauradoras. Pare de sobreviver ao cansaço e volte a acordar com clareza e disposição.',
    icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
    badge: 'Resultado concreto',
  },
];

export const StepsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0B1325] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3 block">
            Método Prático Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
            COMO VOCÊ VAI TRANSFORMAR SUAS NOITES?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sem fórmulas complicadas. Um caminho direto entre identificar o problema e aplicar hábitos que ajudam de verdade.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {s.step}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950 border border-indigo-800/60 px-2 py-0.5 rounded">
                    {s.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5">
                  {s.icon}
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3">
                  {s.action}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center mt-12">
          <p className="text-base sm:text-lg font-semibold text-emerald-400">
            Menos noites em claro. Mais profundidade. Mais vida no seu dia.
          </p>
        </div>
      </div>
    </section>
  );
};
