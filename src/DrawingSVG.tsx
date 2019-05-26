import React from 'react';

import Colors from './Colors';
import {
  SVG,
  Path,
} from './DrawingSVG.style';

const viewBoxSize = {
  width: 400,
  height: 300,
};

const Drawing: React.FC<{
  lines: LinePath,
}> = ({
  lines,
}) => {
  return (
    <SVG
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
    </SVG>
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