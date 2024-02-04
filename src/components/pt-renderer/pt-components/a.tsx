import { ArticleType } from "@/lib/article";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function annotationLinkEmail(props: any) {
  return (
    <Link href={`mailto:${props.email}`}
      rel='nofollow' target="_blank"
      className="text-[#669df6] hover:text-opacity-90 inline">
      {props.children}
    </Link>
  )
}

function annotationLinkExternal(props: any) {
  const { url, dofollow, children } = props;
  return (
    <Link href={url}
      rel={dofollow ? 'dofollow' : 'nofollow'}
      target="_blank"
      className="text-[#669df6] hover:text-opacity-90 inline">
      {children}
    </Link>
  )
}

function annotationLinkInternal(props: any, articles: ArticleType[]) {
  const { internalPage, children } = props;
  const article: ArticleType = articles.find(article => article._id === internalPage._ref)!
  return (
    <span className="group relative inline">
      <span
        className="text-[#669df6] hover:text-opacity-90 inline">
        {children}
      </span>
      {/* Article Preview On Link Hover */}
      <Suspense fallback={"...Loading"}>
        <Link href={`/blog/${article.slug.current}`} className="group-hover:block bg-primary absolute z-50 hidden sm:left-0 w-[220px]" aria-hidden="true">
          <span className="block rounded-lg shadow-md border border-accent-2">
            <span className="block">
              <Image
                src={urlForImage(article.seo.image).width(280).height(158).url()}
                alt={`${article.name} - Tino Mazorodze`}
                className="h-auto w-full rounded-t-lg"
                loading="eager"
                title={article.name}
                height={157.5}
                width={280}
              />
            </span>
            <span className="p-4 block">
              <span className="text-lg font-bold">{article.name}</span>
              <span className="mt-2">
                <span className="text-accent-4 text-sm line-clamp-3">{article.seo.description}</span>
              </span>
              <span className="mt-2 flex justify-end">
                <span className="text-sm font-medium text-[#669df6] hover:text-opacity-90">
                  Read more
                </span>
              </span>
            </span>
          </span>
        </Link>
      </Suspense>

    </span>
  )
}

const annotationLinks = (articles: ArticleType[]) => {
  return {
    annotationLinkInternal: (props: any) => annotationLinkInternal(props, articles),
    annotationLinkExternal,
    annotationLinkEmail,
  };
};

export default annotationLinks;
