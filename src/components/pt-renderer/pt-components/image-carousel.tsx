import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

export default function imageCarouselModule(props: any) {
  const { images, imageCredits } = props

  return (
    <div className="mb-4">
      <div>
        <div className="mb-4 block rounded-xl">
          <Image
            src={urlForImage(images[0].image).width(1280).height(720).url()}
            alt={`${images[0].alt} - Tino Mazorodze Blog`}
            className="h-auto w-full rounded-xl"
            loading="lazy"
            title={images[0].alt}
            height={720}
            width={1280}
          />
        </div>
        <div className="hidden gap-4 md:flex ">
          {images.slice(1).map((image: any) => (
            <div key={image.alt}>
              <Image
                src={urlForImage(image.image).width(1280).height(720).url()}
                alt={`${image.alt} - Tino Mazorodze Blog`}
                className="h-auto w-full rounded-md"
                loading="lazy"
                title={image.alt}
                height={720}
                width={1280}
              />
            </div>
          ))}
        </div>
      </div>
      {imageCredits && (
        <small className="text-accent-5">
          {'('}Image Credit: {imageCredits}
          {')'}
        </small>
      )}
    </div>
  )
}
