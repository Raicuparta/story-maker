import styled from 'styled-components/macro';

import { Row, Column } from './UI.style';

export const Wrapper = styled(Column)`
  flex-direction: column;
  margin: 10px;
  display: flex;
  flex: unset;

  @media (orientation:portrait) {
    flex-direction: row;
  }
`

export const PanelsWrapper = styled(Row)`
  @media (orientation:portrait) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
`

export const NewPannelText = styled.div`
  margin-top: -22px;
  font-size: 5em;
`
