import React, { ReactNode, forwardRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = forwardRef<HTMLElement, Props>(({ children, className = "", id }, ref) => {
  return (
    <section 
      ref={ref}
      id={id} 
      className={`relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden ${className}`}
    >
      {/* Background Grid Noise - Reduced opacity for transparency */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none z-0"></div>
      
      {/* Gradient fade at top and bottom to blend sections */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coro-dark/90 to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-coro-dark/90 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
});

export default SectionWrapper;