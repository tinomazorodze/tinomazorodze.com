'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import formatDate from 'date-fns/format'
import { ArticleType } from '@/lib/article'
import HeroImage from './hero-image'
import PtRenderer from './pt-renderer'
import { Card } from '@/components/Card'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  articles,
}: {
  article: ArticleType
  articles: ArticleType[]
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="mb-8 flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              <time
                dateTime={article._updatedAt}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">
                  {formatDate(new Date(article._updatedAt), 'MMMM d, yyyy')}
                </span>
              </time>
            </header>
            <p className="mb-8">{article.intro}</p>
            <HeroImage
              alt={`${article.name} | Tino Mazorodze`}
              image={article.seo.image}
            />
            <PtRenderer body={article.body} articles={articles} />
            <div className="mt-20">
              <h2 className="text-3xl">More Articles To Read</h2>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                  <ul className="flex max-w-3xl flex-col space-y-16">
                    {article.relatedArticles?.map((relatedArticle) => {
                      const article = articles.find(
                        (article) => article._id === relatedArticle._ref,
                      )!

                      return (
                        <Article key={article.slug.current} article={article} />
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  )
}

function Article({ article }: { article: ArticleType }) {
  return (
    <li className="md:grid md:grid-cols-4 md:items-baseline">
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
    </li>
  )
}
