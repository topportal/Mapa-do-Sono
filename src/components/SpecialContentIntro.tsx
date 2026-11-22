import React from 'react';
import { Layers, Crown, Sparkles, CheckCircle2 } from 'lucide-react';

export const SpecialContentIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0E1729] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4" />
              <span>Onde Está o Verdadeiro Ouro</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 text-balance">
              MAIS SONO, MAIS ENERGIA, TUDO AQUI — CLIQUE E CUIDE DO SEU SONO!
            </h2>

            <p className="text-lg sm:text-xl font-bold text-emerald-400 mb-6 text-balance">
              O APLICATIVO MAPEIA O PROBLEMA. OS CONTEÚDOS DO VIP ENTREGAM O CAMINHO PRÁTICO PARA TRANSFORMAR SUAS NOITES.
            </p>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Não entregamos apenas um diário vazio: no acesso completo, você destrava imersões, desenvolvimento pessoal e profissional, descompressão emocional e treinos corporais para ajudar a melhorar seu sono pela raiz.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <strong className="text-white">Escolha seu nível de transformação:</strong>
              </div>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-indigo-200">Essencial para começar.</span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-amber-300 font-bold">VIP Completo: o tesouro para sua vida e para transformar suas noites.</span>
            </div>
          </div>

          {/* Golden Aura around VIP Smartphone Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden p-6 sm:p-7 border border-amber-400/50 shadow-[0_0_55px_rgba(245,158,11,0.28)] flex items-center justify-center">
              {/* Public verified golden shimmer backdrop */}
              <img
                src="https://images.pexels.com/photos/5594992/pexels-photo-5594992.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Brilho dourado ao redor do celular representando o verdadeiro ouro dos conteúdos VIP"
                className="absolute inset-0 w-full h-full object-cover scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-amber-950/35 via-amber-900/15 to-slate-950/75" />

              {/* Sleek Smartphone Mockup framed by Gold */}
              <div className="relative z-10 w-[256px] rounded-[2.1rem] border-[5px] border-amber-300/75 bg-slate-950 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.75)]">
                {/* Speaker notch */}
                <div className="w-16 h-1.5 bg-slate-800 rounded-full mx-auto mb-3" />

                <div className="rounded-2xl bg-gradient-to-b from-[#17122B] via-[#111827] to-[#0B0F19] border border-amber-400/30 p-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] font-black uppercase tracking-wider">
                      <Crown className="w-3 h-3" />
                      Plano VIP
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-amber-200/80 uppercase tracking-wider">
                      App + Resiliência + 5 Bônus
                    </p>
                    <p className="text-xs font-extrabold text-white leading-tight mt-0.5">
                      Conteúdos Exclusivos do VIP:
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-0.5">
                    <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/5 border border-amber-300/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[10.5px] font-semibold text-slate-100 leading-tight">
                        Alta Performance Profissional
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/5 border border-amber-300/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[10.5px] font-semibold text-slate-100 leading-tight">
                        Imersão Código do Sono Perfeito
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/5 border border-amber-300/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[10.5px] font-semibold text-slate-100 leading-tight">
                        Mini Curso: 5 Pilares do Atendimento ao Cliente
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/5 border border-amber-300/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[10.5px] font-semibold text-slate-100 leading-tight">
                        Desafio 21 Dias: Alongue-se em Casa
                      </span>
                    </div>
                    <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/5 border border-amber-300/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[10.5px] font-semibold text-slate-100 leading-tight">
                        Treino Qi Gong: 7 Dias por Semana
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 text-center text-[10.5px] font-black tracking-wide shadow-md">
                      ★ O VERDADEIRO OURO VIP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
