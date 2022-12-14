import React from 'react'
import { Layout } from '../componets'
import '../styles/globals.css'

function MyApp({ Component, pageProps })  {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
