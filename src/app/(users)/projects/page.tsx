import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { preparePageMetadata } from '@/app/lib/metadata'
import { LinkIcon } from '@heroicons/react/24/solid'
import ZimuiLogo from '@/icons/zimui-logo'
import ZimDevsLogo from '@/icons/zimdevs-logo'
import IBZimLogo from '@/icons/ibzim-logo'
import Link from 'next/link'
import { Container } from '@/components/Container'

const projects = [
  {
    name: 'Zim UI',
    description: 'An open source multi-framework component library.',
    link: { href: 'https://www.zimui.dev', label: 'zimui.dev' },
    logo: ZimuiLogo,
  },
  {
    name: 'Zim Developers',
    description: 'A fast growing community for developers in Zimbabwe.',
    link: { href: 'https://www.zimdevelopers.com', label: 'zimdevelopers.com' },
    logo: ZimDevsLogo,
  },
  {
    name: 'IBZim',
    description:
      'An online blog providing accurate information about Zimbabwe.',
    link: { href: 'http://www.ibzim.com', label: 'ibzim.com' },
    logo: IBZimLogo,
  },
]
export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Projects | Tino Mazorodze Blog',
    description:
      'Discover the programming projects that Tino has poured his heart and soul into, with the aim of improving Zimbabwe.',
    pageUrl: '/programming',
    imageUrl: '',
  })

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects which might become something big in Zimbabwe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are web-based, so if you
          see something that piques your interest, check out the link and
          contribute if you have ideas for how it can be improved.
          <Link href="https://wa.me/+263780105064" className="text-yellow-500">
            contact me
          </Link>
          .
        </p>
        <Link
          href="https://chat.whatsapp.com/FR41DGvUdt2HG3KTcLhN6M"
          target="_blank"
          className="mx-auto mb-16 mt-8 block w-fit rounded-full border-2 border-yellow-500 px-4 py-2 hover:bg-yellow-500"
        >
          Join Zim Developers Community
        </Link>
      </header>

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <project.logo className="h-full w-full rounded-full" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-600 transition group-hover:text-yellow-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </Container>
  )
}
