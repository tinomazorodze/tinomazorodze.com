import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Linkify } from "@/lib/renderer";
import { ArticleType } from "@/lib/article";

export default function Products({
  article
}: {
  article: ArticleType;
}) {
  return (
    <div className="overflow-x-scroll xl:overflow-auto mb-8">
      <ul className="mb-3 flex space-x-4 w-full min-w-[75rem] justify-between">
        {article.products?.map((product, i) => {
          return (
            <li
              className="mx-auto my-5 flex w-[14.3rem] flex-col items-center rounded-md border border-accent-2 bg-accent-1 p-4 text-center text-sm"
              key={i}
            >
              <div
                className="mb-4 flex items-center justify-center overflow-hidden rounded-full bg-primary hover:scale-90"
              >
                <Image
                  src={urlForImage(product.image).width(80).height(80).url()}
                  alt={product.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="mb-4 text-[17px] font-bold line-clamp-1"
                title={product.name}
              >
                {product.name}
              </div>
              <div className="xl:max-h-[8rem] xl:min-h-[7rem]">
                {product.description}
              </div>
              {article.optimizeFor != "reading" && (
                <Link
                  href={product.link.url}
                  target={product.link.dofollow ? "_blank" : "_self"}
                  className="mt-4 mb-4 flex items-center rounded-md bg-gradient-to-tr from-secondaryColor via-primaryColor to-secondaryColor py-[10px] px-5 text-white hover:bg-gradient-to-tl"
                >
                  Learn More &nbsp;
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Link>
              )}
              {article.optimizeFor != "linkClick" && (
                <Link href={`#${Linkify(product.name)}`} className="text-mainColor hover:underline">
                  <span className={article.optimizeFor != "both" ? "text-primaryColor" : ""}>View Details</span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
