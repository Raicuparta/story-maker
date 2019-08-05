import styled, {
  css,
} from 'styled-components/macro'

const ButtonBase = styled.button(({ theme, onClick }) => css`
  all: unset;
  background: ${theme.secondaryVariant};
  margin: ${theme.spacing.small};
  text-align: center;
  border: solid 3px ${theme.primary};

  ${onClick && css`
    cursor: pointer;

    border-color: ${theme.primaryVariant};

    :hover {
      border-color: ${theme.secondaryVariant};
    }

    :active {
      background: ${theme.primary};
      border-color: ${theme.primaryVariant};
    }
  `}
`)

export const Button = styled(ButtonBase)(({ theme }) => css`
  flex: 1;
  border-radius: ${theme.borderRadius.small};
  padding: 7px;
`)

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
