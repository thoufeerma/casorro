import React from "react";
import Button from "@/components/ui/Button";
import { BRAND_NAME, FRAGRANCE_NAME } from "@/lib/constants";

export const ProductCtaSection: React.FC = () => {
  return (
    <section
      id="product-cta"
      aria-label="Product Reservation and Acquisition"
      className="relative w-full py-28 sm:py-36 md:py-48 bg-brand-charcoal-deep text-brand-ivory"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-10">
        {/* Subtle Brand Insignia */}
        <div className="inline-block text-[10px] font-sans tracking-ultra uppercase text-brand-rose border border-brand-rose/20 px-4 py-1.5">
          Limited Edition Batch 01
        </div>

        {/* Product Title */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-brand-ivory">
            {BRAND_NAME}
          </h2>
          <p className="font-serif text-xl sm:text-2xl font-light italic text-brand-champagne/90">
            {FRAGRANCE_NAME} &mdash; 100ml Extrait de Parfum
          </p>
        </div>

        {/* Editorial description */}
        <p className="text-xs sm:text-sm font-sans text-brand-ivory/60 max-w-lg mx-auto leading-relaxed font-light">
          Each bottle is hand-numbered and sealed in smoked glass with handcrafted rose gold detail. Experience the unveiling before public release.
        </p>

        {/* Action Button & Waitlist Input Placeholder */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address for private allocation
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 bg-brand-charcoal border border-brand-rose/30 px-5 py-3.5 text-xs text-brand-ivory placeholder:text-brand-ivory/30 focus:outline-none focus:border-brand-rose transition-colors"
          />
          <Button variant="primary" className="w-full sm:w-auto">
            Reserve
          </Button>
        </div>

        {/* Footer info */}
        <footer className="pt-20 border-t border-brand-charcoal-light/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-brand-ivory/40 gap-4">
          <p className="tracking-widest">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 tracking-widest uppercase">
            <a href="#" className="hover:text-brand-ivory transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-ivory transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-ivory transition-colors">
              Inquiries
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ProductCtaSection;
