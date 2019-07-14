import styled from 'styled-components/macro';

import Colors from './colors';
import { Row } from './UI.style';

export const Wrapper = styled(Row)`
  background: ${Colors.primary};
  color: ${Colors.secondary};
  flex: 1;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`;

export const TextInput = styled.textarea`
  all: unset;
  background: ${Colors.primaryVariant};
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  height: 55px;

  ::placeholder {
    color: ${Colors.secondaryVariant}
  }
`;
