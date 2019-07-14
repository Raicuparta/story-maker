import styled from 'styled-components/macro';

import Colors from './colors';

const ButtonBase = styled.button`
  all: unset;
  background: ${Colors.secondaryVariant};
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border: solid 3px ${Colors.secondaryVariant};
  
  :hover {
    border-color: ${Colors.primaryVariant};
  }
  
  :active {
    background: ${Colors.primary};
  }
`

export const Button = styled(ButtonBase)`
  flex: 1;
  border-radius: 5px;
  padding: 7px;
`;

export const RoundButton = styled(ButtonBase)`
  border-radius: 100%;
  flex: unset;
  overflow: hidden;
  height: 80px;
  width: 80px;
`

const Base = styled.div`
  display: flex;
  justify-content: center;
`

export const Row = styled(Base)``;

export const Column = styled(Base)`
  flex: 1;
  flex-direction: column;
`;
