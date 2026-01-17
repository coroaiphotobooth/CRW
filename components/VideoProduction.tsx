import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { Clapperboard } from 'lucide-react';

const VideoProduction: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInUp(ref);

  return (
    <SectionWrapper ref={ref} id="video-production">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
            <h2 className="animate-up text-4xl md:text-5xl font-display font-bold text-white mb-2">
                VIDEO <br/><span className="text-coro-blue">PRODUCTION</span>
            </h2>
            <div className="animate-up h-px w-full bg-gradient-to-r from-coro-blue to-transparent"></div>
            
            <ul className="space-y-4 text-slate-300">
                {[
                    "Produksi video untuk LED event, TV, iklan, dan lainnya",
                    "Editing video dengan AI",
                    "Motion video AI",
                    "Resolusi hingga 8K",
                    "AI Avatar Virtual",
                    "Bisa custom seluruh permintaan video"
                ].map((item, i) => (
                    <li key={i} className="animate-up flex items-center gap-4 p-4 bg-slate-800/20 rounded border border-transparent hover:border-coro-blue/30 transition-all">
                        <Clapperboard className="text-coro-blue shrink-0" size={20} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="animate-up w-full md:w-1/2 relative">
            {/* Monitor Frame */}
            <div className="relative aspect-video bg-black rounded-lg border-2 border-slate-700 shadow-2xl overflow-hidden group">
                {/* Screen Content */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczNdZWSw9Q03KRcE1Wqsy-zFCR7ASV6VBGIvZNrE3ayaqpLmXpDJDP1NQ66ZI9ACBD97kKc3zx8ce7cZ9-2sWdcTqqgU9XQyGIbRipNCkUHHRS5iNePrZFKJIlZPau-DsI4j49d4WcXWhZnQtq0ERhuS4Q=w1392-h768-s-no-gm?authuser=0')"
                  }}
                ></div>
                
                {/* 8K Badge */}
                <div className="absolute top-4 right-4 bg-coro-blue/20 text-coro-blue px-3 py-1 rounded border border-coro-blue/50 text-xs font-bold animate-pulse z-10">
                    8K RESOLUTION
                </div>

                {/* Scanning Effect */}
                <div className="scan-line"></div>

                {/* HUD Elements */}
                <div className="absolute bottom-4 left-4 font-mono text-xs text-green-400 z-10 bg-black/40 px-2 py-1 backdrop-blur-sm rounded">
                    RENDER: COMPLETE<br/>
                    AI_MODEL: GEN_V3
                </div>
            </div>
            
            {/* Monitor Stand (CSS art) */}
            <div className="w-32 h-16 bg-gradient-to-b from-slate-700 to-slate-800 mx-auto -mt-2 relative -z-10 rounded-b-lg"></div>
            <div className="w-64 h-2 bg-slate-700 mx-auto rounded-full opacity-50"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VideoProduction;