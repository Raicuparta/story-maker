import React, { useState } from 'react';

import DrawingSVG from './DrawingSVG';
import {
  Wrapper,
  Node,
  TextPreview,
  Preview,
} from './FlowChart.style';

const FlowChart: React.FC<{
  panels: Panel[],
  selected: number,
  onNodeClick: (panel: Panel, index: number) => void,
}> = ({
  panels,
  selected,
  onNodeClick,
}) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  return (
    <Wrapper>
      {panels.map((panel, index) => (
        <React.Fragment key={index}>
          <Node
            isSelected={selected === index}
            onClick={() => onNodeClick(panel, index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            {hoverIndex === index && selected !== index && (
              <PanelPreview panel={panel} />
            )}
          </Node>
        </React.Fragment>
      ))}
    </Wrapper>
  )
};

const PanelPreview: React.FC<{
  panel: Panel,
}> = ({ panel }) => (
  <Preview>
    <DrawingSVG lines={panel.drawing}/>
    <TextPreview>{panel.text}</TextPreview>
  </Preview>
);

export default FlowChart;