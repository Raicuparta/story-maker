import { createGlobalStyle } from 'styled-components'

import Colors from './colors'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${Colors.primary};
  }

  #root {
    display: flex;
    height: 100vh;
  }

  * {
    user-select: none;
  }
`
