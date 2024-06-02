import { Analytics } from '@vercel/analytics/react'
import '../../styles/tailwind.css'
import { Wrapper } from '../_components/a-wrapper'
import { Providers } from '../_components/a-providers'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'
import WebsiteSchema from '@/app/_components/schemas/website-schema'
import { auth } from '../auth'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export type NextAuthProviderProps = {
  session?: Session | null
  children: React.ReactNode
}

const NextAuthProvider = ({ session, children }: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#f9fafb',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#1C1C1C',
    },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = await auth()

  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full w-full bg-zinc-50 dark:bg-black">
        <WebsiteSchema />
        <NextAuthProvider session={session}>
          <Providers>
            <div className="flex w-full">
              <Wrapper>{children}</Wrapper>
            </div>
          </Providers>
        </NextAuthProvider>
        <Analytics mode={'production'} />;
        <GoogleAnalytics gaId="G-MCD4ME299H" />
      </body>
    </html>
  )
}
