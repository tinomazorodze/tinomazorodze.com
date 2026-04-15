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
  WhatsappIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.png'

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
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
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
            I’m Tino Mazorodze (TechTinoe)
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Name's Tino a {new Date().getFullYear() - 2004} year old guy from
              Harare, Zimbabwe. I am deeply into coding, online gaming and all
              things tech.
            </p>
            <p>
              My story starts in 2020 back in high school when I got my hands on
              "unlimited" data through OpenVPN (iykyk). I started exploring the
              world of coding, beginning with HTML, CSS, and JavaScript. I was
              hooked from the start but back then I thought I had everything
              figured out building full sites with just vanilla HTML and CSS on
              my local machine.
            </p>
            <p>
              As time went on I studied different languages like Java and C# and
              started my framework hunting journey chasing the "best framework".
              I tried numerous frameworks and libraries including Angular,
              Bootstrap, ASP.NET until I finally found React. From there I
              started with ChakraUI and later on switched to NextJS which is now
              my default but I do use other frameworks like Astro.
            </p>
            <p>
              Okay enough about that boring technical stuff 😅. I am a big fan
              of Anime especially Isekai my top 3 being: "Eminence in Shadow",
              "Sword Art Online" and "Overlord". Apart from that I am a hardcore
              online gamer with a particular love for MMOs. I am still searching
              for the perfect MMO to waste my life on but for now I usually play
              Dota 2, FC26, Albion Online and Euro Trucks on TruckersMP.
            </p>
            <p>
              Today, I’m the founder and current CEO of{' '}
              <Link href="https://www.xfinitypros.com">Xfinity Pros</Link>,
              where we’re working on building neat software products like IBZIM
              our current project.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/TechTinoe" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/techtinoe"
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
              href="https://linkedin.com/in/tinomazorodze"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://wa.me/+263780105064"
              icon={WhatsappIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              +263780105064
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
