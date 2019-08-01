import {
  createGlobalStyle,
  css,
} from 'styled-components/macro'
import {
  darken,
  lighten,
} from 'polished'

const primary = '#1c4265'
const primaryVariant = darken(0.15, primary)
const secondary = lighten(0.5, primary)
const secondaryVariant = lighten(0.15, primary)

export const theme = {
  primary,
  primaryVariant,
  secondary,
  secondaryVariant,
}

export const GlobalStyle = createGlobalStyle(({ theme }) => css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.primary};
  }

  #root {
    display: flex;
    height: 100vh;
  }

  * {
    user-select: none;
  }
`)
