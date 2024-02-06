import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import formatDate from 'date-fns/format'
import { getAllArticles } from '@/sanity/lib/client'
import { ArticleType } from '@/lib/article'
import Helmet from '@/components/helmet'

type BlogProps = {
  articles: ArticleType[]
}

function Article({ article }: { article: ArticleType }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug.current}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article._updatedAt}
          className="md:hidden"
          decorate
        >
          {formatDate(new Date(article._updatedAt), 'MMMM d, yyyy')}
        </Card.Eyebrow>
        <Card.Description>{article.seo.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article._updatedAt}
        className="mt-1 hidden md:block"
      >
        {formatDate(new Date(article._updatedAt), 'MMMM d, yyyy')}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex(props: BlogProps) {
  const { articles } = props

  return (
    <>
      <Helmet
        metaTitle="Articles | Tino Mazorodze"
        metaDescription="All of Tino&#39;s well researched articles about the technology industry in Zimbabwe and other interesting topics."
        pageUrl="https://www.tinomazorodze.com/blog"
      />
      <SimpleLayout
        title="Writing on programming, business and technology in Zimbabwe."
        intro="All of Tino&#39;s well researched articles about the technology industry in Zimbabwe and other interesting topics."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug.current} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const [articles]: [ArticleType[]] = await Promise.all([getAllArticles()])

  return {
    props: {
      articles,
    },
  }
}
