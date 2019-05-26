import React, { useRef } from 'react';

import Drawing from './Drawing';
import { Wrapper } from './DrawArea.style';

const DrawArea: React.FC<{
  lines: LinePath,
  onChange: (lines: LinePath) => void,
}> = ({
  lines,
  onChange,
}) => {
  const drawingRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(point: Point) {
    onChange(lines.concat([[point]]))
  }

  function handleMouseMove(point: Point) {
    onChange([
      ...lines.slice(0, lines.length - 1),
      lines[lines.length - 1].concat([point]),
    ]);
  }

  return (
    <Wrapper>
      <Drawing
        drawingRef={drawingRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        lines={lines}
      />
    </Wrapper>

  );
}

export default DrawArea;
