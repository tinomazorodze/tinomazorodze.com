import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SteamIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'

import Photos from '@/app/_components/home/photos'
import { preparePageMetadata } from '../lib/metadata'
import PersonSchema from '../_components/schemas/person-schema'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Tino Mazorodze - Programmer, gamer, and tech enthusiast',
    description:
      'I’m Tino, a programmer and gamer (techtinoe). I love developing open source projects, playing MMO games and exploring the world of technology.',
    pageUrl: '/',
    imageUrl: 'https://www.tinomazorodze.com/banner.webp',
  })

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
              className="font-medium text-yellow-600 hover:underline"
            >
              open source projects on github
            </Link>{' '}
            . To my fellow gamers you can find me on{' '}
            <Link
              href="https://steamcommunity.com/id/techtinooe/"
              className="font-medium text-yellow-600 hover:underline"
            >
              steam as techtinooe
            </Link>
            . I usually play Dota 2 and Software Inc.
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
              href="https://www.instagram.com/techtinoe"
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
    </>
  )
}

export const revalidate = 10
