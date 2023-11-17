import Image from "next/image";
import Link from "next/link";
import formatDate from "date-fns/format";
import { ArticleType, MiniArticleType } from "@/lib/article";
import { urlForImage } from "@/sanity/lib/image";

type RelatedArticlesProps = {
  article: ArticleType;
  articles: MiniArticleType[];
}

export default function RelatedArticles(props: RelatedArticlesProps) {
  const { article, articles } = props;

  return (
    <div className="container min-w-full mx-auto py-8">
      <h2 className="text-4xl text-center mb-4">Related Articles</h2>
      <ul className="flex flex-wrap mb-4">
        {article.relatedArticles?.map((relatedArticle) => {
          const article = articles.find((article) => article._id === relatedArticle._ref)!;

          return (
            <li key={article._id} className="w-fit mx-auto mb-4">
              <Link href={`/blog/${article.slug.current}`} >
                <div className="p-5 bg-accent-2 hover:bg-accent-3 w-full max-w-[300px] rounded-md">
                  <Image src={urlForImage(article.seo.image).width(280).height(158).url()}
                    alt={`${article.title}`} height={158} width={280} className="rounded-md" />
                  <div className="text-sm text-accent-6 my-4">
                    {formatDate(
                      new Date(article._updatedAt),
                      "MMMM d, yyyy"
                    )}
                  </div>
                  <div className="font-bold text-lg line-clamp-3">{article.seo.title}</div>
                </div>
              </Link>
            </li>
          );
        }
        )}
      </ul>
    </div>
  )
}
