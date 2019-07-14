type Point = {
  x: number;
  y: number;
}

type Panel = {
  dataURL: string;
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
  dataURL: string;
  text: string;
  nextIds: string;
  prevId?: number;
  id: number;
}

type SerializedData = {
  panels: SerializedPanel[];
}

// Prevent auto import of console
declare module 'console' {
  export = typeof import("console");
}
