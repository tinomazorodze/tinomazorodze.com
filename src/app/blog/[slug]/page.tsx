import { ArticleLayout } from '@/components/article-layout'
import { prepareArticleMetadata } from '@/components/metadata/article-metadata'
import { ArticleType } from '@/lib/article'
import { getAllArticles, getArticleBySlug } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  let article: ArticleType = await getArticleBySlug(params.slug)

  return prepareArticleMetadata(article)
}

export default async function Page({ params }: { params: { slug: string } }) {
  let articles: ArticleType[] = await getAllArticles()
  let article: ArticleType = await getArticleBySlug(params.slug)

  const StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${article.slug.current}`,
      name: article.name,
      url: `https://www.tinomazorodze.com/blog/${article.slug.current}`,
    },
    headline: article.seo.title,
    description: article.seo.description,
    image: {
      '@type': 'ImageObject',
      url: urlForImage(article.seo.image).url(),
      height: 720,
      width: 1280,
    },
    datePublished: article._createdAt,
    dateModified: article._updatedAt,

    publisher: {
      '@type': 'Person',
      name: 'Tino Mazorodze',
      image: {
        '@type': 'ImageObject',
        url: '/assets/portrait.png',
        width: 300,
        height: 300,
      },
    },
  }

  return (
    <>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(StructuredData) }}
      />
      <ArticleLayout article={article} articles={articles} />
    </>
  )
}
