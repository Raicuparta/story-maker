import styled, {
  css,
} from 'styled-components/macro'

import { Row } from '../UI'

export const Wrapper = styled(Row)(({ theme }) => css`
  background: ${theme.primary};
  flex: 1;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`)

export const TextInput = styled.textarea(({ theme }) => css`
  all: unset;
  background: ${theme.primaryVariant};
  padding: ${theme.spacing.normal};
  border-radius: #{theme.borderRadius.normal}
  margin: ${theme.spacing.small};
  height: 55px;

  ::placeholder {
    color: ${theme.secondaryVariant}
  }
`)
