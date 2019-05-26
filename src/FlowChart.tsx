import React from 'react';

import {
  Wrapper,
  Node,
} from './FlowChart.style';

const FlowChart: React.FC<{
  panels: Panel[],
  selected: number,
  onNodeClick: (panel: Panel, index: number) => void,
}> = ({
  panels,
  selected,
  onNodeClick,
}) => (
  <Wrapper>
    {panels.map((panel, index) => (
      <Node
        key={index}
        isSelected={selected === index}
        onClick={() => onNodeClick(panel, index)}
      />
    ))}
  </Wrapper>
);

export default FlowChart;