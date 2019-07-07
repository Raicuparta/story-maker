import React, { useState, useEffect } from 'react';

import Colors from './Colors';
import {
  Wrapper,
} from './Canvas.style';

const viewBoxSize = {
  width: 400,
  height: 300,
};

const Canvas: React.FC<{
  points?: Point[],
}> = ({
  points,
}) => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState<Point>();

  useEffect(() => {
    if (!context || !canvas) return;

    context.fillStyle = Colors.secondary;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [context, canvas]);

  function relativePoint(event: React.MouseEvent | React.Touch) : Point {
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

    const offset = {
      x: 0,
      y: 0,
    };

    if (viewBoxRatio > boundsRatio) {
      offset.x += (width - (viewBoxSize.width * scale)) / 2;
    } else {
      offset.y += (height - (viewBoxSize.height * scale)) / 2;
    }

    return {
      x: (event.clientX - offset.x) / scale - left,
      y: (event.clientY - offset.y) / scale - top,
    };
  }

  function setCanvasRef(instance: HTMLCanvasElement | null) {
    if (!instance) return;

    setCanvas(instance);
    setContext(instance.getContext('2d') || undefined);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    if (!isDrawing || !canvas || !context) return;

    const position: Point = relativePoint(mouseEvent);

    context.moveTo((prevPosition || position).x, (prevPosition || position).y);
    context.lineTo(position.x, position.y);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.filter = 'url(#remove-alpha)';
    context.stroke();

    setPrevPosition(position);
  }
  function handleMouseDown() {
    setIsDrawing(true);
  }
  function handleMouseUp() {
    setIsDrawing(false);
    setPrevPosition(undefined);
  }
  function handleMouseOut() {
    setIsDrawing(false);
  }
  function handleMouseEnter() {

  }

  return (
    <>
    <svg width="0" height="0">
      <defs>
        <filter id="remove-alpha" x="0" y="0" width="100%" height="100%">
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
          </filter>
      </defs>
    </svg>
    <Wrapper
      ref={setCanvasRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseOut}
      onMouseEnter={handleMouseEnter}
      width={viewBoxSize.width}
      height={viewBoxSize.height}
    />
    </>
  );
};

export default Canvas;
