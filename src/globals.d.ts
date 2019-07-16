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

interface Bounds {
  width: number;
  height: number;
  top: number;
  left: number;
}

interface SerializedPanel {
  dataURL: string;
  text: string;
  nextIds: string;
  prevId?: number;
  id: number;
}

interface SerializedData {
  panels: SerializedPanel[];
}

// Prevent auto import of console
declare module "console" {
  export = typeof import("console");
}
