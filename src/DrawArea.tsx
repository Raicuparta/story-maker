import React, { useRef, useState, useEffect } from 'react';

import Drawing from './Drawing';
import { Wrapper } from './DrawArea.style';

const DrawArea: React.FC<{
  lines: LinePath,
  onChange: (lines: LinePath) => void,
}> = ({
  lines,
  onChange,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const drawingRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(point: Point) {
    onChange(lines.concat([[point]]))
    setIsDrawing(true);
  }

  function handleMouseMove(point: Point) {
    if (!isDrawing) return;

    onChange([
      ...lines.slice(0, lines.length - 1),
      lines[lines.length - 1].concat([point]),
    ]);
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
