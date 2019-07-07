import styled from 'styled-components/macro';

import Colors from './colors';

export const Wrapper = styled.canvas`
  margin: 5px;
  /* overflow: hidden; */
  cursor: crosshair;
  background: ${Colors.secondaryVariant};
  border-radius: 10px;
  flex: 1;
  object-fit: contain;
`
