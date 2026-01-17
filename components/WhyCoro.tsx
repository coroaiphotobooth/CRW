import React, { useLayoutEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import gsap from 'gsap';

const WhyCoro: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section while list items reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // When top of section hits top of viewport
          end: "+=150%", // Pin for 1.5 screen heights
          pin: true,
          scrub: 1,
        }
      });

      // Stagger items in
      const items = gsap.utils.toArray('.why-item');
      tl.from(items, {
        opacity: 0,
        x: -50,
        stagger: 0.5, // Slow scrub stagger
        duration: 5,
        ease: "none"
      });

      // Background gentle shift
      gsap.to('.why-bg-grid', {
        backgroundPosition: "0px 100px",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Dark overlay to ensure text readability against the global space background */}
        <div className="absolute inset-0 bg-coro-dark/60 backdrop-blur-[2px]"></div>

        <div className="why-bg-grid absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-10 pointer-events-none"></div>
        
        <div ref={contentRef} className="relative z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/3 text-right border-r-2 border-coro-cyan pr-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    KENAPA<br/>HARUS<br/><span className="text-coro-cyan">CORO.AI ?</span>
                </h2>
            </div>

            <div className="w-full md:w-2/3">
                <ul className="space-y-4 text-slate-200 font-light text-sm md:text-base">
                    {[
                        "Menggunakan teknologi generatif paling update",
                        "Gratis pembuatan sample sesuai permintaan sebelum deal",
                        "Hasil yang lebih cepat dan akurat 10 -+ detik waktu render",
                        "Kualitas dan porposional wajah, postur badan tetap terjaga",
                        "Hasil dengan resolusi tinggi",
                        "Gratis design frame event, logo title overlay",
                        "Bisa costum pakaian, background, tambahkan produk dll",
                        "Gratis toleransi waktu tambahan hingga 1 jam",
                        "Harga negotiable untuk kondisi tertentu",
                        "Jumlah tema atau konsep tidak terbatas"
                    ].map((item, i) => (
                        <li key={i} className="why-item flex items-center gap-3">
                            <span className="w-2 h-2 bg-coro-purple rounded-full shadow-[0_0_5px_#8b5cf6]"></span>
                            <span className="drop-shadow-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default WhyCoro;