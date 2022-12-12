import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import '../layout/layout.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    Fathom.load('DEBTPWYR', {
      includedDomains: ['www.whocanuse.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ChakraProvider>
      <Component key={router.locale} {...pageProps} />
    </ChakraProvider>
  )
}
