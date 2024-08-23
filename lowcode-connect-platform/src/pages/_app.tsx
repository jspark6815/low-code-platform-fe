import theme from '@/styles/theme'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/utils/registry'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
)}

export default MyApp
