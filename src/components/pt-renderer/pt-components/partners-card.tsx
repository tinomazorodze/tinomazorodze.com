import { InformationCircleIcon } from '@heroicons/react/24/outline'
import {
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid'
import { Linkify } from '@/lib/renderer'
import { urlForImage } from '@/sanity/lib/image'
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'

export default function blockPartnersCard(props: any) {
  const { partners, title } = props

  return (
    <aside className="bg-accent-2 mb-4 rounded-md p-2">
      <div className="flex w-full items-center justify-between">
        <div className="from-secondaryColor via-primaryColor to-secondaryColor flex items-center bg-gradient-to-tr bg-clip-text text-sm font-bold text-transparent">
          {title}
          <CheckBadgeIcon className="text-primaryColor ml-1 inline-block w-4" />
        </div>
        <div className="text-accent-6 hidden text-right sm:block">
          <span className="text-sm">Tino&#39;s Top Picks</span>
          <InformationCircleIcon className="ml-1 inline-block w-4" />
        </div>
      </div>
      <div className="md:custom-scrollbar-h overflow-x-auto">
        <div className="mx-auto flex w-fit space-x-4 py-2">
          {partners.map((partner: any, index: any) => (
            <div
              key={index}
              className="border-accent-3 bg-primary h-[350px] w-[220px] rounded-md border p-4 md:w-[280px]"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="from-secondaryColor via-primaryColor to-secondaryColor mr-2 grid h-6 w-6 place-content-center rounded-full bg-gradient-to-tr text-sm text-white">
                  {index + 1}
                </span>
                <span className="text-accent-6 font-bold">{partner.name}</span>
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
                className="from-secondaryColor via-primaryColor to-secondaryColor mb-4 flex w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-tr py-2 text-white shadow-lg hover:bg-gradient-to-tl"
              >
                Learn More
                <ArrowTopRightOnSquareIcon className="ml-2 inline-block w-4" />
              </Link>
              <div className="border-accent-3 text-accent-6 flex justify-between border-b pb-2 text-sm">
                <div>Starting At</div>
                <div className="font-bold">{partner.startingPrice}</div>
              </div>
              <ul className="text-accent-5 text-sm">
                {partner.features.map((feature: any, index: any) => (
                  <li key={index} className="flex justify-between py-2">
                    <div>{feature}</div>
                    <CheckCircleIcon className="text-green mr-2 inline-block w-4" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
