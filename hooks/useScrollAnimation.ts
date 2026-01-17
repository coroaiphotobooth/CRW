import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper to handle standard fade-in-up animations
export const useFadeInUp = (triggerRef: React.RefObject<HTMLElement>, stagger: number = 0.1) => {
  useLayoutEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Find all elements with class 'animate-up' inside the trigger
      const targets = el.querySelectorAll('.animate-up');
      
      if (targets.length > 0) {
        gsap.fromTo(targets, 
          { 
            y: 50, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Start when top of section hits 80% of viewport
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, stagger]);
};

export const useParallax = (triggerRef: React.RefObject<HTMLElement>, targetSelector: string, speed: number = 20) => {
  useLayoutEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(targetSelector, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, targetSelector, speed]);
};
