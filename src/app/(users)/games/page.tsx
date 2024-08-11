import { Container } from '@/components/Container'
import Link from 'next/link'
import { preparePageMetadata } from '@/app/lib/metadata'
import { GameType } from '@/types'
import GamesList from '@/app/_components/games-list'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Games | TechTinooe',
    description: 'Tips, clips and insights from a midnight gamer',
    pageUrl: '/games',
    imageUrl: '',
  })

const games = [
  {
    name: 'Dota 2',
    price: 'FREE TO PLAY',
    rating: 5,
    images: [
      {
        id: 1,
        name: 'Dota 2 Loading Screen',
        src: '/assets/dota-1.webp',
        alt: 'Dota 2 Loading Screen.',
      },
      {
        id: 2,
        name: 'Dota 2 Home Screen',
        src: '/assets/dota-2.webp',
        alt: 'Dota 2 Home Screen',
      },
      {
        id: 3,
        name: 'Dota 2 Gameplay',
        src: '/assets/dota-3.webp',
        alt: 'Dota 2 Gameplay.',
      },
      {
        id: 4,
        name: 'Dota 2 Heroes',
        src: '/assets/dota-4.webp',
        alt: 'Dota 2 Heroes.',
      },
    ],
    description: `
    <p>Dota 2 is a fantasy-style game where two teams of five players each compete to destroy the opposing team's base. The teams occupy opposite ends of a map, with each base containing an Ancient that must be destroyed to win. Players control characters known as 'heroes', each with unique abilities that can be enhanced throughout the game by gaining experience and acquiring items.</p>
  `,
    downloadLink: 'https://store.steampowered.com/app/570/Dota_2/',
    details: [
      {
        name: 'Features',
        items: [
          'Over 120 unique heroes, each with distinct abilities and roles.',
          'A single primary map divided into three lanes with various strategic locations.',
          "A wide range of items to enhance heroes' abilities and stats.",
          'Diverse roles like carry, support, mid-laner, off-laner, and roaming.',
          'Gameplay Mechanics: Includes last-hitting, denying, jungling, and warding.',
          'Various game modes such as All Pick, Captains Mode, and Turbo Mode.',
        ],
      },
    ],
  },
  {
    name: 'Software Inc',
    price: '$22.99 (BETA)',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Software Inc Screenshot',
        src: '/assets/software-inc-1.png',
        alt: 'Software Inc Screenshot.',
      },
      {
        id: 2,
        name: 'Software Inc Screenshot',
        src: '/assets/software-inc-2.png',
        alt: 'Software Inc Screenshot',
      },
      {
        id: 3,
        name: 'Software Inc Screenshot',
        src: '/assets/software-inc-3.png',
        alt: 'Software Inc Screenshot.',
      },
      {
        id: 4,
        name: 'Software Inc Screenshot',
        src: '/assets/software-inc-4.png',
        alt: 'Software Inc Screenshot.',
      },
      {
        id: 4,
        name: 'Software Inc Screenshot',
        src: '/assets/software-inc-5.png',
        alt: 'Software Inc Screenshot.',
      },
    ],
    description: `
    <p>Software Inc is a business simulation game developed by Coredumping, where players manage a software company. In this game, players build and design offices, manage staff, develop software products, and handle the business aspects of running a tech company. The game provides a detailed simulation, allowing players to experience the challenges and rewards of the tech industry.</p>
  `,
    downloadLink: 'https://store.steampowered.com/app/362620/Software_Inc/',
    details: [
      {
        name: 'Features',
        items: [
          'Office Design: Construct and design custom office buildings.',
          'Staff Management: Hire, train, and manage employees.',
          'Employee Needs: Maintain employee satisfaction and work-life balance.',
          'Product Development: Create various software products like operating systems and games.',
          'Project Management: Oversee projects from concept to release.',
          'Research and Innovation: Invest in new technologies and features.',
          'Marketing and Sales: Plan and execute marketing campaigns.',
          'Financial Management: Handle budgeting, investments, and pricing.',
        ],
      },
    ],
  },
] satisfies GameType[]

export default function Games() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The best online video games
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Here is a list of the best games on the internet, mostly because I
            play them 😂. If a game is not on this list then its not one of the
            best. Have any suggestions?{' '}
            <Link
              href="https://wa.me/+263780105064"
              className="text-yellow-500"
            >
              contact me
            </Link>
            .
          </p>
          <Link
            href="https://chat.whatsapp.com/HnnA2CAqxOx68IcnVrGNAa"
            target="_blank"
            className="mx-auto mt-8 block w-fit rounded-full border-2 border-yellow-500 px-4 py-2 hover:bg-yellow-500"
          >
            Join Zim Gamers Community
          </Link>
        </header>
        <div className="mt-16 flex flex-col gap-16 sm:mt-20">
          {games.map((game, i) => (
            <GamesList key={i} product={game} />
          ))}
        </div>
      </Container>
    </>
  )
}
