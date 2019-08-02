
import styled, {
  css,
} from 'styled-components/macro'

import { Row } from '../UI'

export const Story = styled.div(({ theme }) => css`
  margin: ${theme.spacing.normal};
  font-size: 1.5em;
  background: ${theme.primaryVariant};
  padding: ${theme.spacing.normal};
  border-radius: ${theme.borderRadius.normal};
  text-align: center;
`)

export const StoryList = styled(Row)`
  flex-wrap: wrap;
`

export const Placeholder = styled.div(({ theme }) => css`
  padding-bottom: 75%;
  background-color: ${theme.secondary};
`)

export const ThumbnailWrapper = styled.div(({ theme }) => css`
  width: 16rem;
  height: 12rem;
  border-radius: ${theme.borderRadius.small};
  overflow: hidden;
  margin-top: ${theme.spacing.normal};
`)
