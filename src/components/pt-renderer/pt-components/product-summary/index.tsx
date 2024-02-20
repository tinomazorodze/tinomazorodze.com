import React from 'react'
import { Linkify } from '@/lib/renderer'
import Link from 'next/link'
import { ChevronRightIcon, TagIcon } from '@heroicons/react/24/solid'
import Accordion, { AccordionType } from './accordion'
import Rating from './rating'
import Image from 'next/image'

type ProductSummaryProps = {
  title: string
  award: string
  tagline: string
  rating: number
  why: string[]
  pros: string[]
  cons: string[]
  details: string[]
}

export default function blockProductSummary(props: ProductSummaryProps) {
  const { title, award, tagline, rating, why, pros, cons, details } = props
  const titleLink = Linkify(title)

  const data: AccordionType = {
    answers: {
      why: why,
      pros: pros,
      cons: cons,
      details: details,
    },
  }

  return (
    <>
      <div className="border-accent-2 mx-auto my-[1.5rem] overflow-hidden rounded-md border shadow-md">
        <div className="from-cyan via-mainColor to-cyan mb-5 grid h-[3.125rem] w-full place-content-center bg-gradient-to-tl">
          <div className="font-sm bg-primary text-mainColor w-fit rounded-md px-[.75rem] py-[.4rem]">
            {award}
          </div>
        </div>
        <div className="flex w-full flex-col justify-between pb-5 md:flex-row">
          <div className="flex w-fit px-4">
            <div className="mx-6 w-[100px]">
              <div className="mb-2 block w-[100px]">
                <Image
                  src={`https://tdmarena.imgix.net/assets/products/${titleLink}.webp?w=100&h=100&fit=crop&auto=format`}
                  alt={`${title} - Tino Mazorodze`}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="border-accent-2 rounded-lg border"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="max-w-xs">
              <div className="text-mainColor mb-1 text-lg font-bold">
                {title}
              </div>
              <i className="text-sm ">
                <q>{tagline}</q>
              </i>
            </div>
          </div>
          <div className="mx-auto mt-4 w-fit md:mx-0 md:mt-0">
            <Rating rating={rating} />
          </div>
        </div>
        <div>
          <div className="border-y-accent-3 mb-4 border-y border-dashed px-4 pt-2">
            <Accordion answers={data.answers} />
          </div>
          <div className="mb-7 text-center">
            <div className="mx-auto flex w-fit flex-col items-center md:flex-row">
              <Link
                href={`#`}
                className="from-cyan via-mainColor to-cyan mt-4 flex w-[200px] items-center justify-center rounded-md bg-gradient-to-tl px-4 py-2 text-[.9rem] text-white hover:bg-gradient-to-tr md:mr-3 md:text-[.95rem]"
              >
                <span className="mr-2 line-clamp-1">View Deals &nbsp;</span>
                <div className="h-4 w-4">
                  <TagIcon className="h-4 w-4" />
                </div>
              </Link>
              <Link
                href={`#`}
                className="border-mainColor text-mainColor mt-4 flex w-[200px]  items-center justify-center rounded-md border py-2 text-[.9rem] hover:underline md:text-[.95rem]"
              >
                See Full Detail &nbsp;
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
