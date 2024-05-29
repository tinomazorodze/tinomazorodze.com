import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import PersonSchema from '@/app/_components/schemas/person-schema'
import { preparePageMetadata } from '@/app/lib/metadata'
import WebsiteSchema from '@/app/_components/schemas/website-schema'
import type { Viewport } from 'next'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'About | Tino Mazorodze Blog',
    description:
      "I'm Tino Mazorodze, a programmer and gamer from Zimbabwe. I post about my open source projects and video game experiences and tips on my blog",
    pageUrl: '/about',
    imageUrl: '/assets/potrait.png',
  })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#f9fafb',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#1C1C1C',
    },
  ],
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Tino Mazorodze Potrait"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Tino Mazorodze (AKA TechTinoe). I love programming and playing
              MMO Games.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved exploring technology for as long as I can remember.
                When I turned 8 I got my first Computer and I instantly fell in
                love. I spent most of my time browsing on the internet and
                playing video games.
              </p>
              <p>
                As i grew older as a computer lover by default I got into
                programming. I started with simple Visual Basic code at school
                then got bored and learnt Java as well as web development. Now I
                build a bunch of projects which are all open source on my github
                account. Hopefully someday one of these projects might turn into
                something big with the help of contributions from other
                programmers
              </p>
              <p>
                If it hasn’t been clear enough then know that I am a total nerd
                🤣 so my favourite video games are complicated and have quite a
                steep learning curve. Dota 2 is my number 1 favourite game. I
                play dota everyday and its been painful being stuck in Herald if
                you know what i mean. Apart from Dota I usually play simulators
                like Software Inc, Big Ambitions and Euro Trucks.
              </p>
              <p>
                Right now I am an aspiring software engineering student at the
                University of Zimbabwe. I am yet to start my 4 year course but I
                will regularly post content on my blog and youtube channel along
                the way.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/MazorodzeHQ" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/mazorodze.hq"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/tinomazorodze"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/tinomazorodze"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:tinomazorodze.mt@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                tinomazorodze.mt@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
