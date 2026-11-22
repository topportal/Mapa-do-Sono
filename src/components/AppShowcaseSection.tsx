import React, { useState } from 'react';
import { BookOpen, LineChart, CheckSquare, HeartPulse, TrendingUp, Sparkles, Check, ArrowRight, Moon } from 'lucide-react';
import { AreaInfo, PlanType, VIP_CHECKOUT_URL } from '../types';

interface AppShowcaseSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

const areas: (AreaInfo & { icon: React.ReactNode })[] = [
  {
    id: 'sono',
    number: '01',
    title: 'MEU SONO',
    subtitle: 'Mapeie a raiz das noites mal dormidas.',
    description:
      'Registre suas noites em segundos e pare de adivinhar por que você não descansa. Descubra o que realmente está fragmentando o seu sono.',
    bullets: [
      'Registro rápido em menos de 60 segundos ao acordar',
      'Mapeamento de despertares na madrugada e latência do sono',
      'Identificação imediata do nível real de restauração',
      'Base concreta para ajudar no seu sono e reduzir noites mal dormidas',
    ],
    icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
  },
  {
    id: 'analise',
    number: '02',
    title: 'MINHA ANÁLISE',
    subtitle: 'Descubra os gatilhos exatos.',
    description:
      'Pare de tentar métodos aleatórios. Veja exatamente quais hábitos, horários e tensões estão atrapalhando seu sono noite após noite.',
    bullets: [
      'Cruzamento claro entre hábitos noturnos e qualidade do sono',
      'Identificação do impacto real de telas, cafeína e estresse',
      'Painel visual direto para decisões práticas imediatas',
      'Clareza total sobre o que desligar antes de deitar',
    ],
    icon: <LineChart className="w-5 h-5 text-indigo-400" />,
  },
  {
    id: 'rotina',
    number: '03',
    title: 'MINHA ROTINA',
    subtitle: 'Protocolo para induzir o sono.',
    description:
      'Aplique uma sequência noturna guiada que prepara o corpo e sinaliza ao cérebro que é hora de desligar e entrar em sono profundo.',
    bullets: [
      'Sequência prática de higiene do sono passo a passo',
      'Desaceleração fisiológica 45 minutos antes de dormir',
      'Substituição de hábitos estimulantes por gatilhos de sono',
      'Consistência real sem esforço mental excessivo',
    ],
    icon: <CheckSquare className="w-5 h-5 text-indigo-400" />,
  },
  {
    id: 'sos',
    number: '04',
    title: 'SOS',
    subtitle: 'Alívio imediato na madrugada.',
    description:
      'Acordou às 3h da manhã com a mente a mil? Acione ferramentas práticas de emergência para acalmar o sistema nervoso e voltar a dormir rápido.',
    bullets: [
      'Respiração guiada 4-7-8 com ritmo visual relaxante',
      'Técnicas imediatas para frear pensamentos acelerados',
      'Protocolo rápido para interromper a vigília na madrugada',
      'Apoio real na hora exata em que você precisa dormir',
    ],
    icon: <HeartPulse className="w-5 h-5 text-indigo-400" />,
  },
  {
    id: 'evolucao',
    number: '05',
    title: 'MINHA EVOLUÇÃO',
    subtitle: 'Comprove o fim do cansaço.',
    description:
      'Acompanhe seus despertares diminuindo, suas horas de sono contínuo aumentando e sua disposição retornando semana após semana.',
    bullets: [
      'Comparativo claro da redução das noites mal dormidas',
      'Evolução visível do seu score de descanso e consistência',
      'Prova concreta do ganho de energia durante o dia',
      'Controle definitivo sobre o seu próprio padrão de sono',
    ],
    icon: <TrendingUp className="w-5 h-5 text-indigo-400" />,
  },
];

export const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({ onOpenCheckout }) => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const activeArea = areas[activeAreaIndex];

  // Interactive Mini-Widgets for active area
  const [sampleMood, setSampleMood] = useState<'Restaurador' | 'Regular' | 'Cansado'>('Restaurador');
  const [routineDone, setRoutineDone] = useState<Record<string, boolean>>({
    'chá': true,
    'sem-telas': true,
    'luz-baixa': false,
  });
  const [isBreathing, setIsBreathing] = useState(false);

  return (
    <section id="areas" className="py-20 md:py-28 bg-[#0C152B] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
            Mais sono, mais energia, tudo aqui. Clique no botão e comece.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
            APRESENTAMOS O MAPA DO SONO
          </h2>
          <p className="text-lg sm:text-xl text-indigo-200 font-semibold mb-4">
            Muito mais do que apenas ver como está o seu sono: um método prático para ajudar a acalmar a mente, melhorar seu sono e acordar com mais energia.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Não basta registrar que você dormiu mal — você precisa cuidar do problema pela raiz. O aplicativo ajuda a identificar o que sabota seu descanso, oferece alívio prático para a madrugada e, junto ao conteúdo ouro do Plano VIP, te dá o caminho para construir noites melhores.
          </p>
        </div>

        {/* Big Showcase Image Banner - 5-Screen MAPA DO SONO Showcase over Public Night Sky Image */}
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/35 bg-[#071026] shadow-2xl mb-16">
          <img
            src="https://burst.shopifycdn.com/photos/a-view-of-the-stars-on-night-sky.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            alt="Apresentação das cinco telas do MAPA DO SONO em smartphones"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071026]/85 via-[#091634]/80 to-[#060C1D]/95" />

          <div className="relative z-10 px-4 sm:px-6 pt-8 pb-28 sm:pb-24">
            {/* Title matching original app_screens_mockup */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-lg sm:text-2xl font-black text-white">
                <span className="w-7 h-7 rounded-lg bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center">
                  <Moon className="w-4 h-4 text-sky-300 fill-sky-300" />
                </span>
                <span>Mapa do Sono</span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-200/80 mt-0.5">
                Aplicativo de Bem-Estar do Sono
              </p>
            </div>

            {/* 5 Screens Grid matching original 5-phone showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3.5 max-w-5xl mx-auto items-end">
              {/* 1. Registro do Sono */}
              <div className="hidden sm:flex flex-col justify-between bg-[#0B152E]/95 border-2 border-slate-600/60 rounded-[1.5rem] p-3 shadow-2xl ring-1 ring-white/5 min-h-[168px]">
                <div>
                  <div className="w-9 h-1.5 bg-slate-950 border border-slate-700/80 rounded-full mx-auto mb-2.5" />
                  <p className="text-[10px] font-bold text-white text-center mb-2">Registro do Sono</p>
                </div>
                <div className="bg-slate-900/95 rounded-xl p-2.5 border border-slate-800 space-y-1.5 text-[9px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Sono</span>
                    <span className="font-mono text-sky-300 font-bold">7h 45m</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Qualidade</span>
                    <span className="text-amber-300">★★★★☆</span>
                  </div>
                  <p className="text-emerald-400 font-semibold pt-1 border-t border-slate-800">Acordei descansado</p>
                </div>
              </div>

              {/* 2. Ritmo Circadiano */}
              <div className="hidden sm:flex flex-col justify-between bg-[#0B152E]/95 border-2 border-slate-600/60 rounded-[1.5rem] p-3 shadow-2xl ring-1 ring-white/5 min-h-[184px]">
                <div>
                  <div className="w-9 h-1.5 bg-slate-950 border border-slate-700/80 rounded-full mx-auto mb-2.5" />
                  <p className="text-[10px] font-bold text-white text-center mb-2">Ritmo Circadiano</p>
                </div>
                <div className="bg-slate-900/95 rounded-xl p-2.5 border border-slate-800">
                  <p className="text-[8px] text-amber-300 font-semibold mb-1.5">Janela de Sono Ideal</p>
                  <div className="h-12 flex items-end gap-1">
                    {[35, 65, 90, 75, 45, 70].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-emerald-400"
                        style={{ height: `${val * 0.42}px` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[7px] text-slate-500 mt-1 font-mono">
                    <span>22h</span>
                    <span>02h</span>
                    <span>06h</span>
                  </div>
                </div>
              </div>

              {/* 3. Rotina Noturna Calmante (Center Highlight) */}
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-between bg-[#101E40]/95 border-2 border-emerald-400/60 rounded-[1.6rem] p-3.5 shadow-[0_0_35px_rgba(16,185,129,0.22)] ring-1 ring-emerald-300/20 min-h-[205px]">
                <div>
                  <div className="w-10 h-1.5 bg-slate-950 border border-slate-700 rounded-full mx-auto mb-2.5" />
                  <p className="text-[10px] font-extrabold text-white text-center mb-2.5">Rotina Calmante</p>
                </div>
                <div className="space-y-1.5 text-[9px] text-slate-200">
                  <div className="flex items-center justify-between bg-slate-900/95 px-2 py-1.5 rounded-lg border border-slate-800">
                    <span>Chá de Camomila</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/95 px-2 py-1.5 rounded-lg border border-slate-800">
                    <span>Sem Telas 1h</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/95 px-2 py-1.5 rounded-lg border border-slate-800">
                    <span>Leitura Leve</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/70 px-2 py-1.5 rounded-lg border border-slate-800/70 text-slate-400">
                    <span>Banho Morno</span>
                    <span>○</span>
                  </div>
                </div>
              </div>

              {/* 4. Ferramenta de Respiração SOS */}
              <div className="flex flex-col justify-between bg-[#0B152E]/95 border-2 border-slate-600/60 rounded-[1.5rem] p-3 shadow-2xl ring-1 ring-white/5 min-h-[184px]">
                <div>
                  <div className="w-9 h-1.5 bg-slate-950 border border-slate-700/80 rounded-full mx-auto mb-2.5" />
                  <p className="text-[10px] font-bold text-white text-center mb-2">Respiração SOS</p>
                </div>
                <div className="bg-slate-900/95 rounded-xl p-2.5 border border-slate-800 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-sky-400/80 bg-sky-950/60 shadow-[0_0_18px_rgba(56,189,248,0.28)] flex items-center justify-center text-[10px] font-bold text-sky-200">
                    4·7·8
                  </div>
                  <span className="text-[8px] text-sky-300 font-medium mt-2">Alívio na madrugada</span>
                </div>
              </div>

              {/* 5. Pontuação Semanal */}
              <div className="flex flex-col justify-between bg-[#0B152E]/95 border-2 border-slate-600/60 rounded-[1.5rem] p-3 shadow-2xl ring-1 ring-white/5 min-h-[168px]">
                <div>
                  <div className="w-9 h-1.5 bg-slate-950 border border-slate-700/80 rounded-full mx-auto mb-2.5" />
                  <p className="text-[10px] font-bold text-white text-center mb-2">Qualidade Semanal</p>
                </div>
                <div className="bg-slate-900/95 rounded-xl p-2.5 border border-slate-800 text-center">
                  <div className="h-8 flex items-end justify-center gap-1 mb-1.5">
                    {[55, 65, 75, 80, 90, 95].map((val, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-t bg-gradient-to-t from-emerald-500 to-amber-300"
                        style={{ height: `${val * 0.28}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-black text-emerald-400 font-mono">85 / 100</p>
                  <p className="text-[8px] text-slate-400">Média Semanal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative sm:absolute sm:bottom-5 sm:left-5 sm:right-5 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 m-3 sm:m-0">
            <div>
              <p className="text-sm font-bold text-white">Interface Simples, Elegante e Direta ao Ponto</p>
              <p className="text-xs text-slate-400">Modo noturno pensado para você acessar à noite sem cansar sua visão</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 shrink-0">
              <Sparkles className="w-4 h-4" />
              <span>5 Áreas Integradas</span>
            </div>
          </div>
        </div>

        {/* Section Sub-header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            CONHEÇA AS 5 ÁREAS DO APLICATIVO
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Clique nas abas abaixo para explorar o que cada módulo faz por você
          </p>
        </div>

        {/* 5 Area Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 mb-8">
          {areas.map((area, idx) => {
            const isActive = activeAreaIndex === idx;
            return (
              <button
                key={area.id}
                onClick={() => setActiveAreaIndex(idx)}
                className={`py-3 px-3 rounded-xl text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[11px] font-bold ${isActive ? 'text-indigo-200' : 'text-slate-500'}`}>
                    {area.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">{area.title}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Area Showcase Box */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Column: Description & Bullets */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold text-indigo-400 bg-indigo-950/80 border border-indigo-800/80 px-2.5 py-1 rounded-md">
                  ÁREA {activeArea.number}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-sm font-semibold text-slate-300">{activeArea.subtitle}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeArea.title}
              </h4>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {activeArea.description}
              </p>

              <div className="pt-3 space-y-2.5">
                {activeArea.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Interactive Experience Demo */}
            <div className="lg:col-span-5 bg-[#0A1120] rounded-xl border border-slate-800 p-4 sm:p-6 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Simulação Interativa da Área
              </p>

              {activeArea.id === 'sono' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300 font-medium">Como foi o seu descanso esta noite?</p>
                  <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-1.5 sm:gap-2">
                    {(['Restaurador', 'Regular', 'Cansado'] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setSampleMood(m)}
                        className={`flex-1 min-w-[88px] sm:min-w-0 py-2 px-2.5 rounded-lg text-[11px] sm:text-xs font-semibold border transition-all cursor-pointer text-center flex items-center justify-center ${
                          sampleMood === m
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Horário registrado:</span>
                      <span className="text-white font-mono">23:15 → 07:10</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Avaliação:</span>
                      <span className="text-emerald-400 font-semibold">{sampleMood}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    Registro salvo! Em segundos seu mapa noturno começa a ser desenhado.
                  </p>
                </div>
              )}

              {activeArea.id === 'analise' && (
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Padrão Detectado</span>
                    <span className="text-indigo-400 font-semibold">Últimos 14 dias</span>
                  </div>
                  <div className="h-20 flex items-end gap-2 pt-2 border-b border-slate-800 pb-2">
                    {[65, 80, 50, 90, 85, 70, 95].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full rounded-t transition-all ${
                            val >= 80 ? 'bg-indigo-500' : 'bg-slate-700'
                          }`}
                          style={{ height: `${val * 0.7}px` }}
                        />
                        <span className="text-[10px] text-slate-500">D{i + 1}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-indigo-300 font-medium">
                    Insight: Noites sem telas 45 min antes tiveram +28% de percepção restauradora.
                  </p>
                </div>
              )}

              {activeArea.id === 'rotina' && (
                <div className="space-y-2.5">
                  <p className="text-xs text-slate-300 font-medium">Rotina de Desaceleração Noturna:</p>
                  {[
                    { id: 'chá', label: 'Chá calmante de camomila ou melissa' },
                    { id: 'sem-telas', label: 'Desconectar de redes sociais' },
                    { id: 'luz-baixa', label: 'Luzes indiretas no quarto' },
                  ].map((task) => (
                    <button
                      key={task.id}
                      onClick={() =>
                        setRoutineDone((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                      }
                      className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-left cursor-pointer hover:border-slate-700"
                    >
                      <span className={routineDone[task.id] ? 'line-through text-slate-500' : 'text-slate-300'}>
                        {task.label}
                      </span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          routineDone[task.id]
                            ? 'bg-emerald-500 border-emerald-400 text-white'
                            : 'border-slate-600'
                        }`}
                      >
                        {routineDone[task.id] && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {activeArea.id === 'sos' && (
                <div className="text-center space-y-4">
                  <p className="text-xs text-slate-300 font-medium">Ritmo Calmante 4-7-8</p>
                  <div className="flex items-center justify-center py-2">
                    <div
                      className={`w-24 h-24 rounded-full border-2 border-indigo-400/80 flex items-center justify-center transition-all duration-1000 ${
                        isBreathing ? 'scale-125 bg-indigo-900/40 shadow-lg shadow-indigo-500/30' : 'scale-90 bg-slate-900'
                      }`}
                    >
                      <span className="text-xs font-semibold text-indigo-200">
                        {isBreathing ? 'Expire devagar...' : 'Inspire...'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBreathing(!isBreathing)}
                    className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg cursor-pointer"
                  >
                    {isBreathing ? 'Pausar Exercício' : 'Iniciar Respiração SOS'}
                  </button>
                </div>
              )}

              {activeArea.id === 'evolucao' && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">Score de Consistência</p>
                      <p className="text-xl font-bold text-emerald-400">88 / 100</p>
                    </div>
                    <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-md font-semibold">
                      +18% este mês
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Você registrou 21 dias consecutivos e suas noites com acordares na madrugada reduziram sensivelmente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer of Section & Immediate Conversion CTA */}
        <div className="text-center mt-12 space-y-6">
          <p className="text-base font-semibold text-indigo-300">
            Mais sono, mais energia, tudo aqui — clique no botão e cuide do seu sono.
          </p>

          <div className="p-6 rounded-2xl bg-slate-900 border-2 border-[#00E676]/40 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                Mais sono, mais energia, tudo aqui
              </span>
              <p className="text-base sm:text-lg font-extrabold text-white">
                Clique no botão e comece a cuidar do seu sono hoje no VIP!
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-center gap-1.5 shrink-0">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-2xl shadow-xl shadow-[#00E676]/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center leading-snug transition-all"
              >
                <span>QUERO DORMIR MELHOR · VIP (R$ 47)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <span className="text-[11px] font-semibold text-amber-300/95 text-center leading-snug">
                ★ O ouro para sua vida está no VIP: conteúdos práticos para ajudar no seu sono.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
