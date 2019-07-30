import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro'

import Colors from '../../colors'

const ButtonBase = styled.button`
  all: unset;
  background: ${Colors.secondaryVariant};
  margin: 5px;
  text-align: center;
  border: solid 3px ${Colors.primary};

  ${(props): FlattenSimpleInterpolation | undefined => props.onClick && css`
    cursor: pointer;

    border-color: ${Colors.primaryVariant};

    :hover {
      border-color: ${Colors.secondaryVariant};
    }

    :active {
      background: ${Colors.primary};
      border-color: ${Colors.primaryVariant};
    }
  `}
`

export const Button = styled(ButtonBase)`
  flex: 1;
  border-radius: 5px;
  padding: 7px;
`

export const RoundButton = styled(ButtonBase)`
  border-radius: 100%;
  flex: unset;
  overflow: hidden;
  height: 80px;
  width: 80px;

  @media (orientation:portrait) {
    height: 50px;
    width: 50px;
  }
`

const Base = styled.div`
  display: flex;
  justify-content: center;
`

export const Row = styled(Base)``

export const Column = styled(Base)`
  flex: 1;
  flex-direction: column;
`
