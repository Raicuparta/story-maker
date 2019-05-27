type Point = {
  x: number;
  y: number;
}

type Line = Point[]

type LinePath = Line[]

type Panel = {
  drawing: LinePath;
  text: string;
  nextId?: number;
  choices?: Choice[];
}

type Choice = {
  id: number;
}