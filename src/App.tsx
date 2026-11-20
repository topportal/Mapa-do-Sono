import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AgitationSection } from './components/AgitationSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { AudienceFitSection } from './components/AudienceFitSection';
import { StepsSection } from './components/StepsSection';
import { SpecialContentIntro } from './components/SpecialContentIntro';
import { PlanEssencialSection } from './components/PlanEssencialSection';
import { PlanVipSection } from './components/PlanVipSection';
import { ValueTableSection } from './components/ValueTableSection';
import { ComparisonDecisionSection } from './components/ComparisonDecisionSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PlanType } from './types';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('vip');

  const handleOpenCheckout = (plan: PlanType = 'vip') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A1120] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      <main className="flex-1">
        {/* Dobra 1: Fundo Escuro - Hero Hook, Reflexão & Valor Inicial */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 2: Fundo Claro - Identificação e Quebra de Padrão */}
        <AgitationSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 3: Fundo Escuro Noturno - Apresentação do App & As 5 Áreas Interativas */}
        <AppShowcaseSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 4: Fundo Claro - Para Quem É / Benefícios de Autocuidado */}
        <AudienceFitSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 5: Fundo Escuro - Como Começar em 3 Passos */}
        <StepsSection />

        {/* Dobra 6: Fundo Noturno - Ponte para Conteúdos Especiais */}
        <SpecialContentIntro />

        {/* Dobra 7: Fundo Claro - Plano Essencial (R$ 27,00) */}
        <PlanEssencialSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 8: Fundo Escuro Luxury - Plano Completo VIP (R$ 47,00) + 5 Bônus */}
        <PlanVipSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 9: Fundo Grafite/Slate - Tabela de Ancoragem R$ 474,70 por R$ 47 */}
        <ValueTableSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 10: Fundo Claro - Qual Plano Vale Mais a Pena? */}
        <ComparisonDecisionSection onOpenCheckout={handleOpenCheckout} />

        {/* Dobra 11: Fundo Claro - Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* Dobra 12: Fundo Escuro - Decisão Final, Garantia de 7 Dias & Fechamento */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer com Aviso Médico e Direitos */}
      <Footer />

      {/* Checkout Modal Interativo com PIX e Cartão */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
      />

      {/* Barra Inferior Sticky Mobile (Regra de <15% da tela) */}
      <MobileStickyBar onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}
