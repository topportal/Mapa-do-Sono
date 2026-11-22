import React from 'react';
import { Crown, Sparkles, Check, ArrowRight, PlayCircle, Award } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

interface PlanVipSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const PlanVipSection: React.FC<PlanVipSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="vip" className="py-20 md:py-28 bg-[#080E1C] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>EXPERIÊNCIA MAIS COMPLETA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            MAIS SONO, MAIS ENERGIA, TUDO AQUI PARA AJUDAR NO SEU SONO!
          </h2>

          <p className="text-lg sm:text-xl font-bold text-amber-300 mb-3">
            OPÇÃO 02 — MAPA DO SONO COMPLETO VIP
          </p>

          <p className="text-xl sm:text-2xl font-black text-white mb-4">
            TUDO DO PLANO ESSENCIAL + 5 CONTEÚDOS PODEROSOS PARA SUA VIDA.
          </p>

          <p className="text-slate-300 text-base leading-relaxed">
            No VIP você não leva só o aplicativo para registrar suas noites: você recebe um verdadeiro tesouro para sua vida com imersões, técnicas de relaxamento e práticas corporais que ajudam a acalmar a mente acelerada e melhorar seu sono.
          </p>
        </div>

        {/* Included Base Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/30 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>Base do VIP</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Você já leva TUDO o que está no Plano Essencial:
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">✓ App Mapa do Sono</span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">✓ Palestra Resiliência</span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">✓ Diário & Análise</span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">✓ Rotina & SOS</span>
            </div>
          </div>
        </div>

        {/* Section Divider: The 5 Exclusive Bonuses */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Exclusivo do VIP
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            E MAIS CINCO CONTEÚDOS EXCLUSIVOS:
          </h3>
        </div>

        {/* The 5 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* BONUS 01 - Alta Performance */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  BÔNUS 01
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-extrabold bg-slate-800 px-3 py-1 rounded-lg line-through decoration-rose-400 decoration-2">
                  Valor: R$ 67,00
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-amber-300/30 mb-4 bg-slate-950 shadow-md group aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Executiva em escritório moderno representando Alta Performance Profissional"
                  className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-transparent to-slate-950/90 flex flex-col justify-between p-4 pointer-events-none">
                  <div className="text-center">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-200 block">
                      Masterclass Executiva
                    </span>
                    <p className="text-sm font-black tracking-wide text-amber-100 mt-0.5 drop-shadow">
                      ALTA PERFORMANCE
                    </p>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-amber-200/90 text-center font-semibold">
                    Clareza &amp; Foco Profissional
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">
                ALTA PERFORMANCE PROFISSIONAL
              </h4>
              <p className="text-xs font-semibold text-indigo-300 mb-3">
                Invista também no seu desenvolvimento profissional.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Uma palestra gravada de aproximadamente 20 a 25 minutos para ampliar seus conhecimentos sobre alta performance e desenvolvimento profissional. Um conteúdo complementar para quem deseja refletir sobre sua atuação, organização e desempenho no trabalho.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Palestra gravada de alta definição</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Aproximadamente 20 a 25 minutos de conteúdo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Acesso para assistir no seu ritmo</span>
              </div>
            </div>
          </div>

          {/* BONUS 02 - Imersão Código do Sono Perfeito */}
          <div className="bg-gradient-to-b from-indigo-950/70 to-slate-900 rounded-2xl border border-indigo-500/40 p-6 flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-indigo-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                Maior Destaque VIP
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mt-2 mb-3">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  BÔNUS 02
                </span>
                <span className="text-sm sm:text-base text-emerald-300 font-extrabold bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-lg line-through decoration-rose-400 decoration-2">
                  Valor: R$ 197,00
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-amber-200/35 mb-4 bg-[#050A18] shadow-md group aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/32088272/pexels-photo-32088272.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Lua luminosa no céu estrelado — capa da Imersão Código do Sono Perfeito"
                  className="w-full h-full object-cover object-center opacity-75 group-hover:scale-[1.04] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-2 rounded-lg border border-amber-200/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060C1D]/35 via-[#060C1D]/45 to-[#050A18]/92 flex flex-col items-center justify-end text-center p-5 pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-200/95">
                    Imersão Exclusiva
                  </span>
                  <p className="text-base font-black tracking-wide text-white leading-tight mt-1">
                    CÓDIGO DO SONO
                    <span className="block text-amber-200">PERFEITO</span>
                  </p>
                  <span className="text-[9px] text-slate-300 tracking-widest uppercase mt-1.5">
                    6 Sessões Completas
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">
                IMERSÃO CÓDIGO DO SONO PERFEITO
              </h4>
              <p className="text-xs font-semibold text-indigo-300 mb-3">
                Seis sessões gravadas para aprofundar sua jornada de autocuidado.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Uma experiência de aprendizado para explorar conhecimentos e práticas relacionados ao sono e ao descanso. Assista no seu tempo, acompanhe as sessões e aproveite o conteúdo como parte da sua rotina.
              </p>
            </div>

            <div className="pt-4 border-t border-indigo-900/60 space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>6 sessões gravadas completas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Conteúdo para acompanhar no seu ritmo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Experiência complementar ao MAPA DO SONO</span>
              </div>
            </div>
          </div>

          {/* BONUS 03 - Mini Curso: 5 Pilares do Atendimento ao Cliente */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  BÔNUS 03
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-extrabold bg-slate-800 px-3 py-1 rounded-lg line-through decoration-rose-400 decoration-2">
                  Valor: R$ 67,00
                </span>
              </div>

              {/* Clean 4:3 Mini Course Cover Visual */}
              <div className="rounded-xl overflow-hidden border border-slate-800 mb-4 bg-gradient-to-br from-[#0D162D] via-[#131F3D] to-[#081022] aspect-[4/3] p-5 flex flex-col justify-between relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    <PlayCircle className="w-3 h-3" />
                    Mini Curso
                  </span>
                  <Award className="w-5 h-5 text-amber-300/90" />
                </div>

                <div className="space-y-1.5 my-auto py-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-300">
                    Excelência & Comunicação
                  </p>
                  <h5 className="text-lg sm:text-xl font-black text-white leading-tight">
                    5 PILARES DO ATENDIMENTO AO CLIENTE
                  </h5>
                </div>

                <div className="grid grid-cols-5 gap-1.5 pt-2">
                  {['01', '02', '03', '04', '05'].map((num) => (
                    <div
                      key={num}
                      className="py-1.5 rounded-lg bg-slate-900/80 border border-indigo-500/30 text-center text-[10px] font-extrabold text-indigo-200"
                    >
                      Pilar {num}
                    </div>
                  ))}
                </div>
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">
                MINI CURSO: 5 PILARES DO ATENDIMENTO AO CLIENTE
              </h4>
              <p className="text-xs font-semibold text-indigo-300 mb-3">
                Desenvolva excelência, clareza e conexão no atendimento.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Um mini curso prático e direto ao ponto com os cinco pilares fundamentais para encantar clientes, comunicar com segurança e elevar a qualidade do seu atendimento no dia a dia.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mini curso prático e objetivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Os 5 pilares essenciais do atendimento</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Aplicação imediata na rotina profissional</span>
              </div>
            </div>
          </div>

          {/* BONUS 04 - Alongue-se em Casa 21 Dias */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  BÔNUS 04
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-extrabold bg-slate-800 px-3 py-1 rounded-lg line-through decoration-rose-400 decoration-2">
                  Valor: R$ 57,90
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700/70 mb-4 bg-slate-950 shadow-md group">
                <img
                  src="https://images.pexels.com/photos/36764399/pexels-photo-36764399.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Mulher praticando alongamento suave em tapete em casa"
                  className="w-full h-auto object-cover object-center aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">
                DESAFIO 21 DIAS: ALONGUE-SE EM CASA
              </h4>
              <p className="text-xs font-semibold text-indigo-300 mb-3">
                Vinte e um dias para colocar seu corpo em movimento.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Você não precisa de uma academia para começar a dedicar alguns minutos ao seu corpo. O desafio foi pensado para incentivar a prática de alongamentos em casa e ajudar você a desenvolver mais regularidade.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Desafio de 21 dias guiado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Práticas simples para fazer em casa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Incentivo à consistência e movimento diário</span>
              </div>
            </div>
          </div>

          {/* BONUS 05 - Treino Qi Gong */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  BÔNUS 05
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-extrabold bg-slate-800 px-3 py-1 rounded-lg line-through decoration-rose-400 decoration-2">
                  Valor: R$ 47,90
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700/70 mb-4 bg-slate-950 shadow-md group">
                <img
                  src="https://images.pexels.com/photos/38155763/pexels-photo-38155763.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Prática tradicional de Qi Gong com movimentos suaves e respiração consciente"
                  className="w-full h-auto object-cover object-[center_20%] aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">
                TREINO QI GONG: 7 DIAS POR SEMANA
              </h4>
              <p className="text-xs font-semibold text-indigo-300 mb-3">
                Transforme minutos do dia em momentos de conexão corporal.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Conheça o Qi Gong, uma prática tradicional que combina movimentos suaves, respiração e atenção corporal. Uma experiência para incluir na sua rotina e explorar novas formas de autocuidado.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Treino para os sete dias da semana</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Práticas de movimento consciente e respiração</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Exercícios para acompanhar no seu ritmo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout for VIP - Ultra Evident 47 Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-indigo-950 via-[#0A1224] to-[#060B14] border-2 border-emerald-400 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-400 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
            Melhor Escolha · 94% dos Alunos
          </div>

          <p className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-2">
            EXPERIÊNCIA COMPLETA COM OS 5 BÔNUS
          </p>

          <div className="flex flex-col items-center justify-center gap-1 mb-3">
            <span className="text-xs sm:text-sm text-slate-400 line-through">
              De R$ 530,80 se comprado separado
            </span>
            <div className="flex items-baseline justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mr-1.5">R$</span>
              <span className="text-6xl sm:text-7xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_35px_rgba(52,211,153,0.45)]">
                47
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">,00</span>
            </div>
            <span className="text-xs text-slate-300 font-medium bg-slate-800/90 border border-slate-700/80 px-3.5 py-1 rounded-full mt-1">
              pagamento único · apenas R$ 20 a mais que o plano básico
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
            Aplicativo + Palestra + 5 Bônus Completos para Ajudar no Seu Sono
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Mais sono, mais energia, tudo aqui: sessões práticas, desenvolvimento pessoal e hábitos completos para transformar sua vida e suas noites.
          </p>

          <div className="space-y-2.5 max-w-xl mx-auto">
            <a
              href={VIP_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-4 sm:px-10 sm:py-5 text-xs sm:text-base md:text-lg font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl shadow-2xl shadow-[#00E676]/45 ring-2 ring-[#00E676]/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center leading-snug"
            >
              <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950 shrink-0" />
              <span>QUERO DORMIR MELHOR · VIP (R$ 47)</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
            <p className="text-xs sm:text-sm font-bold text-amber-300 leading-snug">
              ★ Um tesouro para sua vida: o apoio que faltava para melhorar seu sono e ter mais energia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
