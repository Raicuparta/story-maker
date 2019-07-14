import styled, { css } from 'styled-components/macro';

import Colors from './colors';

const common = css`
  width: 100%;
  height: 100%;
`

export const ThumbnailImage = styled.img`
  ${common}
  flex: 1;
`

export const Placeholder = styled.div`
  ${common}
  padding-bottom: 75%;
  background-color: ${Colors.secondary};
`
