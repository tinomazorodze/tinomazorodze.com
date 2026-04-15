import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import { env } from '@/env'

export const metadata: Metadata = {
  title: {
    template: '%s - Tino Mazorodze',
    default: 'Tino Mazorodze - Software developer, gamer, and tech enthusiast',
  },
  description:
    'I’m Tino, a software developer, gamer, and tech enthusiast based in Harare, Zimbabwe. I’m the current CEO of Xfinity Pros, the makers of IBZIM.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
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
        <Analytics />
        <GoogleAnalytics gaId={env.GA_SECRET!} />
      </body>
    </html>
  )
}
