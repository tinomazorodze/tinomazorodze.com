import Helmet from "@/components/helmet";
import BaseLayout from "@/components/layout";
import { ArticleType } from "@/lib/article";
import { getAllArticles } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import formatDate from "date-fns/format";

type BlogProps = {
  articles: ArticleType[];
}

export default function Blog(props: BlogProps) {
  const { articles } = props;

  return (
    <>
      <Helmet
        metaTitle='Tino&#39;s Coding Blog | Web & Android Development'
        metaDescription='Learn full stack web and android app development from Tino&#39;s Coding Blog.'
        pageUrl='https://www.tinomazorodze.com/blog'
      />
      <BaseLayout>
        <main className="container mx-auto px-4 md:px-0 w-full py-16">
          <h1 className="text-4xl mb-10">Tino&#39;s Coding Blog </h1>
          <ul>
            {articles
              .map((article: ArticleType) => (
                <li key={article._id}>
                  <Link href={`/blog/${article.slug.current}`} className="flex flex-col md:flex-row items-center mb-4 bg-accent-2 p-2 rounded-md w-fit">
                    <Image src={urlForImage(article.seo.image).width(150).height(90).url()}
                      alt={`${article.seo.title} | Wealth Hub`} height={90} width={150} className="mr-2 rounded-md mb-4 md:mb-0" />
                    <div>
                      <div className="text-lg max-w-[340px] line-clamp-2 text-center md:text-left">{article.seo.title}</div>
                      <div className="text-accent-5 mb-2 text-sm text-center md:text-left">{formatDate(
                        new Date(article._updatedAt),
                        "MMMM d, yyyy"
                      )}</div>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </main>
      </BaseLayout>
    </>
  )
}

export async function getStaticProps() {
  const [articles]: [ArticleType[]] = await Promise.all([
    getAllArticles(),
  ])

  return {
    props: {
      articles,
    }
  }
}
