import styled from 'styled-components/macro';

import Colors from './Colors';
import { Row } from './UI';

export const Wrapper = styled(Row)`
  background: ${Colors.primary};
  color: ${Colors.secondary};
  flex: 1;
  padding: 10px;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`

export const TextInput = styled.textarea`
  all: unset;
  background: ${Colors.primaryVariant};
  flex: 1;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  margin: 0 5px 5px 5px;
  min-height: 55px;

  ::placeholder {
    color: ${Colors.secondaryVariant}
  }
`
