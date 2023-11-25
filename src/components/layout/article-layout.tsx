import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';
import Banner from '../banner';
import { ArticleType, MiniArticleType } from '@/lib/article';
import BreadCrumb from './article-components/breadcrumb';
import Hero from './article-components/hero';
import ScrollTop from './article-components/scroll-top';
import HeroImage from './article-components/hero-image';
import TblContents from './article-components/tbl-contents';
import PtRenderer from '../pt-renderer';
import SideBar from './article-components/side-bar';
import Products from './article-components/products';
import RelatedArticles from './article-components/related-articles';

type BaseLayoutProps = {
  articles: MiniArticleType[];
  article: ArticleType;
  topic: string;
}

export default function ArticleLayout(props: BaseLayoutProps) {
  const { articles, article, topic } = props;
  return (
    <ThemeProvider>
      {/* <Banner /> */}
      <Header />
      <BreadCrumb article={article} />
      <Hero article={article} />
      <div className="container mx-auto w-full pb-6 px-4 md:px-0">
        {article.hasProductListing && (
          <Products article={article} />
        )}
        <div className="grid-cols-[100%] grid min-w-full md:grid-cols-[72%_28%]">
          <div className="md:pr-6">
            <HeroImage alt={`${article.name} | Tino Mazorodze`} image={article.seo.image} />
            <div className="block md:hidden">
              <TblContents article={article} />
            </div>
            <PtRenderer body={article.body} articles={articles} />
          </div>

          <div className="hidden p-2 md:block">
            <SideBar article={article} />
          </div>
        </div>
        <RelatedArticles article={article} articles={articles} />
      </div>
      <ScrollTop />
      <Footer />
    </ThemeProvider>
  )
}
