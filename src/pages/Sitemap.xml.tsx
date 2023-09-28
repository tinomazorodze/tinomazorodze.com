import { ArticleType } from "@/lib/article"
import { getAllArticles } from "@/sanity/lib/client"

type SitemapLocation = {
  url: string
  changefreq?:
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'
  priority: number
  lastmod?: Date
}

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date('2023-09-28T08:30:42.842Z'),
  },
  {
    url: '/blog',
    changefreq: 'daily',
    priority: 0.9,
    lastmod: new Date(),
  },
  { url: '/surveys', changefreq: 'weekly', priority: 0.5 },
]

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = "https://www.tinomazorodze.com" // Make sure to configure this
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
      .map((location) => {
        return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${location.lastmod
            ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
            : ''
          }
                  </url>`
      })
      .join('')}
  </urlset>
  `
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
  // Get list of Post urls
  const [articles]: [ArticleType[]] = await Promise.all([getAllArticles()])
  const articleUrls: SitemapLocation[] = articles
    .filter(({ slug = '' }) => slug)
    .map((article) => {
      return {
        url: `/blog/${article.slug.current}`,
        priority: 1,
        lastmod: new Date(article._updatedAt),
      }
    })

  // ... get more routes here

  // Return the default urls, combined with dynamic urls above
  const locations = [...defaultUrls, ...articleUrls]

  // Set response to XML
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(locations))
  res.end()

  return {
    props: {},
  }
}
