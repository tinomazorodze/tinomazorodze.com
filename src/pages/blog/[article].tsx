import ArticleHelmet from "@/components/helmet/article-helmet";
import ArticleLayout from "@/components/layout/article-layout";
import { ArticleType, MiniArticleType } from "@/lib/article";
import { getAllArticles, getAllTopics, getArticleBySlug } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

type ArticleProps = {
  article: ArticleType
  articles: MiniArticleType[]
  topic: string;
}

export default function Article(props: ArticleProps) {
  const { article, articles, topic } = props;
  return (
    <>
      <ArticleHelmet
        articleName={article.name}
        articleURL={`/blog/${article.slug.current}`}
        createdAt={article._createdAt}
        metaDescription={article.seo.description}
        metaImage={urlForImage(article.seo.image).url()}
        metaTitle={article.seo.title}
        updatedAt={article._updatedAt}
      />
      <ArticleLayout article={article} articles={articles} topic={topic} />
    </>
  )
}

type StaticPathItem = {
  params: {
    article: string;
  };
};

export async function getStaticPaths() {

  const articles = await getAllArticles()
  const paramsList: StaticPathItem[] = articles
    .map((article: ArticleType) => ({
      params: { article: article.slug.current },
    }));

  return {
    paths: paramsList,
    fallback: false,
  };
}

type ContextType = {
  params: {
    article: string;
  };
};

export async function getStaticProps(context: ContextType) {
  const articleSlug: string = context.params.article;
  const [articles, article, topics]: [MiniArticleType[], ArticleType, any] = await Promise.all([
    getAllArticles(),
    getArticleBySlug(articleSlug),
    getAllTopics(),
  ])

  const topic = topics.find((topic: any) => topic._id == article.topic._ref);

  return {
    props: {
      articles,
      article,
      topic,
    }
  }
}
