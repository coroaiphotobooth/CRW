import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { Check, Star } from 'lucide-react';

const PriceList: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInUp(ref);

  return (
    <SectionWrapper ref={ref} id="price-list">
      <div className="text-center mb-12">
        <h2 className="animate-up text-5xl font-display font-bold text-white">PRICE LIST</h2>
        <div className="w-32 h-1 bg-coro-cyan mx-auto mt-4 rounded-full shadow-[0_0_10px_#06b6d4]"></div>
        <p className="animate-up text-slate-400 mt-4 tracking-wider">COMPARE PACKAGES & FEATURES</p>
      </div>

      {/* Responsive Table Container */}
      <div className="animate-up w-full overflow-x-auto pb-4 custom-scrollbar">
        <table className="w-full min-w-[800px] border-collapse text-left">
          <thead>
            <tr>
              <th className="p-4 border-b-2 border-slate-700 bg-slate-900/50 text-slate-400 font-mono text-sm uppercase tracking-wider w-1/4">
                Duration / Type
              </th>
              <th className="p-4 border-b-2 border-slate-700 bg-slate-900/50 text-white font-display font-bold text-lg w-1/4">
                AI INSTANT
              </th>
              <th className="p-4 border-b-2 border-coro-purple bg-coro-purple/10 text-white font-display font-bold text-lg w-1/4 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-coro-purple shadow-[0_0_15px_#8b5cf6]"></div>
                AI BOOTH PRO
                <span className="block text-[10px] text-coro-purple font-mono font-normal tracking-widest mt-1">RECOMMENDED</span>
              </th>
              <th className="p-4 border-b-2 border-slate-700 bg-slate-900/50 text-white font-display font-bold text-lg w-1/4">
                VIDEOBOOTH
                <span className="block text-[10px] text-slate-400 font-mono font-normal tracking-widest mt-1">PHOTO + VIDEO</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {/* 4 HOURS */}
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors group">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                4 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">SOFTCOPY ONLY</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 7.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 7.500.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 9.000.000</td>
            </tr>
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                4 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">UNLIMITED PRINT</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 9.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 10.000.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 12.000.000</td>
            </tr>

            {/* Separator */}
            <tr><td colSpan={4} className="h-4 bg-transparent"></td></tr>

            {/* 8 HOURS */}
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                8 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">SOFTCOPY ONLY</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 9.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 10.000.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 11.000.000</td>
            </tr>
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                8 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">UNLIMITED PRINT</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 13.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 13.000.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 13.000.000</td>
            </tr>

            {/* Separator */}
            <tr><td colSpan={4} className="h-4 bg-transparent"></td></tr>

            {/* 12 HOURS */}
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                12 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">SOFTCOPY ONLY</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 11.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 12.000.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 13.000.000</td>
            </tr>
            <tr className="bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
              <td className="p-6 font-bold text-coro-cyan border-r border-slate-800">
                12 HOURS
                <span className="block text-xs text-slate-500 font-normal mt-1">UNLIMITED PRINT</span>
              </td>
              <td className="p-6 text-slate-300 font-mono">IDR 14.000.000</td>
              <td className="p-6 text-white font-mono font-bold bg-coro-purple/5 border-x border-slate-800/50">IDR 15.000.000</td>
              <td className="p-6 text-slate-300 font-mono">IDR 15.000.000</td>
            </tr>

            {/* MULTI DAY */}
            <tr className="border-t-2 border-slate-700">
                <td className="p-6 font-bold text-white border-r border-slate-800">3 - 20 DAY EVENT</td>
                <td colSpan={3} className="p-6 text-center text-coro-cyan font-bold tracking-widest bg-coro-cyan/5">
                    CALL FOR BEST PRICE
                </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
        
        {/* Special Projects */}
        <div className="animate-up p-8 rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-coro-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Star className="text-coro-blue fill-coro-blue" /> SPECIAL PROJECTS
            </h3>
            <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <div>
                        <p className="font-bold text-slate-200">VIDEO PRODUCTION</p>
                        <p className="text-xs text-slate-400">Cinematic, TVC, Event Documentation</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Start From</p>
                        <p className="text-coro-cyan font-mono font-bold">IDR 3.000.000</p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <div>
                        <p className="font-bold text-slate-200">CUSTOM AI APPLICATION</p>
                        <p className="text-xs text-slate-400">Tailor-made software & interactive install</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Start From</p>
                        <p className="text-coro-cyan font-mono font-bold">IDR 15.000.000</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Add-Ons */}
        <div className="animate-up p-8 rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-coro-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">ADD-ONS</h3>
            <ul className="space-y-4">
                {[
                    { name: "AI BOOTH PRO + MONITOR 43 INCH", price: "IDR 1.000.000" },
                    { name: "CARD PRINT COVER (WHATSAPP)", price: "INCLUDED" },
                    { name: "4R PHOTOBOOK COVER (WHATSAPP)", price: "INCLUDED" },
                    { name: "LED PANNEL", price: "CALL FOR PRICE" },
                ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-sm md:text-base border-b border-slate-700/50 pb-2 last:border-0">
                        <span className="text-slate-300 flex items-center gap-2">
                            <Check size={14} className="text-coro-cyan" /> {item.name}
                        </span>
                        <span className="font-mono text-slate-400 whitespace-nowrap">{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default PriceList;