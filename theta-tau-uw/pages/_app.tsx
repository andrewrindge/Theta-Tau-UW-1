import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  colors: {
    900: '#8B0000',
    800: '#EDEAB5',
    300: '#2B2B2B',
    200: '#F8F8F8',
    100: '#FFF'
  }
}

const theme = extendTheme({
  colors: colors
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
