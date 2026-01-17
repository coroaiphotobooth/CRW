import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useParallax, useFadeInUp } from '../hooks/useScrollAnimation';
import { Camera } from 'lucide-react';

const AIBoothPro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, '.bg-parallax', 15);
  useFadeInUp(sectionRef);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 px-6 overflow-hidden flex items-center">
      {/* Background Image Parallax - Neon Studio/Cyberpunk Vibe */}
      <div className="bg-parallax absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596387430461-0b5c142c1404?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30 pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-coro-dark via-coro-dark/90 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        
        {/* Visual Element */}
         <div className="animate-up w-full md:w-1/2 flex justify-center">
             <div className="hud-border w-full max-w-md p-6 rounded-lg hud-corner bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-4">
                  <Camera className="text-coro-purple" size={40} />
                  <div className="h-px flex-grow bg-coro-purple/50"></div>
                </div>
                <div className="aspect-[3/4] bg-slate-800/50 rounded flex items-center justify-center border border-slate-700 overflow-hidden relative">
                    <img 
                      src="https://lh3.googleusercontent.com/pw/AP1GczPsMhXXfekEMotTMJiy3HLf5zxKEtix_sCpCQEj87De-gDIa80RChToWrF_cAzqVJFnPIIa7X9qvOcdVIimMVc2WRdlq1wT6VdsYL2Cz6GuNEeTsJHtQx1AnemLGK-_jeTMB-RL1ti289nSTrgmy1Lmdg=w748-h1033-s-no-gm?authuser=0" 
                      alt="AI Booth Pro Setup" 
                      className="absolute inset-0 w-full h-full object-contain bg-black/40"
                    />
                    <div className="absolute bottom-4 left-4 z-10 bg-black/50 px-4 py-2 rounded border border-white/20 backdrop-blur-sm">
                      <span className="text-slate-200 uppercase tracking-widest text-sm font-bold">Professional Setup</span>
                    </div>
                </div>
             </div>
         </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="animate-up text-4xl md:text-6xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-coro-purple to-white">
            AI BOOTH PRO
          </h2>
          <div className="animate-up h-1 w-24 bg-coro-purple mb-8 shadow-[0_0_15px_#8b5cf6]"></div>

          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p className="animate-up font-semibold text-coro-blue">AI device untuk photobooth skala besar</p>
            <ul className="space-y-2">
              {[
                "Device AI yang lengkap dan kompleks",
                "Dikerjakan dengan operator & team professional",
                "Fitur AI profesional: Custom background, Custom pakaian, Detail AI hasil lebih presisi",
                "Bisa untuk group foto hingga belasan orang",
                "Prompt AI menggunakan foto sebagai referensi",
                "Multitasking generate 4 gambar AI dalam satu waktu",
                "Konsisten karakter & hasil",
                "Fitur kirim hasil via QR code, WhatsApp, Email, Telegram",
                "Fitur print: Card PVC, 4R Print, A4 Print Large, Sticker Print",
                "Dengan operator dapat menangani ribuan pengunjung per hari event"
              ].map((item, i) => (
                <li key={i} className="animate-up flex items-start gap-3 border-l-2 border-white/10 pl-4 hover:border-coro-purple transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBoothPro;
