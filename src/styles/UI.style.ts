import styled from 'styled-components/macro';

import Colors from './colors';

export const Button = styled.button`
  all: unset;
  flex: 1;
  padding: 7px;
  background: ${Colors.secondaryVariant};
  border-radius: 5px;
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
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
