import React from 'react';

import {
  Wrapper,
  Node,
} from './FlowChart.style';

const FlowChart: React.FC<{
  panels: Panel[],
}> = ({ panels }) => (
  <Wrapper>
    {panels.map((panel, index) => (
      <Node key={index} />
    ))}
  </Wrapper>
);

export default FlowChart;