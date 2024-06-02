import { ArticleType } from '@/lib/article'
import { LinkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function TblContents({ article }: { article: ArticleType }) {
  return (
    <div className="mb-5 w-full rounded-md border border-zinc-300 bg-zinc-100  text-sm dark:border-zinc-600 dark:bg-zinc-800">
      <span className="mb-3 block border-b border-zinc-300 p-3 text-center text-lg font-[500] md:p-8 dark:border-zinc-600">
        Table of Contents
      </span>
      <div className="p-3 md:p-8">
        <nav id="tbl_contents">
          {article.subHeadings?.map((subHeading, index: any) => (
            <Link
              key={index}
              href={`#${encodeURIComponent(subHeading.title)}`}
              className="line mb-4 flex items-center text-[15px] hover:font-semibold hover:text-teal-700"
            >
              {subHeading.type === 'h2' && (
                <div className="mr-2 h-4 w-4">
                  <LinkIcon className="h-4 w-4" />
                </div>
              )}

              {subHeading.type === 'h3' && (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
              )}
              {subHeading.type === 'h4' && (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
              )}

              <span>{subHeading.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
