import { ChapterInfo, FragranceNote } from "./types";

export const BRAND_NAME = "CASORRO";
export const FRAGRANCE_NAME = "IVORY ROSE";

export const INITIAL_CHAPTER: ChapterInfo = {
  id: "approach",
  number: "I",
  title: "THE APPROACH",
  subtitle: "First impression & subtle air of Damask petal",
};

export const CHAPTERS: ChapterInfo[] = [
  INITIAL_CHAPTER,
  {
    id: "bloom",
    number: "II",
    title: "THE BLOOM",
    subtitle: "Unveiling the velvety heart of Ivory Rose",
  },
  {
    id: "essence",
    number: "III",
    title: "THE ESSENCE",
    subtitle: "Pure warmth of champagne amber and pink pepper",
  },
  {
    id: "impression",
    number: "IV",
    title: "THE IMPRESSION",
    subtitle: "The lingering silhouette of dark sandalwood",
  },
];

export const FRAGRANCE_NOTES: FragranceNote[] = [
  {
    category: "Top",
    name: "Pink Pepper & Champagne Air",
    description: "An intoxicating crispness that sparks upon first contact.",
  },
  {
    category: "Heart",
    name: "Velvet Ivory Rose & White Amber",
    description: "Subtle, ethereal floral layers resting upon liquid warmth.",
  },
  {
    category: "Base",
    name: "Deep Sandalwood & Muted Musk",
    description: "An enduring, sensual trail that lingers close to skin.",
  },
];

export const FRAME_PATHS = {
  desktop: "/frames/desktop",
  mobile: "/frames/mobile",
};
