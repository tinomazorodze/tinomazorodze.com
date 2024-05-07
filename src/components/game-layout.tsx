import { GameType } from '@/lib/game'
import { Container } from './Container'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Star } from '@/icons'
import Link from 'next/link'

export default function GameLayout({
  game,
  relatedGames,
}: {
  game: GameType
  relatedGames: Pick<GameType, '_id' | 'name' | 'seo'>[]
}) {
  const sumOfRatings = Object.values(game.ratings).reduce(
    (acc, rating) => acc + rating,
    0,
  )
  const numberOfRatings = Object.values(game.ratings).length
  const averageRating = sumOfRatings / numberOfRatings

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {game.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {game.intro}
          </p>
        </header>
        <div className="mt-16 sm:mt-20"></div>
      </Container>
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <Image
          src={urlForImage(game.seo.image).width(1280).height(720).url()}
          alt={game.seo.title}
          height={720}
          width={1280}
        />
      </div>
      <Container className="mt-16 sm:mt-32">
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[50%_50%] md:gap-12 lg:-mt-24">
          <div>
            <h2 className="mb-8 text-4xl">About the game</h2>
            <p>{game.about}</p>
          </div>
          <div>
            <div className="mb-2 flex items-center">
              <div className="grid grid-cols-5 space-x-1">
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <Star
                      key={i}
                      color={
                        i < Math.round(averageRating)
                          ? 'teal'
                          : 'rgba(136, 136,136,.4)'
                      }
                    />
                  ))}
              </div>
              <div className="pl-1 text-sm leading-none text-teal-500">
                {averageRating.toFixed(1)}
              </div>
            </div>
            <div className="mb-4 text-zinc-600">
              Based on gameplay, interface etc
            </div>
            <table className="mb-3 w-full max-w-[300px]">
              <tbody>
                {game.generalInfo.map((info, index) => (
                  <tr key={index} className="grid grid-cols-[40%_60%]">
                    <th className="pb-2 pr-2 text-left align-top">
                      {info.tableHeading}
                    </th>
                    <td className="pb-2 text-left align-top">
                      {info.tableData}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-16">
          <span className="text-accent-6 mb-2 block font-bold">
            Popular user tags for this game
          </span>
          <ul className="flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-600 p-1 px-2 text-xs capitalize text-zinc-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-16">
          <h2 className="mb-8 text-4xl">Screenshots</h2>
          <div className="gap-4 md:grid md:grid-cols-[70%_30%]">
            <div className="mb-4 h-[297px] w-full md:mb-0 md:h-[396px]">
              <Image
                src={urlForImage(game.screenshots[0])
                  .height(720)
                  .width(1280)
                  .fit('crop')
                  .url()}
                alt={game.title}
                className="h-full w-full rounded-lg object-cover"
                height={720}
                width={1280}
              />
            </div>
            <div className="flex flex-row gap-4 md:flex-col">
              <div className="h-[142px] w-full md:h-[190px]">
                <Image
                  src={urlForImage(game.screenshots[1])
                    .height(720)
                    .width(1280)
                    .fit('crop')
                    .url()}
                  alt={game.title}
                  className="h-full w-full rounded-lg object-cover"
                  height={720}
                  width={1280}
                />
              </div>
              <div className="h-[142px] w-full md:h-[190px]">
                <Image
                  src={urlForImage(game.screenshots[2])
                    .height(720)
                    .width(1280)
                    .fit('crop')
                    .url()}
                  alt={game.title}
                  className="h-full w-full rounded-lg object-cover"
                  height={720}
                  width={1280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="mb-4 text-4xl">Ratings and Reviews</h2>
          <p className="text-accent-6 mb-8">
            Ratings and reviews are verified and are only from registered users
            on the platform
          </p>
          <div className="mb-8 flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex w-full items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-7xl">{averageRating.toFixed(1)}</span>
                <div className="grid grid-cols-5">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        color={
                          i < Math.round(averageRating!)
                            ? 'teal'
                            : 'rgba(136, 136,136,.4)'
                        }
                      />
                    ))}
                </div>
                <span>5</span>
              </div>
              <div className="block w-full">
                {Object.entries(game.ratings).map(([label, rating]) => (
                  <CustomProgressBar
                    key={label}
                    label={label}
                    percentage={(rating / 5) * 100} // Assuming ratings are on a scale of 0 to 5
                  />
                ))}
              </div>
            </div>
            <Link
              href="https://wa.me/+263780105064"
              className="my-8 block w-full max-w-[250px] rounded-md bg-gradient-to-tr from-teal-400 via-teal-700 to-teal-400 py-3 text-center text-white md:my-0"
            >
              Submit A Review
            </Link>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="mb-4 text-4xl">{game.name} Guides and Tips</h2>
          <ul>
            {relatedGames.map((game, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="border-accent-2 group flex gap-4 border-b py-8 md:gap-8"
                >
                  <Image
                    src={urlForImage(game.seo.image)
                      .width(1280)
                      .height(720)
                      .url()}
                    alt={game.name}
                    height={720}
                    width={1280}
                    className="h-[70px] w-fit rounded-md md:h-[100px]"
                  />
                  <div>
                    <div className="mb-2 flex items-center">
                      <span
                        className={`mr-2 block rounded-md p-1 text-sm ${Math.random() < 0.5 ? 'bg-blue' : 'bg-pink'}`}
                      >
                        Game
                      </span>
                      <span>date</span>
                    </div>
                    <span className="mb-2 block group-hover:underline md:text-4xl">
                      {game.seo.title}
                    </span>
                    <span className="mb-2 hidden md:block">
                      {game.seo.description}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}

const CustomProgressBar = ({
  label,
  percentage,
}: {
  label: string
  percentage: number
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-full max-w-[240px] flex-grow">
        <div className="h-2.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-600">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full rounded-full rounded-tl-full bg-[#008080]"
          ></div>
        </div>
      </div>
      <div className="text-zinc-500">{label}</div>
    </div>
  )
}
