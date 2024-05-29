import { truncateOnWord } from '@/lib/utils'
import { Metadata } from 'next'
import siteConfig from '@/content/site.json'

type PageMetadataRecipe = {
  title: string
  description: string
  pageUrl: string
  imageUrl: string
}

export const preparePageMetadata = (recipe: PageMetadataRecipe): Metadata => ({
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
  robots: '/robots.txt',
  other: {
    'application-TileColor': '#008080',
  },

  twitter: {
    site: '@MazorodzeHQ',
    creator: '@MazorodzeHQ',
    card: 'summary_large_image',
    title: recipe.title,
    description: recipe.description,
    images: [recipe.imageUrl],
  },
  openGraph: {
    description: truncateOnWord(recipe.description, 158),
    url: `${siteConfig.url.web}${recipe.pageUrl}`,
    type: 'website',
    siteName: 'Tino Mazorodze Blog',
    title: recipe.title,
    images: [recipe.imageUrl],
    locale: 'en_US',
  },
  alternates: {
    canonical: `${siteConfig.url.web}${recipe.pageUrl}`,
  },
  authors: [
    {
      name: 'Tino Mazorodze',
      url: 'https://www.tinomazorodze.com',
    },
  ],
  title: recipe.title,
  description: recipe.description,
})
