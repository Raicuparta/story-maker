import React, { useState, useEffect } from 'react';
import bresenham from '../bresenham';

import Colors from '../styles/colors';
import {
  Canvas,
} from '../styles/Drawing.style';

const viewBoxSize = {
  width: 100,
  height: 75,
};

const Drawing: React.FC<{
  onChange?: (dataURL: string) => void,
  dataURL: string,
}> = ({
  onChange,
  dataURL,
}) => {
    const [context, setContext] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>();
    const [points, setPoints] = useState<Point[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [prevPosition, setPrevPosition] = useState<Point>();

    useEffect(() => {
      function clearCanvas() {
        if (!context || !canvas) return;

        context.fillStyle = Colors.secondary;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      clearCanvas();

      if (points && context) {
        context.fillStyle = Colors.primary;
        for (let point of points) {
          context.fillRect(point.x, point.y, 1, 1)
        }
      } else {
        clearCanvas();
      }
    }, [context, canvas, points]);

    function relativePoint(event: React.MouseEvent | React.Touch): Point {
      const {
        width,
        height,
        left,
        top,
      } = canvas!.getBoundingClientRect();

      const viewBoxRatio = viewBoxSize.height / viewBoxSize.width;
      const boundsRatio = height / width;

      const scale = viewBoxRatio < boundsRatio
        ? width / viewBoxSize.width
        : height / viewBoxSize.height

      const offset: Point = {
        x: left,
        y: top,
      };

      if (viewBoxRatio > boundsRatio) {
        offset.x += (width - (viewBoxSize.width * scale)) / 2;
      } else {
        offset.y += (height - (viewBoxSize.height * scale)) / 2;
      }

      return {
        x: Math.floor((event.clientX - offset.x) / scale),
        y: Math.floor((event.clientY - offset.y) / scale),
      };
    }

    function setCanvasRef(instance: HTMLCanvasElement | null) {
      if (!instance || canvas || context) return;

      setCanvas(instance);
      setContext(instance.getContext('2d') || undefined);
    }

    function handleMouseMove(mouseEvent: React.MouseEvent) {
      if (!isDrawing || !canvas || !context) return;

      const position: Point = relativePoint(mouseEvent);

      setPoints(prevPoints => [
        ...prevPoints,
        ...bresenham(prevPosition || position, position),
      ]);

      setPrevPosition(position);
    }
    function handleMouseDown() {
      setIsDrawing(true);
    }
    function handleMouseUp() {
      setIsDrawing(false);
      setPrevPosition(undefined);

      if (canvas && isDrawing && onChange) {
        onChange(canvas.toDataURL());
      }
    }
    function handleMouseOut() {
      handleMouseUp();
    }
    function handleMouseEnter() {

    }

    return (
      <Canvas
        ref={setCanvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onMouseEnter={handleMouseEnter}
        width={viewBoxSize.width}
        height={viewBoxSize.height}
      />
    );
  };

export default Drawing;
