import '@/styles/tailwind.css'

import { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import { Providers } from '@/components/providers'
import { firePageView } from '@/lib/gtag'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    firePageView(window.location.pathname)
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
      <Analytics />
    </>
  )
}
