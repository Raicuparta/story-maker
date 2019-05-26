import React from 'react';

import {
  Wrapper,
  DrawingSVG,
  Path,
} from './Drawing.style';

const Drawing: React.FC<{
  onMouseDown?: (mouseEvent: React.MouseEvent) => void,
  onMouseMove?: (mouseEvent: React.MouseEvent) => void,
  drawingRef?: React.RefObject<HTMLDivElement>,
  lines: LinePath,
}> = ({
  onMouseDown,
  onMouseMove,
  lines,
  drawingRef,
}) => (
  <Wrapper
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
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