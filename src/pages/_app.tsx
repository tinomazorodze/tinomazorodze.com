import '@/styles/tailwind.css'

import { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import { Providers } from '@/components/providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <div className="flex w-full">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Providers>
  )
}
