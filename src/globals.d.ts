type Point = {
  x: number;
  y: number;
}

type Line = Point[]

type LinePath = Line[]

type Panel = {
  drawing: string;
  text: string;
  nextIds: number[];
  prevId?: number;
}

type Bounds = {
  width: number;
  height: number;
  top: number;
  left: number;
}

type SerializedPanel = {
  drawing: string;
  choices: string;
  text: string;
  nextIds: string;
}

type SerializedData = {
  panels: SerializedPanel[];
}
