import styled, {
  css,
} from 'styled-components/macro'

const common = css`
  width: 100%;
  height: 100%;
`

export const ThumbnailImage = styled.img`
  ${common}
  flex: 1;
`

export const Placeholder = styled.div(({ theme }) => css`
  ${common}
  padding-bottom: 75%;
  background-color: ${theme.secondary};
`)
