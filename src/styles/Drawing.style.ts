import styled from 'styled-components/macro';

import Colors from './colors';

export const Wrapper = styled.div`
  flex: 1;
  background: ${Colors.secondaryVariant};
  margin: 5px;
  border-radius: 10px;
  position: relative;
`

export const DrawingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  image-rendering: pixelated;
`

export const Canvas = styled.canvas`
  cursor: crosshair;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`
