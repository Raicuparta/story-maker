import React, {
  useEffect,
  useState,
} from 'react';
import bresenham from '../bresenham';

import Colors from '../styles/colors';
import {
  Canvas,
  DrawingImage,
  Wrapper,
} from '../styles/Drawing.style';

const viewBoxSize = {
  height: 60,
  width: 80,
};

interface Props {
  onChange: (dataURL: string) => void;
  dataURL: string;
}

const Drawing: React.FC<Props> = ({
  onChange,
  dataURL,
}): React.ReactElement<Props> => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState<Point>();

  useEffect((): void => {
    if (!context || !canvas) {
      return;
    }

    if (!dataURL) {
      context.fillStyle = Colors.secondary;
      context.fillRect(0, 0, canvas.width, canvas.height);

      onChange(canvas.toDataURL());
    }
    context.fillStyle = Colors.primary;

    // When dataURL is updated, we update the canvas with the new image.
    // But only when a new full image is being loaded, not when we are drawing.
    if (!isDrawing) {
      const image = new Image();
      image.onload = (): void => context.drawImage(image, 0, 0);
      image.src = dataURL;
    }
  }, [context, canvas, dataURL, isDrawing, onChange]);

  function relativePoint(event: React.MouseEvent | React.Touch): Point {
    if (!canvas) {
      return { x: 0, y: 0};
    }

    const {
      width,
      height,
      left,
      top,
    } = canvas.getBoundingClientRect();

    const viewBoxRatio = viewBoxSize.height / viewBoxSize.width;
    const boundsRatio = height / width;

    const scale = viewBoxRatio < boundsRatio
      ? width / viewBoxSize.width
      : height / viewBoxSize.height;

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

  function setCanvasRef(instance: HTMLCanvasElement | null): void {
    if (!instance || canvas || context) { return; }

    setCanvas(instance);
    setContext(instance.getContext('2d') || undefined);
  }

  function draw(event: React.MouseEvent | React.Touch): void {
    if (!context || !canvas) { return; }

    const position: Point = relativePoint(event);
    const line = bresenham(prevPosition || position, position);

    for (const point of line) {
      context.fillRect(point.x, point.y, 1, 1);
    }

    onChange(canvas.toDataURL());

    setPrevPosition(position);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent): void {
    if (isDrawing) {
      draw(mouseEvent);
    }
  }

  function handleTouchMove(touchEvent: React.TouchEvent): void {
    draw(touchEvent.touches[0]);
  }

  function startDrawing(): void {
    setIsDrawing(true);
  }

  function stopDrawing(): void {
    setIsDrawing(false);
    setPrevPosition(undefined);
  }

  function handleMouseDown(mouseEvent: React.MouseEvent): void {
    startDrawing();
    draw(mouseEvent);
  }

  function handleTouchStart(touchEvent: React.TouchEvent): void {
    startDrawing();
    draw(touchEvent.touches[0]);
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
  );
};

export default Drawing;
