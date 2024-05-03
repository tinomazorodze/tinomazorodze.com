import { SimpleLayout } from '@/components/SimpleLayout'
import Helmet from '@/components/helmet'
import { Container } from '@/components/Container'
import Link from 'next/link'

export default function Games() {
  return (
    <>
      <Helmet
        metaTitle="Games | TechTinoe"
        metaDescription="Tips, clips and insights from a midnight gamer"
        pageUrl="https://www.tinomazorodze.com/gaming"
      />
      <Container className="mt-16 sm:mt-32">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The best online video games
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Here is a list of the best games on the internet, mostly because I
            play them 😂. If a game is not on this list then its not one of the
            best. Have any suggestions?{' '}
            <Link href="https://wa.me/+263780105064" className="text-teal-500">
              contact me
            </Link>
            .
          </p>
        </header>
        <div className="mt-16 sm:mt-20"></div>
      </Container>
    </>
  )
}
