import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import PtRenderer from '..';
import { ArticleType } from '@/lib/article';

export default function blockGreenCard(props: any, articles: ArticleType[]) {
  const { title, body } = props;
  return (
    <aside className="width-full bg-accent-2  border-2 border-primaryColor rounded-xl my-8 relative p-4">
      <div className="absolute left-1/2 -translate-x-[50%] top-0 -translate-y-4 rounded-full grid place-content-center w-10 h-10 border-2 border-primaryColor bg-accent-2">
        <ShieldCheckIcon className="text-primaryColor w-8 h-8" />
      </div>
      <span className="block text-primaryColor font-bold mb-2">
        {title}
      </span>
      <div className='text-accent-6 text-sm'>
        <PtRenderer body={body} articles={articles} />
      </div>
    </aside>
  );
}
