import React, { useRef, useState, useEffect } from 'react';

import './DrawArea.css';

type Point = {
  x: number;
  y: number;
}

const DrawArea: React.FC = () => {
  const [lines, setLines] = useState<Point[][]>([]);
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

    setLines(lines.concat([[point]]));
    setIsDrawing(true);
  }

  function handleMouseMove(mouseEvent: React.MouseEvent) {
    if (!isDrawing) return;

    const point = relativeCoordinatesForEvent(mouseEvent);
    
    setLines([
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
    <div
      className="drawArea"
      ref={drawArea}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <Drawing lines={lines} />
    </div>
  );
}

const Drawing: React.FC<{ lines: Point[][] }> = ({ lines }) => {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

const DrawingLine: React.FC<{ line: Point[] }> = ({ line }) => {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.x} ${p.y}`;
      })
      .join(" L ");

  return <path className="path" d={pathData} />;
}

export default DrawArea;
