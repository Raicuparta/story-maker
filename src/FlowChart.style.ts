import styled from 'styled-components/macro';

import Colors from './Colors';

export const Wrapper = styled.div`
  border: 3px solid ${Colors.secondaryVariant};
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Node = styled.div`
  width: 20px;
  height: 20px;
  background: ${Colors.secondary};
  border-radius: 100%;
`