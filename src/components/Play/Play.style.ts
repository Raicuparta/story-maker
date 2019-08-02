import styled, {
  css,
} from 'styled-components/macro'

import {
  Row,
  Column,
} from '../UI'

export const Wrapper = styled(Row)(({ theme }) => css`
  width: 100%;
  padding: ${theme.spacing.normal};
`)

export const CurrentPanelColumn = styled(Column)`
  flex: 2;
`

export const PanelWrapper = styled.div(({ theme }) => css`
  margin: ${theme.spacing.normal};
  border: solid 5px ${theme.primaryVariant};
  border-radius: #{theme.borderRadius.normal}
  overflow: hidden;
`)

export const PanelImage = styled.img`
  width: 100%;
  image-rendering: pixelated;
  display: block;
`

export const PanelText = styled.div(({ theme }) => css`
  background: ${theme.primaryVariant};
  padding: ${theme.spacing.normal};
`)
