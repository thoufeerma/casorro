"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import CinematicSection from "@/components/cinematic/CinematicSection";
import FutureContentSection from "@/components/content/FutureContentSection";
import ProductCtaSection from "@/components/product/ProductCtaSection";
import { INITIAL_CHAPTER } from "@/lib/constants";
import { ChapterInfo } from "@/lib/types";

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<ChapterInfo>(INITIAL_CHAPTER);

  return (
    <main className="relative min-h-screen bg-brand-charcoal-deep text-brand-ivory">
      {/* Fixed Luxury Navigation Syncing Dynamic Chapter */}
      <Header activeChapter={activeChapter} />

      {/* Cinematic Frame Animation Experience */}
      <CinematicSection onChapterChange={setActiveChapter} />

      {/* Fragrance Narrative Section */}
      <FutureContentSection />

      {/* Product Reservation & Footer */}
      <ProductCtaSection />
    </main>
  );
}
