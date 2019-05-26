import React from 'react';

import {
  Wrapper,
  DrawingSVG,
  Path,
} from './Drawing.style';

const Drawing: React.FC<{
  onMouseDown?: (point: Point) => void,
  onMouseMove?: (point: Point) => void,
  drawingRef?: React.RefObject<HTMLDivElement>,
  lines: LinePath,
}> = ({
  onMouseDown,
  onMouseMove,
  lines,
  drawingRef,
}) => {
  function handleMouseDown(mouseEvent: React.MouseEvent) {
    mouseEvent.preventDefault();
    mouseEvent.button === 0 && onMouseDown!(relativePoint(mouseEvent));
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    mouseEvent.preventDefault();
    onMouseMove!(relativePoint(mouseEvent));
  }

  function handleTouchStart(touchEvent: React.TouchEvent) {
    touchEvent.preventDefault();
    onMouseDown!(relativePoint(touchEvent.touches[0]));
  }

  function handleTouchMove(touchEvent: React.TouchEvent) {
    touchEvent.preventDefault();
    onMouseMove!(relativePoint(touchEvent.touches[0]));
  }

  function relativePoint(event: React.MouseEvent | React.Touch) : Point {
    const boundingRect = drawingRef!.current!.getBoundingClientRect();
    return {
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    };
  }

  return (
    <Wrapper
      onMouseDown={onMouseDown && handleMouseDown}
      onMouseMove={onMouseMove && handleMouseMove}
      onTouchStart={onMouseDown && handleTouchStart}
      onTouchMove={onMouseMove && handleTouchMove}
      ref={drawingRef}
    >
      <DrawingSVG>
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