import styled, {
  css,
} from 'styled-components/macro'

import {
  Row,
  Column,
} from '../UI'

export const Wrapper = styled(Row)`
  width: 100%;
  padding: 10px;
`

export const CurrentPanelColumn = styled(Column)`
  flex: 2;
`

export const PanelWrapper = styled.div(({ theme }) => css`
  margin: 10px;
  border: solid 5px ${theme.primaryVariant};
  border-radius: 10px;
  overflow: hidden;
`)

export const PanelImage = styled.img`
  width: 100%;
  image-rendering: pixelated;
  display: block;
`

export const PanelText = styled.div(({ theme }) => css`
  background: ${theme.primaryVariant};
  padding: 10px;
  color: ${theme.secondary};
`)
