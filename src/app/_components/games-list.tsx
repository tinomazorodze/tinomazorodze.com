'use client'

import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { GameType } from '@/types'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function GamesList({ product }: { product: GameType }) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        className="h-full w-full object-cover object-center"
                        fill
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-yellow-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="aspect-h-9 aspect-w-16 w-full">
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <Image
                    alt={image.alt}
                    src={image.src}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                    fill
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight ">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl tracking-tight ">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        product.rating > rating
                          ? 'text-yellow-500'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="space-y-6 text-base "
              />
            </div>

            <div className="mt-6">
              <div className="mt-10 flex">
                <Link
                  href={product.downloadLink}
                  target="_blank"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Download Game
                </Link>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure key={detail.name} as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm font-medium  group-data-[open]:text-yellow-600">
                          {detail.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-yellow-400 group-hover:text-yellow-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="prose-sm prose pb-6">
                      <ul role="list">
                        {detail.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
