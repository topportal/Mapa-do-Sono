import React from 'react';
import { HelpCircle, Clock, BatteryCharging, HeartHandshake, ArrowRight } from 'lucide-react';
import { PlanType, VIP_CHECKOUT_URL } from '../types';

interface AgitationSectionProps {
  onOpenCheckout: (plan: PlanType) => void;
}

export const AgitationSection: React.FC<AgitationSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Pre-title */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Identificação & Realidade
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center text-slate-900 mb-10 text-balance">
          VOCÊ NÃO PRECISA SE ACOSTUMAR A VIVER CANSADO.
        </h2>

        {/* 3 Reflection Questions in Minimalist Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
              Quantas vezes você acordou e sentiu que não descansou o suficiente?
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
              Quantas vezes chegou ao final do dia desejando apenas conseguir relaxar?
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
              Quantas vezes prometeu que iria cuidar melhor de si, mas acabou deixando isso para depois?
            </p>
          </div>
        </div>

        {/* Deep Agitation Copy Block */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-slate-900">
            A rotina consome nosso tempo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 text-sm text-slate-600">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>O trabalho exige atenção.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>A família precisa de nós.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Os compromissos não param.</span>
            </div>
          </div>

          <p>
            E, muitas vezes, o autocuidado acaba ficando em último lugar.
          </p>

          <p>
            Mas ninguém merece passar mais uma madrugada olhando para o teto, contando as horas que restam antes do despertador tocar.
          </p>

          <p>
            Você não precisa apenas de dicas soltas. Você precisa de um método concreto que ataque a causa das suas noites em claro e devolva o descanso profundo que seu corpo implora.
          </p>

          {/* Transformation Image: Waking up refreshed */}
          <div className="pt-2">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <img
                src="/src/assets/images/transformacao_despertar_sereno_1794240731747.jpg"
                alt="Pessoa acordando bem disposta e sorridente com a luz suave da manhã"
                className="w-full h-auto object-cover max-h-[360px] aspect-[16/9]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 sm:p-4 bg-slate-900/90 text-white flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-400">Mais Sono, Mais Energia:</span>
                <span className="text-slate-300">Despertar com clareza e vitalidade todos os dias</span>
              </div>
            </div>
          </div>

          {/* Strong punchline */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              Você não precisa esperar chegar ao limite do cansaço para resolver seu sono.
            </p>
          </div>

          {/* High-Impact Purchase CTA inside Agitation - Emphasizing VIP R$ 47 with Neon Green */}
          <div className="pt-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/90 border-2 border-[#00E676]/40 p-5 rounded-2xl shadow-sm">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase font-black text-emerald-800 tracking-wider">
                Mais sono, mais energia, tudo aqui. Clique no botão e resolva.
              </p>
              <p className="text-sm sm:text-base font-extrabold text-slate-950 mt-0.5">
                Acesse o MAPA DO SONO VIP com os 5 conteúdos para resolver seu sono por R$ 47,00
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-center gap-1.5 shrink-0">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl shadow-lg shadow-[#00E676]/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center leading-snug transition-all"
              >
                <span>CLIQUE E RESOLVA SEU SONO (R$ 47)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <span className="text-[11px] font-semibold text-emerald-900 text-center">
                ★ Ali dentro está um tesouro para sua vida: tudo para resolver seu sono.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
