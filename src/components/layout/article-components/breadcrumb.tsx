import { ArticleType } from '@/lib/article';
import Link from 'next/link';

export default function BreadCrumb({ article }: { article: ArticleType }) {
  return (
    <div className="border-b border-b-accent-2">
      <div className="container w-full mx-auto  text-[.8rem] line-clamp-1 leading-8 px-4 md:px-0">
        <Link href="/" className="hover:text-primaryColor">
          Home &nbsp;
        </Link>{' '}
        <span className="text-accent-3">/</span>
        &nbsp;&nbsp;
        <Link href={`/blog`} className="hover:text-primaryColor capitalize">
          Blog
        </Link>{' '}
        <span className="text-accent-3">/</span>
        &nbsp;&nbsp;
        <span>{article.name}</span>
      </div>
    </div>
  );
}
