import React from "react";
import { BRAND_NAME, FRAGRANCE_NAME } from "@/lib/constants";

interface PreloaderProps {
  progress: number; // 0 to 100
  isLoaded: boolean;
}

export const CinematicPreloader: React.FC<PreloaderProps> = ({
  progress,
  isLoaded,
}) => {
  if (isLoaded) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading cinematic experience"
      className={`fixed inset-0 z-40 bg-brand-charcoal-deep flex flex-col items-center justify-center px-6 transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="max-w-xs text-center space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-sans tracking-ultra uppercase text-brand-rose">
            Parfum Extraordinaire
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extralight tracking-widest text-brand-ivory">
            {BRAND_NAME}
          </h2>
          <p className="font-serif text-lg italic text-brand-champagne/80 font-light">
            {FRAGRANCE_NAME}
          </p>
        </div>

        {/* Minimal luxury loading progress bar */}
        <div className="space-y-3 pt-4">
          <div className="w-full h-[2px] bg-brand-charcoal-light/80 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-brand-rose via-brand-champagne to-brand-rose transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-sans tracking-widest text-brand-ivory/50 uppercase">
            <span>Initializing Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicPreloader;
