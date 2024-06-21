import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/sanity/lib/client'
import { ArticleType } from '@/lib/article'
import { preparePageMetadata } from '@/app/lib/metadata'
import ArticleLink from '@/app/_components/article-link'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Articles | Tino Mazorodze Blog',
    description:
      'All of Tino&#39;s well researched articles, experiences and tips in programming, gaming and the tech industry.',
    pageUrl: '/blog',
    imageUrl: '',
  })

export default async function ArticlesIndex() {
  const [articles]: [ArticleType[]] = await Promise.all([getAllArticles()])

  return (
    <SimpleLayout
      title="Writing on programming, games and technology."
      intro="All of Tino&#39;s well researched articles, experiences and tips in programming, gaming and the tech industry"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <ArticleLink key={article.slug.current} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export const revalidate = 10
