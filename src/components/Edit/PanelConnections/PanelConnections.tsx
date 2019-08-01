import React from 'react'

import {
  NewPannelText,
  PanelsWrapper,
  Wrapper,
} from './PanelConnections.style'

import { RoundButton } from '../../UI'
import Thumbnail from '../../Thumbnail'

const MAX_NEXT_PANELS = 2

const PanelConnections: React.FC<{
  prevPanel?: Panel;
  currentPanel: Panel;
  nextPanels: Panel[];
  onConnectionClick: (panel: Panel) => void;
  onNewPanelClick: () => void;
}> = ({
  currentPanel,
  prevPanel,
  nextPanels,
  onConnectionClick,
  onNewPanelClick,
}) => (
  <Wrapper>
    {prevPanel && (
      <PanelsWrapper>
        <RoundButton onClick={() => onConnectionClick(prevPanel)}>
          <Thumbnail src={prevPanel.dataURL} />
        </RoundButton>
      </PanelsWrapper>
    )}
    {!prevPanel && (
      <PanelsWrapper>
        <RoundButton />
      </PanelsWrapper>
    )}
    <PanelsWrapper>
      <RoundButton>
        <Thumbnail src={currentPanel.dataURL} />
      </RoundButton>
    </PanelsWrapper>
    <PanelsWrapper>
      {nextPanels.map(panel => (
        <RoundButton
          key={panel.id}
          onClick={() => onConnectionClick(panel)}
        >
          <Thumbnail src={panel.dataURL} />
        </RoundButton>
      ))}
      {
        // Generate an array of numbers from 0 to MAX_NEXT_PANELS
        Object.keys([...Array(MAX_NEXT_PANELS - nextPanels.length)])
          .map(panel => (
            <RoundButton
              key={panel}
              onClick={onNewPanelClick}
            >
              <NewPannelText>+</NewPannelText>
            </RoundButton>
          ))
      }
    </PanelsWrapper>
  </Wrapper>
)

export default PanelConnections
