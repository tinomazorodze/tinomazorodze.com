import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoStudyCompanion from '@/images/logos/logo-sc.svg'
import logoWealthHub from '@/images/logos/wealthhub.svg'
import Helmet from '@/components/helmet'
import Link from 'next/link'

const projects = [
  {
    name: 'Study Companion',
    description:
      'All in one study pack for Students. AI Chatbot, tasks & reminders, progress tracking etc',
    link: {
      repo: 'https://www.studycompanion.io/',
      site: 'https://www.studycompanion.io/',
    },
    logo: logoStudyCompanion,
    type: 'Webapp',
    dateStarted: '2 March 2024',
    progress: 38,
  },
  {
    name: 'Wealth Hub',
    description:
      'Learn about wealthy people and organisations as well as how to join the race yourself.',
    link: {
      repo: 'https://github.com/tinomazorodze/officialwealthhub.com',
      site: 'https://www.officialwealthhub.com',
    },
    logo: logoWealthHub,
    type: 'Blog',
    dateStarted: '15 August 2023',
    progress: 23,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Programming() {
  return (
    <>
      <Helmet
        metaTitle="Programming | Tino Mazorodze"
        metaDescription="Discover the programming projects that Tino has poured his heart and soul into, with the aim of making a an impact on the universe."
        pageUrl="https://www.tinomazorodze.com/programming"
      />
      <SimpleLayout
        title="Open source projects which might become something big."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are web-based, so if you see something that piques your interest, check out the link and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={`${project.name} | Tino Mazorodze`}
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="flex w-full items-center justify-between gap-2">
                <Link
                  href={project.link.repo}
                  target="_blank"
                  className="mt-4 w-full rounded-md bg-zinc-900 py-2 text-center text-white dark:bg-white dark:text-zinc-900"
                >
                  Join Project
                </Link>
                <Link
                  href={project.link.site}
                  target="_blank"
                  className="mt-4 w-full rounded-md border border-zinc-300 py-2 text-center dark:border-zinc-600"
                >
                  See Project
                </Link>
              </div>
              <div className="mt-4 w-full">
                <div className="darktext-zinc-400 mb-4 flex w-full justify-between border-b border-zinc-300 pb-1 text-sm text-zinc-500 dark:border-zinc-600">
                  <div>Type</div>
                  <div>{project.type}</div>
                </div>
                <div className="darktext-zinc-400 mb-4 flex w-full justify-between border-b border-zinc-300 pb-1 text-sm text-zinc-500 dark:border-zinc-600">
                  <div>Date Started</div>
                  <div>{project.dateStarted}</div>
                </div>
                <div className="darktext-zinc-400 mb-4 flex w-full justify-between border-b border-zinc-300 pb-1 text-sm text-zinc-500 dark:border-zinc-600">
                  <div>Progress</div>
                  <div>{project.progress}%</div>
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
