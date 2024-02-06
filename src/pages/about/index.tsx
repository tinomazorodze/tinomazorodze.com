import { type Metadata } from 'next'
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
import Helmet from '@/components/helmet'

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

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Tino Mazorodze. I live in Harare, where I design the future.',
}

export default function About() {
  return (
    <>
      <Helmet
        metaTitle="About | Tino Mazorodze"
        metaDescription="I’m Tino Mazorodze. I live in Harare, where I design the future."
        pageUrl="https://www.tinomazorodze.com/about"
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Tino Mazorodze. I live in Harare, where I design the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved exploring technology for as long as I can remember.
                When I turned 8 I got my first Computer and I instantly fell in
                love. I spent most of my time browsing on the internet and
                playing video games.
              </p>
              <p>
                Starting Form 1 at St Faith&#39;s High School I got introduced
                to programming and by default I loved it and was apparently good
                at it. Like the entrepreneur I am today young me decided to
                profit from my skills and had people pay me to do their Computer
                Science projects for them.
              </p>
              <p>
                3 years later I got bored of Visual Basic programming and that
                is when I bumped into web development. I watched a lot of
                YouTube tutorials and read a lot of documentation online on
                Front-End Web Development. I have explored various other
                frameworks, languages and libraries since then across Mobile
                App, Desktop App and Web App Development
              </p>
              <p>
                Today, I’m the founder and CEO of Mazorodze Ventures which is
                rather known as MazTech. We are a venture capitalist company
                which aims to drive the internet industry of Zimbabwe in the
                right direction and empower regular Zimbabweans with the
                knowledge and skill required to take advantage of the internet.
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
