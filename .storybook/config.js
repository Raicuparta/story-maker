import React from 'react'
import {
  configure,
  addDecorator,
} from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components/macro'

import {
  theme,
  GlobalStyle,
} from '../src/components/App/App.style'

configure(require.context('../src/', true, /\.story.tsx$/), module)

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ minWidth: '100px', minHeight: '100px' }}>
      <GlobalStyle />
      {story()}
    </div>
  </ThemeProvider>
))

addDecorator(withKnobs)
