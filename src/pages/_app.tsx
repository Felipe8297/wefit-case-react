import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'
import { globalStyles } from '@/styles/global'
import { AppContainer } from '@/styles/pages/_app'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer className="container">
      <CartContextProvider>
        <Header />

        <Component {...pageProps} />
      </CartContextProvider>
    </AppContainer>
  )
}
