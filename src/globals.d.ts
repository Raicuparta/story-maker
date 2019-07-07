type Point = {
  x: number;
  y: number;
}

type Panel = {
  drawing: string;
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
