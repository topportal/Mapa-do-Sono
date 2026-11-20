import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#060B14] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Medical disclaimer note as in copy */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-8 text-[11px] leading-relaxed text-slate-400 text-center sm:text-left">
          <strong className="text-slate-300 font-semibold block sm:inline">
            Aviso Importante:&nbsp;
          </strong>
          O MAPA DO SONO é uma plataforma de acompanhamento, educação e registro de hábitos de autocuidado. Este material não substitui diagnóstico, tratamento, consulta ou acompanhamento de médicos, psiquiatras ou especialistas do sono. Se você possui distúrbios crônicos, consulte sempre um profissional de saúde habilitado.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
          <div className="text-center sm:text-left">
            <p className="font-bold text-slate-300 text-sm">MAPA DO SONO © {new Date().getFullYear()}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Todos os direitos reservados. Conheça suas noites, cuide dos seus hábitos.</p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ambiente Seguro SSL 256-bit</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
