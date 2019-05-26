import React from 'react';

import Drawing from './Drawing';
import { Wrapper } from './DrawArea.style';

const DrawArea: React.FC<{
  lines: LinePath,
  onChange: (lines: LinePath) => void,
}> = ({
  lines,
  onChange,
}) => {
  function handleInputDown(point: Point) {
    onChange(lines.concat([[point]]))
  }

  function handleInputMove(point: Point) {
    onChange([
      ...lines.slice(0, lines.length - 1),
      lines[lines.length - 1].concat([point]),
    ]);
  }

  return (
    <Wrapper>
      <Drawing
        onInputDown={handleInputDown}
        onInputMove={handleInputMove}
        lines={lines}
      />
    </Wrapper>

  );
}

export default DrawArea;
