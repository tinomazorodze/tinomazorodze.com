import Head from 'next/head'
import siteConfig from '@/content/site.json'

export const PersonMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tino Mazorodze',
  jobTitle: 'Software Architect',
  email: 'tinomazorodze.mt@gmail.com',
  sameAs: [
    `${siteConfig.url.twitter}`,
    `${siteConfig.url.instagram}`,
    `${siteConfig.url.linkedin}`,
  ],
}

export const WebsiteMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: 'Tino Mazorodze',
  url: siteConfig.url.web,
}

type HelmetProps = {
  canonical?: string
  metaDescription: string
  metaTitle: string
  pageUrl: string
}

const Helmet = (props: HelmetProps) => {
  const { canonical, metaDescription, metaTitle, pageUrl } = props

  return (
    <>
      <Head>
        {/* Name Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="/robots.txt" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={metaDescription} />
        <title>{metaTitle}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tino Mazorodze" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={siteConfig.url.banner} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:url" content={pageUrl} />

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
          <link rel="canonical" href={pageUrl} />
        )}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TechTinoe" />
        <meta name="twitter:creator" content="@TechTinoe" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={siteConfig.url.banner} />

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
      </Head>
    </>
  )
}

export default Helmet
