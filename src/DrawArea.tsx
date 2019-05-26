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

  function relativeCoordinatesForEvent(mouseEvent: React.MouseEvent) : Point {
    const boundingRect = drawingRef.current!.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    };
  }

  function handleMouseDown(mouseEvent: React.MouseEvent) {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = relativeCoordinatesForEvent(mouseEvent);

    onChange(lines.concat([[point]]))
    setIsDrawing(true);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    if (!isDrawing) return;

    const point = relativeCoordinatesForEvent(mouseEvent);
    
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
