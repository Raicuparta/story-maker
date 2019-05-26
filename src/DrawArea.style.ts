import styled from 'styled-components/macro';

import Colors from './Colors';

export const Wrapper = styled.div`
  margin: 5px 5px 0 5px;
  overflow: hidden;
  cursor: crosshair;
  display: flex;
  justify-content: center;
  flex: 1;
  background: ${Colors.secondaryVariant};
  border-radius: 10px 10px 0 0;
`
