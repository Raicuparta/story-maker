import React, { useState, useEffect } from 'react';

import Colors from './Colors';
import {
  Wrapper,
  DrawingSVG,
  Path,
} from './Drawing.style';

const viewBoxSize = {
  width: 400,
  height: 300,
};

const Drawing: React.FC<{
  onMouseDown?: (point: Point) => void,
  onMouseMove?: (point: Point) => void,
  drawingRef?: React.RefObject<HTMLDivElement>,
  isDrawing?: boolean,
  lines: LinePath,
}> = ({
  onMouseDown,
  onMouseMove,
  lines,
  drawingRef,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);

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
  });

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
    
    if (width > height) {
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
      <DrawingSVG
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="100%" height="100%" fill={Colors.secondary}/>
        {lines.map((line, index) => (
          <DrawingLine
            key={index}
            line={line}
          />
        ))}
      </DrawingSVG>
    </Wrapper>
  );
};

const DrawingLine: React.FC<{ line: Line }> = ({ line }) => {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.x} ${p.y}`;
      })
      .join(" L ");

  return <Path d={pathData} />;
}
export default Drawing;