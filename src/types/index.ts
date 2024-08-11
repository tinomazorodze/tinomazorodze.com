export type GameType = {
  name: string
  price: string
  rating: number
  downloadLink: string
  images: {
    id: number
    name: string
    src: string
    alt: string
  }[]
  description: string
  details: {
    name: string
    items: string[]
  }[]
}
