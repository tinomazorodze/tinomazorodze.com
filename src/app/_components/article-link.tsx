import { Card } from '@/components/Card'
import { ArticleType } from '@/lib/article'
import formatDate from 'date-fns/format'

export default function ArticleLink({ article }: { article: ArticleType }) {
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
