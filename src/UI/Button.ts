import styled from 'styled-components/macro';

import Colors from '../Colors';

export default styled.button`
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
    background: ${Colors.primary};
  }
  
  :active {
    border-color: ${Colors.primaryVariant};
  }
`
