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
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5335750983677223"
        crossOrigin="anonymous"
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

      {/* For ad blocker users */}
      <script
        async
        src="https://fundingchoicesmessages.google.com/i/pub-5335750983677223?ers=1"
        nonce="kZDuAnw1DRrOv5vWX1VLDg"
      />
      <script
        nonce="kZDuAnw1DRrOv5vWX1VLDg"
        dangerouslySetInnerHTML={{
          __html: `
            function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();}
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
