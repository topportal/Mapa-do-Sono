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
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            A rotina consome nosso tempo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 py-2">
            <div className="p-4 bg-indigo-50/90 rounded-xl border-2 border-indigo-200/80 shadow-sm flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 shadow-sm" />
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">O trabalho exige atenção.</span>
            </div>
            <div className="p-4 bg-indigo-50/90 rounded-xl border-2 border-indigo-200/80 shadow-sm flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 shadow-sm" />
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">A família precisa de nós.</span>
            </div>
            <div className="p-4 bg-indigo-50/90 rounded-xl border-2 border-indigo-200/80 shadow-sm flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 shadow-sm" />
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">Os compromissos não param.</span>
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

          {/* Transformation Image: Happy ~40yo woman in natural morning light */}
          <div className="pt-3">
            <div className="max-w-lg mx-auto relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/13572008/pexels-photo-13572008.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Mulher feliz na faixa dos 40 anos, naturalmente bonita e sorridente, aproveitando a luz suave da manhã com disposição"
                  className="w-full h-auto object-cover object-[center_18%] aspect-square max-h-[460px] group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/55 to-transparent pointer-events-none" />
              </div>
              <div className="p-3.5 sm:p-4 bg-slate-900/95 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-bold text-emerald-400">Mais Sono, Mais Energia:</span>
                <span className="text-slate-200">Despertar com clareza e vitalidade todos os dias</span>
              </div>
            </div>
          </div>

          {/* Highlighted punchline right below the image */}
          <div className="mt-6 bg-indigo-50/95 border-2 border-indigo-200 rounded-2xl p-5 sm:p-6 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <p className="text-lg sm:text-xl font-extrabold text-slate-950 leading-snug">
              Você não precisa esperar chegar ao limite do cansaço para cuidar do seu sono.
            </p>
          </div>

          {/* High-Impact Purchase CTA inside Agitation - Emphasizing VIP R$ 47 with Neon Green */}
          <div className="pt-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/90 border-2 border-[#00E676]/40 p-5 rounded-2xl shadow-sm">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase font-black text-emerald-800 tracking-wider">
                Mais sono, mais energia, tudo aqui. Clique no botão e comece hoje.
              </p>
              <p className="text-sm sm:text-base font-extrabold text-slate-950 mt-0.5">
                Acesse o MAPA DO SONO VIP com os 5 conteúdos para ajudar no seu sono por R$ 47,00
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-center gap-1.5 shrink-0">
              <a
                href={VIP_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl shadow-lg shadow-[#00E676]/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center leading-snug transition-all"
              >
                <span>QUERO CUIDAR DO MEU SONO · VIP (R$ 47)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <span className="text-[11px] font-semibold text-emerald-900 text-center">
                ★ Ali dentro está um tesouro para sua vida: tudo para apoiar o seu descanso.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
