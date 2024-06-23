import { InformationCircleIcon } from '@heroicons/react/24/outline'
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

function Display51({ partner }: any) {
  return (
    <div>
      <div className="text-accent-6 mb-4 text-center font-bold">
        {partner.name}
      </div>
      <Image
        src={urlForImage(partner.image)
          .width(250)
          .height(50)
          .fit('crop')
          .auto('format')
          .url()}
        alt={`${partner.name} Logo`}
        className="mx-auto mb-4 h-auto w-full rounded-full"
        loading="lazy"
        title={partner.name}
        height={50}
        width={250}
      />
      <Link
        href={partner.link}
        target="_blank"
        rel="nofollow"
        className="mb-4 flex w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-tr from-teal-400 via-teal-700 to-teal-400 py-2 text-white shadow-lg hover:bg-gradient-to-tl"
      >
        Learn More
        <ArrowTopRightOnSquareIcon className="ml-2 inline-block w-4" />
      </Link>
    </div>
  )
}

function Display11({ partner }: any) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Image
        src={urlForImage(partner.image)
          .width(100)
          .height(100)
          .fit('crop')
          .auto('format')
          .url()}
        alt={`${partner.name} Logo`}
        className="mx-auto mb-4 h-[100px] w-[100px]"
        loading="lazy"
        title={partner.name}
        height={100}
        width={100}
      />
      <div className="flex flex-col items-end">
        <div className="text-accent-6 mb-4 line-clamp-1 text-center text-sm font-bold">
          {partner.name}
        </div>

        <Link
          href={partner.link}
          target="_blank"
          rel="nofollow"
          className="mb-4 flex w-fit cursor-pointer items-center justify-center rounded-md bg-gradient-to-tr from-teal-400 via-teal-700 to-teal-400 px-2 py-2 text-sm text-white shadow-lg hover:bg-gradient-to-tl"
        >
          Learn More{' '}
          <span className="sr-only" aria-hidden="true">
            About {partner.name}
          </span>
          <ArrowTopRightOnSquareIcon className="ml-2 inline-block w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function blockPartnersCard(props: any) {
  const { partners } = props

  return (
    <div className="mb-4 rounded-md bg-zinc-100 p-2 dark:bg-zinc-800">
      <div className="flex w-full items-center justify-between">
        <div></div>
        <div className="mx-auto">
          <span className="text-sm">Tino&#39;s Top Picks</span>
          <InformationCircleIcon className="ml-1 inline-block w-4" />
        </div>
      </div>
      <div className="custom-scrollbar-h overflow-x-auto">
        <ul className="mx-auto flex w-fit space-x-4 py-2">
          {partners.map((partner: any, index: any) => (
            <li
              key={index}
              className="h-[350px] w-[300px] rounded-md border border-zinc-300 bg-white p-4 dark:border-zinc-600 dark:bg-zinc-900"
            >
              {partner.imageRatio === '1x1' ? (
                <Display11 partner={partner} />
              ) : (
                <Display51 partner={partner} />
              )}
              <div className="text-accent-6 flex justify-between border-b border-zinc-300 pb-2 text-sm dark:border-zinc-600">
                <div>Starting Price in Zimbabwe</div>
                <div className="font-bold">{partner.startingPrice}</div>
              </div>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400">
                {partner.features.map((feature: any, index: any) => (
                  <li key={index} className="flex justify-between py-2">
                    <div>{feature}</div>
                    <CheckCircleIcon className="mr-2 inline-block w-4 text-green-700" />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
