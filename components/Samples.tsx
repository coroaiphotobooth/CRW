import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { useFadeInUp } from '../hooks/useScrollAnimation';
import { ExternalLink, Zap, Maximize2, X } from 'lucide-react';

// Specific Google Photos links provided
const galleryImages = [
  "https://lh3.googleusercontent.com/pw/AP1GczOkPB3iS2RxCe1p1OXG55ugkXW3ZnRQKpX-D33C7MpR9iuA8OUcY0gaHK6Naa1dL4dmstIYSsDxQOBsxuHUYR8uH7KA1tA7Vl6MfQ6w21vaMl09lH3X5NalUH4Hd2IgXcj0XBLEM9v_DlSwVYKaACJzsg=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNR_Mdl-PcycgelPkDvlbzWeFz3dju1_3njmEiWYRWMXrukc-cv_I4yr8TSlRRB-0le_mqAOj9nikxVKaiE-Cx66my8wSVwbV4xiAKED_VE1gYceV71T6ZCN-2Yj_Dspt8o6NJlAQMRnmBNG5VAk4fQnw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNQG_peVUrgIRXfi2tKncCh3DQhWfmr2GOdxUXL0mfRSWXFFdMlfnLzxeItp4KhmUkDP5DQnu9uAeiN8AWWfjtUdJAhzAN7fsgd1VytrRTsuiQxUY0e3vsF89-qzK5xZgbe-SpFKyv564i8Myv2C5eV8A=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOI4Wv-CZGgQC9q6miRfX4Dbe7FskVgOnOhcAjHN7RBhVmW5ixWfWzS2fS1sq_6B5g_GU9sv0yllblyM-gDUm2q0bYAksHhGJx2wa0hrhgrpdg-Vzoat6svEQEYg-6KqjBmW-5O1fLWA9bKDusEd501qw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMxvGVjpJN7TfSRjUsqu8qw4ZogzUNIz3Wck9WQMf9Iei9RwYqLbVg0wN8buyF1yZ5KVoyV3fp8vRLe3Oit9Rog7pZ9t6iysaKfb7c_4OFJ5Atn9nGTHsp4Z2JTY2MA6QQWWZyRTMx2Tx9IKAJKJ0UVKw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOnOWegcerX90SNaBrmHPhGBUE-BTzjPf8-2luhltFzzqx6PGTPtzgGn_hBJq3XYrzjOoi9M5SJTsLgSZn1GKZFqpCXKFzn6zkGypS48ni5k1KaGPeArI51a5vYMZFuxb1xHfndjBkrZMeqosp2TsFALQ=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNK_zHCRs_WLs771sqMf_az-FnPNvy0nNkLlxbMgxBAQZ48f0WznrFM7_6BMEGEkeMJUo8ihlDwWlUlvdOH-EfKgEP62EJMOUEDFsK4gUjH1xa1idp7uzM-x02M7vgZiPFNCEhT67A71NTJoItYcRyETw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO__8qa0dBIagdDH8MGeQsHJiWyKVHlO59meeIT0wnyZrz0BTnIMSI_4C-R0fyUl6RToeGOprvjia_UZ35i7c8E6VrIrzzUb0L7ZEJrz6_8rIVUJHgOVF2hBz6M4EeLC7o7ruMksSL0hMSDZFwEfohTcQ=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPfjN-bYypZKv7JR0BhVlIZEQ-2bD1QHQmJVdAlSYU2kJCZVTOrlK9zX2QeTNDo0SyWUgnmvtqN5wDAWsZkQWjCPgC-ASsoZuedwGMEZYg2v2U5Hffu7gaxGsbW4iyKlOmy0ujuIOXkBDmv8v61wMEywA=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOfCOUuWqVLQKPfbd-vayVGtmufRx5OcA4CwR3uSDjMSloAi-Bx0Kfaoe56PTT2PrktzPsJ3WFnspzPB6Vs5Q8by56h0W_XuK-_SZFakHCuh4MLjh6YGBmKIwQanPaWYta9atytTxOIcGH2yxdoCULdhw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMnHVCGt2fstvt2IYCmKhJkif0nHhxQ4esVJvc907M69nbfrHQNt0kiKlqkFyxWqT84fcSHf1-pPhIrsAXSMNKqRSWa9JjqY92q9478wKiemoTmDxIMNIiYAzzG_6ecgHSl0mvloUXeKcU5MmEtGTPEvw=w689-h1033-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOee3dGnqY2cdneKZ_cD-oidFHerpFeX9wUvP1jnKoFYElNF2t2JWHFDI9xZlBQeEqernyCMFz3e226WOcN1u9Qj1ynMsWUNfRvH3kxwobHzTshtVWcfBHDFLKoxZ-RtjTwYrBnJbM0gC9WBCplHd7g5A=w689-h1033-s-no-gm?authuser=0"
];

const Samples: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  useFadeInUp(ref);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <SectionWrapper ref={ref} id="gallery" className="py-24">
      <div className="flex flex-col items-center w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="animate-up text-5xl md:text-6xl font-cyber font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-coro-cyan to-coro-purple">GALLERY</span>
          </h2>
          <div className="animate-up flex items-center justify-center gap-2 text-coro-cyan font-mono text-xs tracking-widest">
            <Zap size={14} className="animate-pulse" />
            <span>CLICK TO ENLARGE</span>
            <Zap size={14} className="animate-pulse" />
          </div>
        </div>

        {/* Dense Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full max-w-6xl px-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImg(src)}
              className="animate-up group relative aspect-[2/3] overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 cursor-pointer transition-all duration-300 hover:border-coro-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:z-10"
            >
              {/* Image */}
              <img 
                src={src} 
                alt={`AI Sample ${index + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full border border-coro-cyan/50 text-coro-cyan">
                    <Maximize2 size={20} />
                </div>
              </div>

              {/* ID Tag */}
              <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-mono text-coro-cyan bg-black/60 px-2 py-1 rounded border border-coro-cyan/20">
                  IMG_{100 + index}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-coro-cyan transition-colors z-[110]"
                onClick={() => setSelectedImg(null)}
            >
                <X size={40} />
            </button>

            {/* Main Image with HUD Border */}
            <div 
                className="relative max-w-full max-h-[90vh] overflow-hidden rounded-sm border border-slate-700 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
                <img 
                    src={selectedImg} 
                    alt="Full View" 
                    className="max-h-[85vh] w-auto object-contain"
                />
                
                {/* Decorative HUD Lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-coro-cyan"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-coro-cyan"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-coro-cyan"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-coro-cyan"></div>
                
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                     <p className="inline-block bg-black/70 px-4 py-1 text-coro-cyan font-mono text-xs tracking-widest border border-coro-cyan/20">
                        HIGH RESOLUTION OUTPUT
                     </p>
                </div>
            </div>
          </div>
        )}

        {/* Call to Action - External Link */}
        <div className="animate-up mt-16 text-center">
            <p className="text-slate-400 mb-6 font-light tracking-wide">View full high-resolution archive</p>
            
            <a 
              href="https://photos.app.goo.gl/e7HzxwBH2pnAkagM7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-4 overflow-hidden rounded-none border border-coro-cyan bg-coro-cyan/5 transition-all duration-300 hover:bg-coro-cyan/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-coro-cyan"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-coro-cyan"></span>
                
                <span className="relative font-cyber font-bold tracking-widest text-white group-hover:text-coro-cyan transition-colors">
                    OPEN GOOGLE PHOTOS
                </span>
                <ExternalLink className="relative text-coro-cyan w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Samples;