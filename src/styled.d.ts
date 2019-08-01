import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
  }
}
