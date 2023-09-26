import siteConfig from "@/content/site.json";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon, CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { Linkify } from "@/lib/renderer";
import { urlForImage } from "@/sanity/lib/image";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function blockPartnersCard(props: any) {
  const { partners, title } = props;

  return (
    <aside className="mb-4 bg-accent-2 rounded-md p-2">
      <div className="w-full flex justify-between items-center">
        <div className="text-sm font-bold bg-gradient-to-tr from-secondaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent flex items-center">
          {title}
          <CheckBadgeIcon className="w-4 inline-block ml-1 text-primaryColor" />
        </div>
        <div className="text-right text-accent-6 hidden sm:block">
          <span className="text-sm">Tino&#39;s Top Picks</span>
          <InformationCircleIcon className="w-4 inline-block ml-1" />
        </div>
      </div>
      <div className="overflow-x-auto md:custom-scrollbar-h">
        <div className="w-fit flex space-x-4 py-2 mx-auto">
          {partners.map((partner: any, index: any) => (
            <div key={index} className="w-[220px] md:w-[280px] h-[350px] border border-accent-3 rounded-md bg-primary p-4">
              <div className="flex items-center justify-center mb-4">
                <span className="w-6 h-6 mr-2 grid place-content-center text-sm text-white bg-gradient-to-tr from-secondaryColor via-primaryColor to-secondaryColor rounded-full">{index + 1}</span>
                <span className="font-bold text-accent-6">{partner.name}</span>
              </div>
              <Image
                src={urlForImage(partner.image)
                  .width(250)
                  .height(50)
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={`${partner.name} Logo`}
                className="mb-4 h-auto w-full mx-auto rounded-full"
                loading="lazy"
                title={partner.name}
                height={50}
                width={250}
              />
              <Link
                href={partner.link}
                target="_blank"
                rel="nofollow"
                className="flex mb-4 items-center w-full justify-center bg-gradient-to-tr cursor-pointer hover:bg-gradient-to-tl from-secondaryColor via-primaryColor to-secondaryColor rounded-md text-white py-2 shadow-lg">
                Learn More
                <ArrowTopRightOnSquareIcon className="w-4 inline-block ml-2" />
              </Link>
              <div className="flex justify-between border-b border-accent-3 pb-2 text-accent-6 text-sm">
                <div>Starting At</div>
                <div className="font-bold">{partner.startingPrice}</div>
              </div>
              <ul className="text-sm text-accent-5">
                {partner.features.map((feature: any, index: any) => (
                  <li key={index} className="flex justify-between py-2">
                    <div>{feature}</div>
                    <CheckCircleIcon className="w-4 inline-block mr-2 text-green" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
