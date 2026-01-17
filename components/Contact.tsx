import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInUp(ref);

  return (
    <SectionWrapper ref={ref} id="contact" className="min-h-[70vh]">
      <div className="flex flex-col items-center justify-center text-center space-y-12">
        {/* Updated to font-cyber for consistent branding with Hero */}
        <h1 className="animate-up text-5xl md:text-7xl font-cyber font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            TERIMAKASIH
        </h1>

        <div className="animate-up space-y-8 flex flex-col items-center">
            {/* Phone & WhatsApp Group */}
            <div className="space-y-4 flex flex-col items-center">
                <div className="space-y-2">
                    <p className="text-coro-cyan text-xs tracking-[0.3em] font-display uppercase font-bold">Contact</p>
                    <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-white font-sans font-bold hover:text-coro-cyan transition-colors cursor-pointer">
                        <Phone size={24} className="text-coro-cyan" />
                        <span className="tracking-wide">0823-8123-0888</span>
                    </div>
                </div>

                <a 
                  href="https://wa.me/6282381230888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-500/10 border border-green-500 text-green-400 font-display font-bold tracking-widest uppercase rounded hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] group mt-2"
                >
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                    <span>WHATSAPP ME</span>
                </a>
            </div>

            {/* Email Group */}
            <div className="space-y-2">
                <p className="text-coro-cyan text-xs tracking-[0.3em] font-display uppercase font-bold">Email</p>
                <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-white font-sans font-bold hover:text-coro-cyan transition-colors cursor-pointer break-all">
                    <Mail size={24} className="text-coro-cyan" />
                    <span className="tracking-wide">coroaiphotobooth@gmail.com</span>
                </div>
            </div>
        </div>

        <div className="animate-up pt-20 pb-4 w-full border-t border-slate-800 mt-12">
            <p className="text-slate-500 text-xs font-sans tracking-wider">
                © 2026 CORO.AI - Creative Intelligence Studio. All rights reserved.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;