import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { Smartphone } from 'lucide-react';

const InstaAIDevice: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInUp(ref);

  return (
    <SectionWrapper ref={ref} id="insta-ai">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Visual Panel - Displaying Actual Device Photo */}
        <div className="animate-up w-full md:w-1/2 relative h-[600px] hud-border rounded-2xl overflow-hidden flex items-center justify-center bg-slate-900/30 backdrop-blur-md group">
          {/* Background Texture (Subtle) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728853913-1e22ba58487f?q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="scan-line"></div>
          
          {/* Actual Device Photo */}
          <div className="relative z-10 w-full h-full p-6 flex items-center justify-center">
            <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNs3s-YxgLVSdDo12p5jqxB0zTNPm-bQvE1clxM2cQzESp8T9k4HZcUMehS5FJw0ORWYx90bwljXAHMzNYGMNHKBfi-e8FEJjVIMpoeAOfJhIc5S2vcMam7Zf2qPJ2Taqtvk38zpuylydHgijuv1fig5Q=w748-h1033-s-no-gm?authuser=0" 
                alt="Insta AI Device Unit" 
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] filter brightness-110"
            />
          </div>

          {/* HUD Overlay Info */}
          <div className="absolute bottom-6 left-0 right-0 text-center z-20 pointer-events-none">
             <div className="inline-flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-coro-cyan/30 backdrop-blur-md">
                <div className="w-2 h-2 bg-coro-cyan rounded-full animate-pulse"></div>
                <span className="text-coro-cyan text-xs font-mono tracking-widest">SYSTEM ONLINE</span>
             </div>
          </div>
        </div>

        {/* Right Content Bullets */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="animate-up text-4xl md:text-5xl font-display font-bold text-white mb-8 border-l-4 border-coro-cyan pl-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            INSTA AI DEVICE
          </h2>
          
          <ul className="space-y-3 text-slate-300 font-light text-sm md:text-base">
            {[
              "Bisa self service atau dengan operator",
              "Ukuran layar touchscreen 32 inch",
              "Device AI dengan tampilan elegan, simple, dan futuristic",
              "Generate gambar super cepat (10-15 detik)",
              "Fitur dan hasil kualitas high resolution",
              "Bisa untuk 3-6 orang foto group (tergantung space lokasi)",
              "Fitur AI menggunakan prompt yang kompleks dan akurat",
              "Tema bisa sesuai request dengan prompt",
              "QR code private untuk download hasil foto",
              "Google Drive backup untuk semua hasil generate"
            ].map((item, i) => (
              <li key={i} className="animate-up flex items-start gap-3 pl-2 border-b border-white/5 pb-2 hover:border-coro-cyan/50 transition-colors">
                <span className="text-coro-cyan mt-1">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InstaAIDevice;