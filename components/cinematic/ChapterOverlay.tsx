import React from "react";
import { FramePhaseRange } from "@/lib/framesManifest";

interface ChapterOverlayProps {
  currentPhase: FramePhaseRange;
  currentFrame: number;
  totalFrames: number;
}

export const ChapterOverlay: React.FC<ChapterOverlayProps> = ({
  currentFrame,
  totalFrames,
}) => {
  const showUI = currentFrame >= totalFrames - 40;

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      
      {/* LEFT SIDE: Identity */}
      <div 
        className={`absolute left-6 sm:left-12 lg:left-[10vw] top-[20%] sm:top-1/2 sm:-translate-y-1/2 flex flex-col gap-3 pointer-events-auto transition-all duration-1000 ease-out ${
          showUI ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
        }`}
      >
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.15em] text-brand-ivory leading-[1.1] drop-shadow-sm">
          IVORY<br />ROSE
        </h1>
        <p className="text-[9px] sm:text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-brand-ivory/70 ml-1">
          EAU DE PARFUM &middot; 100 ML
        </p>
      </div>

      {/* RIGHT SIDE: CTAs */}
      <div 
        className={`absolute right-6 sm:right-12 lg:right-[10vw] bottom-16 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 flex flex-col gap-8 lg:gap-10 pointer-events-auto transition-all duration-1000 ease-out delay-100 ${
          showUI ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
        }`}
      >
        <a 
          href="https://www.casorro.com/collections/discovery-and-eternal-seven/products/ivory-rose-unisex-perfume-50ml"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-brand-ivory hover:text-brand-rose transition-colors duration-300 w-[200px] sm:w-[240px]"
        >
          <div className="flex items-center justify-between px-1">
            <span>SHOP NOW</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-light">&rarr;</span>
          </div>
          <div className="w-full h-[1px] bg-brand-rose/40 group-hover:bg-brand-rose transition-colors duration-300" />
        </a>
        
        <a 
          href="https://www.casorro.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-brand-ivory/70 hover:text-brand-ivory transition-colors duration-300 w-[200px] sm:w-[240px]"
        >
          <div className="flex items-center justify-between px-1">
            <span>LEARN MORE</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-light">&rarr;</span>
          </div>
          <div className="w-full h-[1px] bg-brand-ivory/20 group-hover:bg-brand-ivory/50 transition-colors duration-300" />
        </a>
      </div>

    </div>
  );
};

export default ChapterOverlay;
