import Head from 'next/head'
import { PersonMarkup, WebsiteMarkup } from '.'
import siteConfig from '@/content/site.json'

type HelmetProps = {
  canonical?: string
  articleName: string
  articleURL: string
  metaTitle: string
  metaDescription: string
  metaImage: string
  createdAt: string
  updatedAt: string
}

const ArticleHelmet = (props: HelmetProps) => {
  const {
    canonical,
    articleName,
    articleURL,
    createdAt,
    metaDescription,
    metaImage,
    metaTitle,
    updatedAt,
  } = props

  const StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${articleURL}`,
      name: articleName,
      url: `${siteConfig.url.web}${articleURL}`,
    },
    headline: metaTitle,
    description: metaDescription,
    image: {
      '@type': 'ImageObject',
      url: metaImage,
      height: 720,
      width: 1280,
    },
    datePublished: createdAt,
    dateModified: updatedAt,

    publisher: {
      '@type': 'Person',
      name: siteConfig.owner.name,
      image: {
        '@type': 'ImageObject',
        url: siteConfig.url.selfie,
        width: 300,
        height: 300,
      },
    },
  }

  return (
    <>
      <Head>
        {/* Name Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={`${siteConfig.url.web}/robots.txt`} />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={metaDescription} />

        <title>{metaTitle}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tino Mazorodze Blog" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta
          property="og:url"
          content={`${siteConfig.url.web}${articleURL}`}
        />

        {/*Link Relationship Tags*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <link rel="home" href="/" />
        {canonical ? (
          <link rel="canonical" href={canonical} />
        ) : (
          <link rel="canonical" href={`${siteConfig.url.web}${articleURL}`} />
        )}

        {/* Twitter Cards */}
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:creator" content={`@TechTinoe`} />
        <meta name="twitter:site" content={`@TechTinoe`} />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          key="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PersonMarkup),
          }}
        />
        <script
          key="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteMarkup) }}
        />

        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(StructuredData) }}
        />
      </Head>
    </>
  )
}

export default ArticleHelmet
