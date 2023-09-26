import { ArticleType } from '@/lib/article';
import formatDate from "date-fns/format";
import SocialShare from '../social-share';
import siteConfig from '@/content/site.json';
import Image from 'next/image';

export default function Hero({
  article,
}: {
  article: ArticleType;
}) {

  return (
    <section className="container w-full mx-auto my-8 px-4 md:px-0">
      <h1 className="mb-2 md:mb-4 md:text-center text-3xl md:text-5xl font-[500] max-w-3xl mx-auto">
        {article.title}
      </h1>
      <div className="mb-8 flex items-center md:space-x-4 divide-x-2 w-fit md:mx-auto">
        <div className='flex flex-row items-center mr-2 h-fit'>
          <Image
            className='rounded-full mr-2 hidden sm:block'
            src={siteConfig.url.selfie}
            alt={`Tino Mazorodze Avatar`}
            width={45}
            height={45}
          />
          <div>
            <div className='space-x-1 divide-x'>
              <div onClick={() => (window.open(`https://tinomazorodze.com`, "_blank"))}>
                By <span className='underline cursor-pointer'>Tino Mazorodze</span>
              </div>
            </div>
            <span className='text-sm'>
              {formatDate(
                new Date(article._updatedAt),
                "MMMM d, yyyy"
              )}
            </span>
          </div>
        </div>
        <div className="pl-4 h-fit mt-2 md:mt-0">
          <SocialShare title={article.title} />
          <span className="flex items-center mx-auto md:mx-0 text-[12px] w-fit">

          </span>
        </div>
      </div>
      <p className="mb-4 drop-cap">{article.intro}</p>
    </section>
  );
}
