
import { Inter } from 'next/font/google'
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { firePageView } from '@/lib/gtag';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: AppProps;
}) {
  useEffect(() => {
    firePageView(window.location.pathname);
  }, []);

  return (
    <>
      <style jsx global>{`
         html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
