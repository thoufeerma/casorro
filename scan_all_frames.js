const fs = require('fs');
const path = require('path');

const clips = ['clip1', 'clip2', 'clip3'];
const chapters = [
  { id: 'origin', number: 'I', title: 'THE ORIGIN', subtitle: 'A cinematic journey into the heart of luxury.' },
  { id: 'bottle', number: 'II', title: 'THE CRAFT', subtitle: 'Precision engineered glass, adorned in rose gold' },
  { id: 'essence', number: 'III', title: 'THE ESSENCE', subtitle: 'Pure warmth of champagne amber and pink pepper' }
];

let globalIndex = 0;
let sequence = [];
let phases = [];

clips.forEach((clip, i) => {
  const dir = path.join('public/frames', clip);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.webp')).sort();
  
  const startIndex = globalIndex;
  files.forEach(f => {
    sequence.push('/frames/' + clip + '/' + f);
  });
  globalIndex += files.length;
  
  phases.push({
    phaseFolder: clip,
    chapter: chapters[i],
    startIndex,
    endIndex: globalIndex - 1,
    count: files.length
  });
});

const content = `// Auto-generated frames manifest for clip1 through clip3
export interface FramePhaseRange {
  phaseFolder: string;
  chapter: {
    id: string;
    number: string;
    title: string;
    subtitle: string;
  };
  startIndex: number;
  endIndex: number;
  count: number;
}

export const FRAME_SEQUENCE: string[] = [
  ${sequence.map(s => '"' + s + '"').join(',\n  ')}
];

export const PHASE_RANGES: FramePhaseRange[] = ${JSON.stringify(phases, null, 2)};

export const TOTAL_FRAMES = ${globalIndex};
`;

fs.writeFileSync('lib/framesManifest.ts', content);
console.log('Manifest written! Total frames:', globalIndex);
console.log('Phases:', JSON.stringify(phases, null, 2));
