import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'font-medium text-yellow-700 dark:text-yellow-400'
            : 'hover:text-yellow-500 dark:hover:text-yellow-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0" />
        )}
      </Link>
    </li>
  )
}

export default function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<'nav'>,
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/games">Games</NavItem>
        <NavItem href="/tech">Tech</NavItem>
      </ul>
    </nav>
  )
}
