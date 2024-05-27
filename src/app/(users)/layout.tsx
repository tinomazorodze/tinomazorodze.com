import { type Metadata } from 'next'

import '../../styles/tailwind.css'
import { Wrapper } from '../_components/a-wrapper'
import { Providers } from '../_components/a-providers'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default:
      'Spencer Sharp - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
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
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Wrapper>{children}</Wrapper>
          </div>
        </Providers>
      </body>
    </html>
  )
}
