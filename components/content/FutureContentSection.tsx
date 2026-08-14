import React from "react";
import { FRAGRANCE_NOTES } from "@/lib/constants";

export const FutureContentSection: React.FC = () => {
  return (
    <section
      id="future-content"
      aria-label="Fragrance Story and Olfactory Composition"
      className="relative w-full py-24 sm:py-32 md:py-40 bg-brand-charcoal text-brand-ivory border-b border-brand-charcoal-light/30"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <p className="text-xs font-sans tracking-ultra uppercase text-brand-rose mb-3">
            II &mdash; The Olfactory Narrative
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-brand-ivory mb-6 leading-tight">
            Crafted in silence. Defined by light and petal.
          </h2>
          <p className="text-sm font-sans text-brand-ivory/60 leading-relaxed font-light">
            IVORY ROSE is an ethereal study in contrast &mdash; where the crisp air of pink pepper encounters the deep, tactile warm grace of velvet Damask rose.
          </p>
        </div>

        {/* Notes Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {FRAGRANCE_NOTES.map((note, index) => (
            <div
              key={index}
              className="group p-8 bg-brand-charcoal-light/40 border border-brand-rose/10 hover:border-brand-rose/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-sans tracking-ultra uppercase text-brand-rose/80 block mb-4">
                  {note.category} Accord
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-ivory font-light mb-3 group-hover:text-brand-champagne transition-colors duration-300">
                  {note.name}
                </h3>
                <p className="text-xs font-sans text-brand-ivory/60 leading-relaxed font-light">
                  {note.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-rose/10 flex items-center justify-between text-[10px] tracking-widest text-brand-ivory/30 uppercase">
                <span>Phase 0{index + 1}</span>
                <span>Extract</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Chapter Note */}
        <div className="mt-20 text-center border-t border-brand-charcoal-light/60 pt-12">
          <p className="text-xs font-sans tracking-ultra text-brand-ivory/40 uppercase">
            Scroll-Triggered Scene & Ingredient Layering to be mapped in Phase II
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureContentSection;
