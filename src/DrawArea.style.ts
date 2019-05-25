import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  cursor: crosshair;
  background: white;
  border-radius: 10px;
`

export const Path = styled.path`
  fill: none;
  stroke-width: 10px;
  stroke: black;
  stroke-linejoin: round;
  stroke-linecap: round;
`

export const DrawingSVG = styled.svg`
  width: 100%;
  height: 100%;
`