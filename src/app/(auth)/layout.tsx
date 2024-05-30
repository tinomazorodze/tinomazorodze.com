'use client'
import { Analytics } from '@vercel/analytics/react'
import '../../styles/tailwind.css'
import { Wrapper } from '../_components/a-wrapper'
import { Providers } from '../_components/a-providers'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'
import WebsiteSchema from '@/app/_components/schemas/website-schema'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full w-full bg-[url('/assets/tortoise-shell.svg')]">
        {children}
        <Analytics mode={'production'} />;
        <GoogleAnalytics gaId="G-MCD4ME299H" />
      </body>
    </html>
  )
}
