import styled, {
  css,
} from 'styled-components/macro'

import { Row } from '../UI'

export const Wrapper = styled(Row)(({ theme }) => css`
  background: ${theme.primary};
  color: ${theme.secondary};
  flex: 1;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`)

export const TextInput = styled.textarea(({ theme }) => css`
  all: unset;
  background: ${theme.primaryVariant};
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  height: 55px;

  ::placeholder {
    color: ${theme.secondaryVariant}
  }
`)
