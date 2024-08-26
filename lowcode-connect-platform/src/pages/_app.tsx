import theme from '@/styles/theme'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/utils/registry'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </StyledComponentsRegistry>
)}

export default MyApp
