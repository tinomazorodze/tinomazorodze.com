import { ArticleType } from '@/lib/article'
import { urlForImage } from '@/sanity/lib/image'
import type { Metadata } from 'next'

export const prepareArticleMetadata = (article: ArticleType): Metadata => ({
  title: article.seo.title,
  description: article.seo.description,
  alternates: {
    canonical: `/blog/${article.slug.current}`,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon-mask',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
  },

  twitter: {
    site: '@MazorodzeHQ',
    creator: '@MazorodzeHQ',
    card: 'summary_large_image',
  },

  openGraph: {
    title: article.seo.title,
    description: article.seo.description,
    images: {
      url: urlForImage(article.seo.image).url(),
      width: 1280,
      height: 720,
    },
    type: 'article',
    locale: 'en_US',
    siteName: 'Tino Mazorodze Blog',
    url: `/blog/${article.slug.current}`,
  },

  authors: {
    name: 'Tino Mazorodze',
    url: '/about',
  },

  metadataBase: new URL('https://www.tinomazorodze.com'),
})
