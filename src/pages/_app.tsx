import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'

import { AppContextProvider } from '@/contexts'
import Head from '@/components/Head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Head />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}
