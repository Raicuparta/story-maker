import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    primary: string
    primaryVariant: string
    secondary: string
    secondaryVariant: string
    borderRadius: {
      normal: string
      small: string
    }
    spacing: {
      normal: string
      small: string
    }
  }
}
