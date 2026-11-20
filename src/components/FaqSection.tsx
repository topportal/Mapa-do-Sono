import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: 'O MAPA DO SONO é apenas para quem tem dificuldade para dormir?',
    answer:
      'Não. Ele também pode ser utilizado por quem deseja conhecer melhor seus hábitos, organizar a rotina e acompanhar sua evolução.',
  },
  {
    question: 'Qual a diferença entre os planos?',
    answer:
      'O Essencial inclui o aplicativo e a palestra Resiliência e Inteligência Emocional. O VIP inclui tudo do Essencial e mais cinco conteúdos exclusivos.',
  },
  {
    question: 'As palestras são ao vivo?',
    answer:
      'Não. As palestras de Resiliência e Inteligência Emocional e Alta Performance Profissional são gravadas e têm aproximadamente 20 a 25 minutos.',
  },
  {
    question: 'A Imersão Código do Sono Perfeito é diferente das palestras?',
    answer: 'Sim. A imersão é composta por seis sessões gravadas.',
  },
  {
    question: 'Preciso ter experiência para utilizar o aplicativo?',
    answer: 'Não. A proposta é oferecer uma experiência simples e organizada.',
  },
  {
    question: 'O aplicativo substitui uma consulta médica?',
    answer:
      'Não. É uma ferramenta de acompanhamento e educação sobre hábitos de sono. Não substitui avaliação, diagnóstico ou tratamento profissional.',
  },
  {
    question: 'Como recebo meu acesso?',
    answer:
      'Após a confirmação da compra, você receberá as instruções e os dados de acesso exclusivamente no seu e-mail cadastrado no checkout.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer:
      'Você terá acesso completo ao aplicativo MAPA DO SONO e aos conteúdos do seu plano por 1 ano inteiro (12 meses), com pagamento único e sem mensalidades.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer:
      'Você tem 7 dias de garantia incondicional. Se dentro desse período sentir que não é para você, basta solicitar o reembolso direto na plataforma, de forma simples e sem burocracia.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 text-balance">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tudo o que você precisa saber antes de iniciar sua jornada com o MAPA DO SONO.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-indigo-100 text-indigo-600' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
