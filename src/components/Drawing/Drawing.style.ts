import styled, {
  css,
} from 'styled-components/macro'

export const Wrapper = styled.div(({ theme }) => css`
  flex: 1;
  background: ${theme.secondaryVariant};
  position: relative;
  overflow: hidden;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
`)

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
  touch-action: none;
`
