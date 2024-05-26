import { ArticleType } from '@/lib/article'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type ProductListingProps = {
  articleProducts: Pick<ArticleType, 'products'>
}

export default function ProductListing(props: ProductListingProps) {
  const { articleProducts } = props
  const products = articleProducts.products
  const [showAll, setShowAll] = useState(false)

  const initialDisplayCount = 3

  if (!products || products.length === 0) {
    return <p>No products available.</p>
  }

  const productsToShow = showAll
    ? products
    : products.slice(0, initialDisplayCount)

  return (
    <div className="py-8">
      <ul className="pb-2">
        {productsToShow.map((product) => (
          <li
            key={product.name}
            className="mb-8 border-b-2 border-dotted border-slate-400 pb-4 dark:border-slate-600"
          >
            <div className="flex flex-row-reverse items-center gap-4 md:flex-row">
              <Image
                src={urlForImage(product.image).width(100).height(100).url()}
                height={100}
                width={100}
                alt={product.name}
                className="h-auto w-[50px] rounded-md"
              />
              <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
                <div>
                  <span className="block font-bold">{product.name}</span>
                  <span className="block text-sm">{product.bestFor}</span>
                </div>
                <Link
                  href={product.link.url}
                  target="_blank"
                  rel={product.link.dofollow ? 'dofollow' : 'noopener nofollow'}
                  className="block w-[190px] rounded-md bg-teal-500 py-2 text-center text-sm font-medium text-white hover:bg-teal-700"
                >
                  {product.link.text}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {products.length > initialDisplayCount && (
        <div
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer text-sm font-medium text-teal-600"
        >
          {showAll
            ? 'Show Less'
            : `Show More (${products.length - initialDisplayCount} products)`}
        </div>
      )}
    </div>
  )
}
