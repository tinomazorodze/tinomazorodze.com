import { SimpleLayout } from '@/components/SimpleLayout'
import Helmet from '@/components/helmet'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { getAllGames } from '@/sanity/lib/client'
import { GameType } from '@/lib/game'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { PlayIcon } from '@sanity/icons'
import { EyeIcon } from '@heroicons/react/24/solid'

type PageProps = {
  games: Pick<
    GameType,
    '_id' | 'name' | 'slug' | '_updatedAt' | 'seo' | 'plainCoverImage'
  >[]
}

export default function Games({ games }: PageProps) {
  return (
    <>
      <Helmet
        metaTitle="Gaming | TechTinoe"
        metaDescription="Tips, clips and insights from a midnight gamer"
        pageUrl="https://www.tinomazorodze.com/games"
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
        <div className="mt-16 sm:mt-20 ">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game, i) => (
              <Link
                href={`/games/a/${game.slug.current}`}
                className="group relative h-[300px] w-full"
                key={i}
              >
                <div className="h-full">
                  <Image
                    alt={game.name}
                    height={1280}
                    className="h-full w-full object-cover"
                    width={720}
                    src={urlForImage(game.plainCoverImage)
                      .width(1280)
                      .height(720)
                      .url()}
                  />
                </div>
                <div className="absolute left-0 right-0 top-0 h-full w-full bg-white/70 backdrop-blur-sm group-hover:bg-blue-100 dark:bg-black/70 dark:group-hover:bg-blue-950">
                  <div className="p-4 font-medium">{game.name}</div>
                  <div className="h-[150px] w-full bg-slate-600">
                    <Image
                      alt={game.name}
                      height={1280}
                      className="h-full w-full object-cover"
                      width={720}
                      src={urlForImage(game.plainCoverImage)
                        .width(1280)
                        .height(720)
                        .url()}
                    />
                  </div>
                  <div className="flex w-full items-center gap-2 p-4">
                    <div className="bg-teal-600 px-4 py-3">
                      <EyeIcon className="h-4 w-4 text-white" />
                    </div>
                    <div className="line-clamp-2 p-0 text-sm text-black/70 dark:text-white/70">
                      {game.seo.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const [games] = await Promise.all([getAllGames()])

  return {
    props: {
      games,
    },
  }
}
