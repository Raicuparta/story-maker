import styled from 'styled-components/macro';

import Colors from './Colors';

export const Path = styled.path`
  fill: none;
  stroke-width: 5px;
  stroke: ${Colors.primaryVariant};
  stroke-linejoin: round;
  stroke-linecap: round;
`