import { Head, Html, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head />
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId={`${process.env.GA_SECRET}`} />
    </Html>
  )
}
