import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { SnipcartProvider } from 'use-snipcart';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <SnipcartProvider> 
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      </SnipcartProvider>
    </>
  )
}

export default MyApp
