import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { Code2, TabletSmartphone, Layout, Cpu } from 'lucide-react';

const CustomApps: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInUp(ref);

  const features = [
    { icon: <Code2 />, text: "Custom aplikasi interaktif berbasis AI" },
    { icon: <TabletSmartphone />, text: "Custom photobooth apps untuk event tertentu" },
    { icon: <Layout />, text: "Custom design event untuk booth interaktif" },
    { icon: <Cpu />, text: "Custom AI device untuk touchscreen panel" },
  ];

  return (
    <SectionWrapper ref={ref} id="custom-apps" className="bg-transparent">
      <div className="text-center mb-16">
        <h2 className="animate-up text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-md">
          CUSTOM <span className="text-coro-cyan">AI APPS</span>
        </h2>
        <p className="animate-up text-slate-300 max-w-2xl mx-auto">
          Tailor-made solutions for unique brand experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div 
            key={i} 
            className="animate-up group relative p-6 bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-coro-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)]"
          >
            <div className="w-12 h-12 rounded-lg bg-coro-cyan/10 flex items-center justify-center text-coro-cyan mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              {item.icon}
            </div>
            <p className="text-slate-200 font-light text-lg">
              {item.text}
            </p>
            {/* Corner decorations */}
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-coro-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-coro-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
      
      {/* Decorative center image/graphic */}
      <div className="animate-up mt-16 w-full max-w-lg mx-auto h-[400px] hud-border rounded-lg relative overflow-hidden flex items-center justify-center group bg-black/30 backdrop-blur-sm">
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczMn9eSfT-s8EIzWi74JT4ySlswp99J3mY9wLKC8ijLKOJ2Q4lgUBL7YhaX3n6MpI0Yzq7ZEW8qG84l1GovJ4oneR8ftFu4zzKQMG5Zby6hQWtXyPMwiyIncpeRXlldern0f180pHVBzyMZwp5Pr_7Y3Sg=w1835-h1033-s-no-gm?authuser=0')"
           }}
         ></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         
         <div className="z-10 bg-black/60 px-8 py-4 border border-coro-cyan/30 backdrop-blur-md rounded-full mt-auto mb-8">
            <span className="font-display text-2xl tracking-[0.2em] text-white group-hover:text-coro-cyan transition-colors">OWN YOUR APP</span>
         </div>
      </div>

    </SectionWrapper>
  );
};

export default CustomApps;