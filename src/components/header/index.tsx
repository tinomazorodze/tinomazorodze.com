import Link from "next/link";
import ThemeSwitcher from "./header-components/theme-switcher";
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const isRoot = pathname === '/';
  const isBlog = pathname === '/blog';
  const isPortfolio = pathname === '/portfolio';

  return (
    <header className="w-full sticky top-0 z-10 bg-primary border-b border-accent-2 shadow-sm">
      <div className="container w-full flex items-center justify-between mx-auto py-4 px-4 md:px-0">
        <nav className="flex space-x-4 text-accent-6">
          <Link href="/" className={`${isRoot && "text-primaryColor"}`}>Home</Link>
          <Link href="/blog" className={`${isBlog && "text-primaryColor"}`}>Blog</Link>
          <Link href="/portfolio" className={`${isPortfolio && "text-primaryColor"}`}>Portfolio</Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
