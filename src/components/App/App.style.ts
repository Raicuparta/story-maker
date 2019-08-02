import {
  createGlobalStyle,
  css,
  DefaultTheme,
} from 'styled-components/macro'
import {
  darken,
  lighten,
} from 'polished'

const primary = '#1c4265'
const primaryVariant = darken(0.15, primary)
const secondary = lighten(0.5, primary)
const secondaryVariant = lighten(0.15, primary)

export const theme: DefaultTheme = {
  primary,
  primaryVariant,
  secondary,
  secondaryVariant,
  borderRadius: {
    normal: '0.6rem',
    small: '0.3rem',
  },
  spacing: {
    normal: '0.6rem',
    small: '0.3rem',
  },
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
    color: ${theme.secondary};
  }

  #root {
    display: flex;
    height: 100vh;
  }

  * {
    user-select: none;
  }
`)
