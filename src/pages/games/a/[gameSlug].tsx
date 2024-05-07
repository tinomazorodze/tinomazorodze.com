import GameLayout from '@/components/game-layout'
import ArticleHelmet from '@/components/helmet/article-helmet'
import { GameType } from '@/lib/game'
import { getAllGames, getGameAndRelatedGames } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

type PageProps = {
  game: GameType
  relatedGames: Pick<GameType, '_id' | 'name' | 'seo'>[]
}

export default function Game({ game, relatedGames }: PageProps) {
  return (
    <>
      <ArticleHelmet
        articleName={game.seo.title}
        articleURL={`/game/a/${game.slug.current}`}
        createdAt={game._createdAt}
        metaDescription={game.seo.description}
        metaImage={urlForImage(game.seo.image).url()}
        metaTitle={game.seo.title}
        updatedAt={game._updatedAt}
      />
      <GameLayout game={game} relatedGames={relatedGames} />
    </>
  )
}

type StaticPathItem = {
  params: {
    gameSlug: string
  }
}

export async function getStaticPaths() {
  const articles = await getAllGames()
  const paramsList: StaticPathItem[] = articles.map((article: GameType) => ({
    params: { gameSlug: article.slug.current },
  }))

  return {
    paths: paramsList,
    fallback: false,
  }
}

type ContextType = {
  params: {
    gameSlug: string
  }
}

export async function getStaticProps(context: ContextType) {
  const slug: string = context.params.gameSlug
  const [{ game, relatedGames }] = await Promise.all([
    getGameAndRelatedGames(slug),
  ])

  return {
    props: {
      game,
      relatedGames,
    },
  }
}
