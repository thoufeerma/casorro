export interface ChapterInfo {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

export interface FragranceNote {
  category: 'Top' | 'Heart' | 'Base';
  name: string;
  description: string;
}

export interface FrameConfigPlaceholder {
  desktopPath: string;
  mobilePath: string;
  totalFrames?: number;
}
