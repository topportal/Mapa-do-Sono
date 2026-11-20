import React, { useState } from 'react';
import { X, Check, ShieldCheck, QrCode, CreditCard, Sparkles, Copy, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlanType, ESSENCIAL_CHECKOUT_URL, VIP_CHECKOUT_URL } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  onSelectPlan,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!isOpen) return null;

  const currentPrice = selectedPlan === 'vip' ? 'R$ 47,00' : 'R$ 27,00';
  const planTitle = selectedPlan === 'vip' ? 'Plano Completo VIP' : 'Plano Essencial';

  const mockPixKey = '00020126580014br.gov.bcb.pix0136mapadosono-checkout-77491-licenca520400005303986540' + (selectedPlan === 'vip' ? '47.00' : '27.00') + '5802BR5916MAPA DO SONO6009SAO PAULO62070503***6304';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFinalize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail para receber o acesso.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Checkout Seguro
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300">Acesso Imediato por 1 Ano</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Parabéns! Pedido Confirmado!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enviamos as instruções de acesso e seu login do <strong>{planTitle}</strong> para o e-mail:
            </p>
            <div className="p-3 bg-slate-100 rounded-xl font-mono text-sm text-slate-800 font-semibold">
              {email || 'seu-email@exemplo.com'}
            </div>
            <p className="text-xs text-slate-500">
              Caso não encontre na caixa de entrada em 2 minutos, verifique a pasta de promoções ou spam.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full py-3.5 px-6 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl cursor-pointer"
              >
                Concluir e Acessar Agora
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="p-6 sm:p-8 space-y-6">
            {/* Plan Selector Buttons */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Selecione o seu plano:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onSelectPlan('essencial')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedPlan === 'essencial'
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-500 uppercase">Essencial</p>
                  <p className="text-lg font-black text-slate-900">R$ 27,00</p>
                  <p className="text-[11px] text-slate-500">App + Palestra</p>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectPlan('vip')}
                  className={`p-3 rounded-2xl border text-left transition-all relative cursor-pointer ${
                    selectedPlan === 'vip'
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                    VIP Completo
                  </span>
                  <p className="text-xs font-bold text-indigo-600 uppercase">Completo VIP</p>
                  <p className="text-lg font-black text-slate-900">R$ 47,00</p>
                  <p className="text-[11px] text-slate-500">App + 5 Bônus</p>
                </button>
              </div>

              {/* Upgrade nudge if Essencial is selected */}
              {selectedPlan === 'essencial' && (
                <div
                  onClick={() => onSelectPlan('vip')}
                  className="mt-2.5 p-2.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-900 cursor-pointer hover:bg-amber-100/70 transition-all"
                >
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Levar o VIP por apenas +R$ 20?</span>
                  </div>
                  <span className="font-bold underline text-[11px]">Mudar para VIP</span>
                </div>
              )}
            </div>

            {/* Customer Information Inputs */}
            <form onSubmit={handleFinalize} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Seu Melhor E-mail (onde você receberá o acesso) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Enviamos seu login e instruções exclusivamente por e-mail · Acesso válido por 1 ano.
                </p>
              </div>

              {/* Payment Method Switcher */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Acesso Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-800 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* PIX Details */}
              {paymentMethod === 'pix' ? (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Chave PIX Dinâmica Gerada</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 inline-block">
                    {/* Simulated Clean QR Code Graphic */}
                    <div className="w-28 h-28 mx-auto bg-slate-900 rounded-lg flex items-center justify-center text-white text-[10px] font-mono p-2">
                      <QrCode className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Abra o app do seu banco, escolha PIX e aponte a câmera ou use o botão abaixo:
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Código PIX Copiado com Sucesso!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Código PIX Copia e Cola</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Validade (MM/AA)
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Order Summary & Submit Button */}
              <div className="pt-2">
                <a
                  href={selectedPlan === 'essencial' ? ESSENCIAL_CHECKOUT_URL : VIP_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 sm:px-6 text-xs sm:text-sm md:text-base font-black text-slate-950 bg-[#00E676] hover:bg-[#00FF88] rounded-xl shadow-xl shadow-[#00E676]/35 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-center leading-snug"
                >
                  <span>Liberar Acesso Agora ({currentPrice})</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>

              {/* Guarantee assurance */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Garantia de 7 dias · Pagamento seguro criptografado</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
