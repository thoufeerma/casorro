import React from "react";

export const FutureContentSection: React.FC = () => {
  return (
    <section
      id="fragrance-info"
      aria-label="Fragrance Information"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#E9DDD2] text-[#2C2521] border-b border-[#2C2521]/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extralight tracking-widest mb-6 leading-tight text-[#2C2521]">
            THE FRAGRANCE
          </h2>
          <p className="text-sm sm:text-base font-sans leading-relaxed font-light text-[#2C2521]/80 max-w-xl mx-auto">
            Inspired by the Taj Mahal, the timeless symbol of love, purity, and devotion, Ivory Rose is a unisex fragrance that balances softness with strength.
          </p>
        </div>

        {/* Minimal Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-14">
          
          {/* Head Accord */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#B58B86]">
              HEAD
            </h3>
            <div className="space-y-1 font-serif text-lg sm:text-xl font-light tracking-wide text-[#2C2521]">
              <p>Sea Water</p>
              <p>Liquorice</p>
            </div>
          </div>

          {/* Heart Accord */}
          <div className="flex flex-col gap-4 items-center md:border-x md:border-[#2C2521]/10 md:px-8">
            <h3 className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#B58B86]">
              HEART
            </h3>
            <div className="space-y-1 font-serif text-lg sm:text-xl font-light tracking-wide text-[#2C2521]">
              <p>Rose Turkish Lokum</p>
              <p>Dried Rose Petals</p>
            </div>
          </div>

          {/* Base Accord */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#B58B86]">
              BASE
            </h3>
            <div className="space-y-1 font-serif text-lg sm:text-xl font-light tracking-wide text-[#2C2521]">
              <p>Vanilla Cream</p>
              <p>White Musk</p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default FutureContentSection;
