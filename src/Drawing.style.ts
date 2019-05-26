import styled from 'styled-components/macro';

import Colors from './Colors';

export const Wrapper = styled.div`
  background: ${Colors.secondary};
  flex: 1;
`

export const Path = styled.path`
  fill: none;
  stroke-width: 5px;
  stroke: ${Colors.primaryVariant};
  stroke-linejoin: round;
  stroke-linecap: round;
`

export const DrawingSVG = styled.svg`
  width: 100%;
  height: 100%;
`