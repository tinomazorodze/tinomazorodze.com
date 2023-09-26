import { LinkIcon } from '@heroicons/react/24/solid';
import { ArticleType } from '@/lib/article';
import Link from 'next/link';

export default function TblContents({ article }: { article: ArticleType }) {
  return (
    <div className="bg-accent-1 border-accent-2 mb-5 w-full rounded-md border p-3 text-sm">
      <span className="mb-3 block text-lg font-[500]">Table of Contents</span>
      <div className='max-h-[400px] overflow-y-auto custom-scrollbar pr-2'>
        <nav id="tbl_contents">
          {article.subHeadings?.map((subHeading: any, index: any) => (
            <Link
              key={index}
              href={`#${encodeURIComponent(subHeading.title)}`}
              className="hover:text-primaryColor hover:font-semibold mb-3 text-[15px] flex items-center line"
            >
              {subHeading.type === "h2" && (
                <div className="h-4 w-4 mr-2">
                  <LinkIcon className="h-4 w-4" />
                </div>
              )}

              {subHeading.type === "h3" && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
              {subHeading.type === "h4" && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}

              <span>{subHeading.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
