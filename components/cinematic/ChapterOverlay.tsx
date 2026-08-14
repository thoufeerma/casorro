import React from "react";
import { FramePhaseRange } from "@/lib/framesManifest";

interface ChapterOverlayProps {
  currentPhase: FramePhaseRange;
  currentFrame: number;
  totalFrames: number;
}

export const ChapterOverlay: React.FC<ChapterOverlayProps> = ({
  currentPhase,
  currentFrame,
  totalFrames,
}) => {
  const { chapter } = currentPhase;

  // Calculate relative progress inside current clip (0 to 1)
  const phaseLength = currentPhase.endIndex - currentPhase.startIndex + 1;
  const phaseProgress = (currentFrame - currentPhase.startIndex) / Math.max(1, phaseLength);

  // Soft fade in at clip start, full opacity in middle, soft fade out near clip end
  let opacity = 1;
  if (phaseProgress < 0.12) {
    opacity = phaseProgress / 0.12;
  } else if (phaseProgress > 0.88) {
    opacity = (1 - phaseProgress) / 0.12;
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-12 lg:p-16 transition-opacity duration-500"
      style={{ opacity: Math.max(0.15, opacity) }}
    >
      {/* Top watermark / brand indicator */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-sans tracking-ultra uppercase text-brand-ivory/40">
          CASORRO &mdash; IVORY ROSE
        </span>
        <span className="text-[10px] font-sans tracking-widest text-brand-rose/70 uppercase">
          Frame {currentFrame + 1} / {totalFrames}
        </span>
      </div>

      {/* Main Chapter Headline & Subtitle */}
      <div className="max-w-xl space-y-3 my-auto pl-4 border-l border-brand-rose/30">
        <div className="flex items-center gap-3">
          <span className="text-xs font-sans tracking-ultra uppercase text-brand-rose font-medium">
            Chapter {chapter.number}
          </span>
          <span className="w-8 h-[1px] bg-brand-rose/40" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest text-brand-ivory drop-shadow-md leading-tight">
          {chapter.title}
        </h2>

        <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light tracking-wide max-w-md">
          {chapter.subtitle}
        </p>
      </div>

      {/* Bottom chapter progress indicator (3 clips) */}
      <div className="flex items-center justify-between border-t border-brand-ivory/10 pt-4">
        <div className="text-[10px] font-sans tracking-ultra text-brand-ivory/40 uppercase">
          Scroll to navigate chapters
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-300 ${
                chapter.number === getRomanNumeral(i + 1)
                  ? "w-8 bg-brand-rose"
                  : "w-2.5 bg-brand-ivory/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getRomanNumeral(num: number): string {
  const map: Record<number, string> = {
    1: "I", 2: "II", 3: "III"
  };
  return map[num] || `${num}`;
}

export default ChapterOverlay;
