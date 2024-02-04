import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Tino Mazorodze',
    default:
      'Tino Mazorodze - Software architect, founder, and tech enthusiast',
  },
  description:
    'I’m Tino, a software architect and entrepreneur based in the city of Harare. I’m the founder and CEO of MazTech, where we empower regular Zimbabweans to take advantage of the internet and its technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={`${process.env.GA_SECRET}`} />
    </html>
  )
}
