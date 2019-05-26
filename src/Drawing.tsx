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
    if (mouseEvent.button !== 0) {
      return;
    }

    onMouseDown!(relativeCoordinatesForEvent(mouseEvent));
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    onMouseMove!(relativeCoordinatesForEvent(mouseEvent));
  }

  function relativeCoordinatesForEvent(mouseEvent: React.MouseEvent) : Point {
    const boundingRect = drawingRef!.current!.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    };
  }

  return (
    <Wrapper
      onMouseDown={onMouseDown && handleMouseDown}
      onMouseMove={onMouseMove && handleMouseMove}
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