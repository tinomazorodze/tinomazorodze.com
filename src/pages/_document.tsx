import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head />
      {/* Global Site Tag (gtag.js) - Google Analytics */}

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id='${process.env.GA_SECRET}'`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_SECRET}');
        `,
        }}
      />
      <body className="h-full w-full bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
