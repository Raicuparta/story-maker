import React, { useState, useEffect } from 'react';

import Colors from '../styles/colors';
import {
  Canvas,
} from '../styles/Drawing.style';

const viewBoxSize = {
  width: 400,
  height: 300,
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
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState<Point>();

  useEffect(() => {
    function clearCanvas() {
      if (!context || !canvas) return;

      context.fillStyle = Colors.secondary;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (dataURL && context) {
      const image = new Image();
      image.onload = () => {
        clearCanvas();
        context.drawImage(image, 0, 0);
      };
      image.src = dataURL;
    } else {
      clearCanvas();
    }
  }, [context, canvas, dataURL]);

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
    if (!instance || canvas || context) return;

    setCanvas(instance);
    setContext(instance.getContext('2d') || undefined);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    if (!isDrawing || !canvas || !context) return;

    const position: Point = relativePoint(mouseEvent);

    // OK hear me out.
    // There's a bug in Chrome that makes canvas fail to update if the updated
    // area is outside the canvas' original bounds, without taking into account
    // the resizing / translation done by css property content-fit: contain.
    // So I need to update this extra point in the origin, to make sure the
    // canvas always refreshes as it should.
    context.fillRect(0, 0, 1, 1);

    context.beginPath();
    context.moveTo((prevPosition || position).x, (prevPosition || position).y);
    context.lineTo(position.x, position.y);
    context.strokeStyle = Colors.primaryVariant;
    context.lineWidth = 1;
    context.stroke();

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
