import styled from 'styled-components/macro';

import Colors from './colors';

export const Canvas = styled.canvas`
  margin: 5px;
  /* cursor: crosshair; */
  background: ${Colors.secondaryVariant};
  border-radius: 10px;
  flex: 1;
  object-fit: contain;
  image-rendering: pixelated;
`
