interface Point {
  x: number
  y: number
}

interface Panel {
  dataURL: string
  text: string
  nextIds: number[]
  prevId?: number
  id: number
}

interface Story {
  title: string
  panels: Panel[]
  id: string
}

interface Bounds {
  width: number
  height: number
  top: number
  left: number
}

// Prevent auto import of console
declare module 'console' {
  export = typeof import('console')
}
