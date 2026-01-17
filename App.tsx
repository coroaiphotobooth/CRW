import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import InstaAIDevice from './components/InstaAIDevice';
import AIBoothPro from './components/AIBoothPro';
import CustomApps from './components/CustomApps';
import VideoProduction from './components/VideoProduction';
import PriceList from './components/PriceList';
import WhyCoro from './components/WhyCoro';
import Samples from './components/Samples';
import Contact from './components/Contact';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay triggers correctly on modern browsers
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.7; // Slow down slightly for a more majestic/cinematic feel
    }
  }, []);

  return (
    <main className="relative w-full text-slate-200 selection:bg-coro-cyan selection:text-black">
      
      {/* GLOBAL FIXED BACKGROUND - HTML5 Video Player */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline // Critical for iOS autoplay
            preload="auto"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920" // Fallback image if video loads slowly
            className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        >
            {/* 
               PREMIUM AI BACKGROUND: Abstract Neural Network / Blue Particles 
               This represents "Data", "AI", and "Future" perfectly.
            */}
            <source src="https://cdn.pixabay.com/video/2019/05/16/23665-336987163_large.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay: Darker at bottom/top, clearer in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-coro-dark/80 via-coro-dark/40 to-coro-dark/90 mix-blend-multiply"></div>
        
        {/* Blue Tint Overlay to unify branding */}
        <div className="absolute inset-0 bg-coro-dark/30 mix-blend-color"></div>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-90"></div>
      </div>

      {/* Main Content Wrapper - Raised to Z-10 to sit above the video */}
      <div className="relative z-10">
        <Hero />
        <InstaAIDevice />
        <AIBoothPro />
        <CustomApps />
        <VideoProduction />
        <PriceList />
        <WhyCoro />
        <Samples />
        <Contact />
      </div>
      
      {/* Fixed Noise Overlay for texture - Highest Z-index */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
};

export default App;