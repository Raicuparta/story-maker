import styled from 'styled-components/macro';

import Colors from './Colors';
import { Row, Column } from './UI';

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
  border-radius: 0 0 10px 10px;
  margin: 0 5px 5px 5px;
  height: 55px;

  ::placeholder {
    color: ${Colors.secondaryVariant}
  }
`;

export const DrawColumn = styled(Column)`
  flex: 2;
`;
