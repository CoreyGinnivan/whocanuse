import { ChakraProvider } from '@chakra-ui/react'
import '../layout/layout.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
