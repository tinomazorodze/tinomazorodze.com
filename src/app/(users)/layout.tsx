import '../../styles/tailwind.css'
import { Wrapper } from '../_components/a-wrapper'
import { Providers } from '../_components/a-providers'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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
