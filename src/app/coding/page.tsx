import { LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Container } from "@/components/container";
import { Card } from "../../components/Card";
import {
  IBLogo,
  StudyCompanionLogo,
  XfinityProsLogo,
} from "@/components/icons/logos";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    name: "IB Global",
    description:
      "An organisation focused on promoting information transparency.",
    link: { href: "https://www.ibglobal.org", label: "ibglobal.org" },
    logo: IBLogo,
  },
  {
    name: "Xfinity Pros",
    description:
      "A group of developers you can partner with for your business.",
    link: { href: "https://www.xfinitypros.com", label: "xfinitypros.com" },
    logo: XfinityProsLogo,
  },
  {
    name: "Study Companion",
    description:
      "A well crafted E-Learning platform built to help students get better grades.",
    link: { href: "https://www.studycompanion.io", label: "studycompanion.io" },
    logo: StudyCompanionLogo,
  },
];

export default function CodingPage() {
  return (
    <Container className="mt-16 sm:mt-32 w-full">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Frontend Developer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I build web, mobile and desktop apps using JavaScript. My stack is
          mainly React (framework), Tailwind CSS (styling), PostgreSQL
          (Database) and a lot of use AI and template usage 😅. For mobile apps
          I use React Native and for Desktop apps I use Electron.js
        </p>
        <Link
          href="https://coding.tinomazorodze.com"
          target="_blank"
          className="mx-auto mb-16 mt-8 flex items-center gap-2 w-fit rounded-full border-2 border-yellow-500 px-4 py-2 hover:bg-yellow-500"
        >
          TechTinoe Coding Blog
          <ArrowTopRightOnSquareIcon className="size-4" />
        </Link>
      </header>
      <h2 className="mb-12 text-3xl ">Projects I have worked on</h2>
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
  );
}
