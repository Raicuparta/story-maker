interface Point {
  x: number;
  y: number;
}

interface Panel {
  dataURL: string;
  text: string;
  nextIds: number[];
  prevId?: number;
  id: number;
}

interface Story {
  panels: Panel[];
}

interface SerializedPanel {
  dataURL: string;
  text: string;
  nextIds: string;
  prevId?: number;
  id: number;
}

interface SerializedStory {
  panels: SerializedPanel[];
}

interface Bounds {
  width: number;
  height: number;
  top: number;
  left: number;
}

// Prevent auto import of console
declare module 'console' {
  export = typeof import('console');
}
