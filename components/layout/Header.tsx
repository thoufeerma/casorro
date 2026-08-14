import React from "react";
import { BRAND_NAME, INITIAL_CHAPTER } from "@/lib/constants";
import { ChapterInfo } from "@/lib/types";

interface HeaderProps {
  activeChapter?: ChapterInfo;
}

export const Header: React.FC<HeaderProps> = ({
  activeChapter = INITIAL_CHAPTER,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-6 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand editorial identity */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-rose"
            aria-label={`${BRAND_NAME} Home`}
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-light tracking-widest text-brand-ivory group-hover:text-brand-rose transition-colors duration-300">
              {BRAND_NAME}
            </span>
          </a>
        </div>

        {/* Right: Dynamic chapter indicator controlled by cinematic scroll */}
        <div className="pointer-events-auto flex items-center">
          <div className="flex items-center gap-2 text-xs font-sans tracking-ultra uppercase text-brand-ivory/70 border-l border-brand-rose/20 pl-4 py-0.5 transition-all duration-300">
            <span className="text-brand-rose font-medium min-w-[1.2rem] text-right">
              {activeChapter.number}
            </span>
            <span className="text-brand-ivory/40">&mdash;</span>
            <span className="text-brand-ivory/90 font-light tracking-widest transition-opacity duration-300">
              {activeChapter.title}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
