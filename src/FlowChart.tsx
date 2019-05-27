import React, { useState } from 'react';

import DrawingSVG from './DrawingSVG';
import {
  Wrapper,
  Node,
  TextPreview,
  Preview,
  NodeRow,
  NodeFork,
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

  const PanelNode: React.FC<{id: number,}> = ({ id: index }) => {
    const panel = panels[index];
    return (
      <NodeRow>
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
        {panel.nextId && (
          <PanelNode id={panel.nextId} />
        )}
        {panel.choices && (
          <NodeFork>
            {panel.choices.map(choice => (
              <PanelNode id={choice.id} />
            ))}
          </NodeFork>
        )}
      </NodeRow>
    )
  };

  return (
    <Wrapper>
      <PanelNode id={0} />
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