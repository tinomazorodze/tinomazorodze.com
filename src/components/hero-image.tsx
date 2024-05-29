import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

export default function HeroImage(props: any) {
  const { alt, image, imageCredits } = props

  return (
    <div className="mb-4">
      <div className="mb-1 block rounded-xl">
        <Image
          src={urlForImage(image).width(800).height(450).quality(70).url()}
          alt={alt}
          className="h-auto w-full rounded-xl"
          title={alt}
          sizes="100vw"
          height={450}
          width={800}
          priority
        />
      </div>
      {imageCredits && (
        <small className="text-zinc-600">
          {'('}Image Credit: {imageCredits}
          {')'}
        </small>
      )}
    </div>
  )
}
