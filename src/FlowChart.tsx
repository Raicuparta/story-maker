import React, { useState, useCallback } from 'react';
import { hot } from 'react-hot-loader'

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
  const [hoverId, setHoverIndex] = useState<number>(-1);
  const [bounds, setBounds] = useState<Bounds>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const wrapperRef = useCallback((node: HTMLDivElement) => {
    if (node === null) return;
    const { width, height, top, left } = node.getBoundingClientRect();
    setBounds({ width, height, top, left });
  }, []);

  const PanelNode: React.FC<{
    id: number,
    position: { x: number, y: number },
    depth: number,
  }> = ({
    id,
    position,
    depth,
  }) => {
    const panel = panels[id];

    const xBranchOffset = bounds.width / depth**2;

    return (
      <NodeRow>
        <Node
          style={({
            position: 'absolute',
            top: `${position.y}px`,
            left: `${bounds.width / 2 + position.x}px`,
          })}
          isSelected={selected === id}
          onClick={() => onNodeClick(panel, id)}
          onMouseEnter={() => setHoverIndex(id)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          {hoverId === id && selected !== id && (
            <PanelPreview panel={panel} />
          )}
        </Node>
        {panel.nextId && (
          <PanelNode
            id={panel.nextId}
            position={{
              x: position.x,
              y: position.y + 40,
            }}
            depth={depth}
          />
        )}
        {panel.choices && (
          <NodeFork>
            {panel.choices.map((choice, index) => (
              <PanelNode
                key={choice.id}
                id={choice.id}
                position={{
                  x: position.x - xBranchOffset + (2 * xBranchOffset * index) ,
                  y: position.y + 40,
                }}
                depth={depth + 1}
              />
            ))}
          </NodeFork>
        )}
      </NodeRow>
    )
  };

  return (
    <Wrapper ref={wrapperRef}>
      <PanelNode
        id={0}
        depth={2}
        position={({ x: 0, y: 10 })}
      />
    </Wrapper>
  )
};

const PanelPreview: React.FC<{
  panel: Panel,
}> = ({ panel }) => (
  <Preview>
    <TextPreview>{panel.text}</TextPreview>
  </Preview>
);

export default hot(module)(FlowChart);
