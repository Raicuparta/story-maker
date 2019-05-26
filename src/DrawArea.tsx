import React, { useRef, useState, useEffect } from 'react';

import {
  Path,
  DrawingSVG,
  Wrapper,
} from './DrawArea.style';

const DrawArea: React.FC<{
  lines: LinePath,
  onChange: (lines: LinePath) => void,
}> = ({
  lines,
  onChange,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const drawArea = useRef<HTMLDivElement>(null);

  function relativeCoordinatesForEvent(mouseEvent: React.MouseEvent) : Point {
    const boundingRect = drawArea.current!.getBoundingClientRect();
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
    <Wrapper
      ref={drawArea}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <DrawingSVG>
        {lines.map((line, index) => (
          <DrawingLine key={index} line={line} />
        ))}
      </DrawingSVG>
    </Wrapper>
  );
}

const DrawingLine: React.FC<{ line: Line }> = ({ line }) => {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.x} ${p.y}`;
      })
      .join(" L ");

  return <Path d={pathData} />;
}

export default DrawArea;
