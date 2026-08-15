import React from "react";

export const ProductCtaSection: React.FC = () => {
  return (
    <section
      id="product-cta"
      aria-label="Product Reservation and Acquisition"
      className="relative w-full py-24 sm:py-32 bg-[#594A45] text-[#F4ECE5]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-10">
        
        {/* Product Title */}
        <div className="space-y-4">
          <div className="inline-block text-[10px] font-sans tracking-[0.2em] uppercase text-[#D9CCC3] border border-[#D9CCC3]/30 px-4 py-1.5 mb-2">
            Limited Edition &mdash; Batch 01
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.15em] text-[#F4ECE5]">
            IVORY ROSE
          </h2>
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D9CCC3]">
            100 ML &middot; EXTRAIT DE PARFUM
          </p>
        </div>

        {/* Action Button & Waitlist Input Placeholder */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address for private allocation
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 bg-transparent border border-[#D9CCC3]/30 px-5 py-3.5 text-xs text-[#F4ECE5] placeholder:text-[#D9CCC3]/50 focus:outline-none focus:border-[#F4ECE5] transition-colors"
          />
          <button className="w-full sm:w-auto bg-[#B59A8E] hover:bg-[#C9AD9F] text-[#2C2521] px-8 py-3.5 text-xs font-sans tracking-[0.2em] uppercase transition-colors duration-300">
            RESERVE &rarr;
          </button>
        </div>

        {/* Footer info */}
        <footer className="pt-24 md:pt-32 border-t border-[#D9CCC3]/15 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans text-[#D9CCC3] gap-6">
          <p className="tracking-widest uppercase">
            &copy; {new Date().getFullYear()} CASORRO. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 tracking-widest uppercase">
            <a href="#" className="hover:text-[#F4ECE5] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#F4ECE5] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#F4ECE5] transition-colors">
              Inquiries
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ProductCtaSection;
