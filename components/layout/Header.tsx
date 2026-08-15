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
            <img 
              src="/images/Casorro_Logo_3.webp" 
              alt="CASORRO" 
              className="h-6 sm:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80" 
            />
          </a>
        </div>

        {/* Right side is intentionally left blank as per request */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
