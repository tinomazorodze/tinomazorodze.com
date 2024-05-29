import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SteamIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'

import { ArticleType } from '@/lib/article'
import formatDate from 'date-fns/format'
import Photos from '@/app/_components/home/photos'
import Resume from '@/app/_components/home/resume'
import Newsletter from '@/app/_components/home/newsletter'
import { getAllArticles } from '@/sanity/lib/client'
import { preparePageMetadata } from '../lib/metadata'
import PersonSchema from '../_components/schemas/person-schema'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Tino Mazorodze - Programmer, gamer, and tech enthusiast',
    description:
      'I’m Tino, a programmer and gamer (techtinoe). I love developing open source projects, playing MMO games and exploring the world of technology.',
    pageUrl: '/',
    imageUrl: '/assets/potrait.png',
  })

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

export default async function Home() {
  const [articles]: [ArticleType[]] = await Promise.all([getAllArticles()])

  return (
    <>
      <PersonSchema />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Daylight Programmer & Midnight Gamer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Tino. To my fellow programmers you can contribute and work
            together with me on my{' '}
            <Link
              href="https://github.com/tinomazorodze?tab=repositories"
              className="font-medium text-teal-700 hover:underline"
            >
              open source projects on github
            </Link>{' '}
            . To my fellow gamers you can find me on{' '}
            <Link
              href="https://steamcommunity.com/id/techtinooe/"
              className="font-medium text-teal-700 hover:underline"
            >
              steam as techtinooe
            </Link>
            . I usually play Dota 2, Counter Strike and Software Inc.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://steamcommunity.com/id/techtinooe/"
              aria-label="Follow on Steam"
              icon={SteamIcon}
            />
            <SocialLink
              href="https://www.youtube.com/channel/UCFd2JkydONLWjPQOtnFdDEA"
              aria-label="Follow on X"
              icon={YoutubeIcon}
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
            {articles.slice(0, 4).map((article) => (
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
