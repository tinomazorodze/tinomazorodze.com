import { ArticleType } from '@/lib/article';
import TblContents from './tbl-contents';

function SideBarWidget() {
  return (
    <div className="border-accent-2 bg-accent-1 mb-5 rounded-md border p-3 text-sm">
      <span>
        <span className="font-semibold">Disclosure: </span>All ratings and reviews are my own opinion. Compensation from the issuer does not affect my rating. I only recommend what I either use myself or endorse.
      </span>
    </div>
  );
}

export default function SideBar({
  article,
}: {
  article: ArticleType;
}) {
  return (
    <div className="relative h-full ">
      <SideBarWidget />
      {article.subHeadings && (
        <div className="sticky top-[5.5rem]">
          <TblContents article={article} />
        </div>
      )}
    </div>
  );
}
