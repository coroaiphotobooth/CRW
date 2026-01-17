import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set('.hero-text', { y: 100, opacity: 0 });
      gsap.set('.scroll-indicator', { opacity: 0 });

      // Intro Animation
      tl.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      })
      .to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.5");

      // Bouncing scroll indicator
      gsap.to('.scroll-indicator-inner', {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Parallax scroll effect for Hero
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 50,
        opacity: 0
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 
          NOTE: Background is handled globally in App.tsx with the Motion Video.
          We keep the hero transparent so the portal video shows through.
      */}

      {/* Main Content */}
      <div className="z-10 text-center relative backdrop-blur-[0px]">
        {/* Changed to font-cyber (Orbitron) for that hard sci-fi look */}
        <h1 className="hero-text text-7xl md:text-9xl font-cyber font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]">
          CORO.AI
        </h1>
        <div className="hero-text mt-8 flex items-center justify-center gap-6">
            <div className="h-[2px] w-12 bg-coro-cyan shadow-[0_0_10px_#06b6d4]"></div>
            <p className="text-lg md:text-2xl text-white tracking-[0.5em] font-display font-light uppercase drop-shadow-lg">
            Creative Intelligence Studio
            </p>
            <div className="h-[2px] w-12 bg-coro-cyan shadow-[0_0_10px_#06b6d4]"></div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 flex flex-col items-center gap-2 z-10">
        <span className="text-xs tracking-[0.3em] text-coro-cyan font-display uppercase">Scroll Down</span>
        <div className="w-6 h-10 border border-coro-cyan/50 backdrop-blur-sm rounded-full flex justify-center pt-2">
          <div className="scroll-indicator-inner w-1 h-2 bg-white rounded-full shadow-[0_0_5px_#ffffff]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;