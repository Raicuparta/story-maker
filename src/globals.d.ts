type Point = {
  x: number;
  y: number;
}

type Panel = {
  drawing: Bitmap;
  text: string;
  nextIds: number[];
  prevId?: number;
  id: number;
}

type Bounds = {
  width: number;
  height: number;
  top: number;
  left: number;
}

type SerializedPanel = {
  drawing: string;
  text: string;
  nextIds: string;
  prevId?: number;
  id: number;
}

type SerializedData = {
  panels: SerializedPanel[];
}

type Bitmap = (0 | 1)[][];

// Prevent auto import of console
declare module 'console' {
  export = typeof import("console");
}
