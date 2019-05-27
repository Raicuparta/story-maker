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

  const PanelNode: React.FC<{
    panel: Panel,
    index: number,
  }> = ({ panel, index }) => (
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
        <PanelNode
          panel={panels[panel.nextId]}
          index={panel.nextId}
        />
      )}
      {panel.choice && (
        <NodeFork>
          <PanelNode
            panel={panels[panel.choice.idA]}
            index={panel.choice.idA}
          />
          <PanelNode
            panel={panels[panel.choice.idB]}
            index={panel.choice.idB}
          />
        </NodeFork>
      )}
    </NodeRow>
  );

  return (
    <Wrapper>
      <PanelNode
        panel={panels[0]}
        index={0}
      />
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