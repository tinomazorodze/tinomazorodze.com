import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { ArticleType } from '@/lib/article'
import formatDate from 'date-fns/format'
import Photos from '@/components/home/photos'
import Resume from '@/components/home/resume'
import Newsletter from '@/components/home/newsletter'
import { getAllArticles } from '@/sanity/lib/client'
import Helmet from '@/components/helmet'

type BlogProps = {
  articles: ArticleType[]
}

function Article({ article }: { article: ArticleType }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug.current}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article._updatedAt} decorate>
        {formatDate(new Date(article._updatedAt), 'MMMM d, yyyy')}
      </Card.Eyebrow>
      <Card.Description>{article.seo.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home(props: BlogProps) {
  const { articles } = props

  return (
    <>
      <Helmet
        metaTitle="Tino Mazorodze - Software architect, founder, and tech enthusiast"
        metaDescription="I’m Tino, a software architect and entrepreneur based in the city of Harare. I’m the founder and CEO of MazTech, where we empower regular Zimbabweans to take advantage of the internet and its technologies."
        pageUrl="https://www.tinomazorodze.com"
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software architect, founder, and tech enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Tino, a software architect and entrepreneur based in the city of
            Harare. I’m the founder and CEO of Mazorodze Technologies (MazTech),
            where we develop technologies that empower regular Zimbabweans to
            take advantage of the internet and its technologies.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/MazorodzeHQ"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://www.instagram.com/mazorodze.hq"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/tinomazorodze"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/tinomazorodze"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug.current} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
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
