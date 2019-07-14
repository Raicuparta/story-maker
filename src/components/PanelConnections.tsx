import React from 'react';

import {
  NewPannelText,
  Wrapper,
  PanelsWrapper,
} from '../styles/PanelConnections.style'
import Thumbnail from './Thumbnail';
import { RoundButton } from '../styles/UI.style';

const PanelConnections: React.FC<{
  prevPanel?: Panel,
  currentPanel: Panel,
  nextPanels: Panel[],
  onConnectionClick: (panel: Panel) => void,
  onNewPanelClick: () => void,
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
      {nextPanels.length < 2 && (
        <RoundButton onClick={onNewPanelClick}>
          <NewPannelText>+</NewPannelText>
        </RoundButton>
      )}
    </PanelsWrapper>
  </Wrapper>
);

export default PanelConnections
