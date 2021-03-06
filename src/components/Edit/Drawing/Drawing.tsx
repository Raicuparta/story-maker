import React, {
  useEffect,
  useState,
  useContext,
} from 'react'
import { ThemeContext } from 'styled-components/macro'

import bresenham from './bresenham'
import {
  Canvas,
  DrawingImage,
  Wrapper,
} from './Drawing.style'

const viewBoxSize = {
  height: 60,
  width: 80,
}

interface Props {
  onChange: (dataURL: string) => void;
  dataURL: string;
  onPressEnd: () => void;
}

const Drawing: React.FC<Props> = ({
  onChange,
  dataURL,
  onPressEnd,
}) => {
  const [context, setContext] = useState<CanvasRenderingContext2D>()
  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  const [isDrawing, setIsDrawing] = useState(false)
  const [prevPosition, setPrevPosition] = useState<Point>()
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (!context || !canvas) {
      return
    }

    if (!dataURL) {
      context.fillStyle = theme.secondary
      context.fillRect(0, 0, canvas.width, canvas.height)

      onChange(canvas.toDataURL())
    }
    context.fillStyle = theme.primary

    // When dataURL is updated, we update the canvas with the new image.
    // But only when a new full image is being loaded, not when we are drawing.
    if (!isDrawing) {
      const image = new Image()
      image.onload = () => context.drawImage(image, 0, 0)
      image.src = dataURL
    }
  }, [context, canvas, dataURL, isDrawing, onChange, theme])

  function relativePoint (event: React.MouseEvent | React.Touch): Point {
    if (!canvas) {
      return { x: 0, y: 0 }
    }

    const {
      width,
      height,
      left,
      top,
    } = canvas.getBoundingClientRect()

    const viewBoxRatio = viewBoxSize.height / viewBoxSize.width
    const boundsRatio = height / width

    const scale = viewBoxRatio < boundsRatio
      ? width / viewBoxSize.width
      : height / viewBoxSize.height

    const offset: Point = {
      x: left,
      y: top,
    }

    if (viewBoxRatio > boundsRatio) {
      offset.x += (width - (viewBoxSize.width * scale)) / 2
    } else {
      offset.y += (height - (viewBoxSize.height * scale)) / 2
    }

    return {
      x: Math.floor((event.clientX - offset.x) / scale),
      y: Math.floor((event.clientY - offset.y) / scale),
    }
  }

  function setCanvasRef (instance: HTMLCanvasElement | null) {
    if (!instance || canvas || context) { return }

    setCanvas(instance)
    setContext(instance.getContext('2d') || undefined)
  }

  function draw (event: React.MouseEvent | React.Touch) {
    if (!context || !canvas) { return }

    const position: Point = relativePoint(event)
    const line = bresenham(prevPosition || position, position)

    for (const point of line) {
      context.fillRect(point.x, point.y, 1, 1)
    }

    onChange(canvas.toDataURL())

    setPrevPosition(position)
  }

  function handleMouseMove (mouseEvent: React.MouseEvent) {
    if (isDrawing) {
      draw(mouseEvent)
    }
  }

  function handleTouchMove (touchEvent: React.TouchEvent) {
    draw(touchEvent.touches[0])
  }

  function startDrawing () {
    setIsDrawing(true)
  }

  function stopDrawing () {
    setIsDrawing(false)
    setPrevPosition(undefined)
    onPressEnd()
  }

  function handleMouseDown (mouseEvent: React.MouseEvent) {
    startDrawing()
    draw(mouseEvent)
  }

  function handleTouchStart (touchEvent: React.TouchEvent) {
    startDrawing()
    draw(touchEvent.touches[0])
  }

  return (
    <Wrapper>
      {dataURL && (
        <DrawingImage src={dataURL} />
      )}
      <Canvas
        ref={setCanvasRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDrawing}
        onTouchEnd={stopDrawing}
        onMouseOut={stopDrawing}
        width={viewBoxSize.width}
        height={viewBoxSize.height}
      />
    </Wrapper>
  )
}

export default Drawing
