import React, { useState, useEffect, useRef } from 'react';

import DrawingSVG from './DrawingSVG';
import { Wrapper } from './Drawing.style';

const viewBoxSize = {
  width: 400,
  height: 300,
};

const Drawing: React.FC<{
  onInputDown?: (point: Point) => void,
  onInputMove?: (point: Point) => void,
  isDrawing?: boolean,
  lines: LinePath,
}> = ({
  onInputDown: onMouseDown,
  onInputMove: onMouseMove,
  lines,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const drawingRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(mouseEvent: React.MouseEvent) {
    mouseEvent.preventDefault();
    setIsDrawing(true);
    mouseEvent.button === 0 && onMouseDown!(relativePoint(mouseEvent));
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    mouseEvent.preventDefault();
    onMouseMove!(relativePoint(mouseEvent));
  }

  function handleTouchStart(touchEvent: React.TouchEvent) {
    touchEvent.preventDefault();
    setIsDrawing(true);
    onMouseDown!(relativePoint(touchEvent.touches[0]));
  }

  function handleTouchMove(touchEvent: React.TouchEvent) {
    touchEvent.preventDefault();
    onMouseMove!(relativePoint(touchEvent.touches[0]));
  }

  function handleMouseUp() {
    setIsDrawing(false);
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  function relativePoint(event: React.MouseEvent | React.Touch) : Point {
    const {
      width,
      height,
      left,
      top,
    } = drawingRef!.current!.getBoundingClientRect();

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

  const downCallbacks = (onMouseDown && onMouseMove) ? {
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
  } : {};
  
  const moveCallbacks = (isDrawing && onMouseDown && onMouseMove) ? {
    onMouseMove: handleMouseMove,
    onTouchMove: handleTouchMove,
  } : {}

  return (
    <Wrapper
      {...downCallbacks}
      {...moveCallbacks}
      ref={drawingRef}
    >
      <DrawingSVG lines={lines} />
    </Wrapper>
  );
};

export default Drawing;