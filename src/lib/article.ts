export type ArticleType = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  topic: {
    _ref: string;
  };
  seo: {
    title: string;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  intro: string;
  subHeadings: {
    title: string;
    type: string;
    _key: string;
  }[];
  body: any;
  relatedArticles: {
    _key: string;
    _ref: string;
  }[];
}

export type MiniArticleType = {
  _id: string;
  title: string;
  slug: string;
  topicRef: string;
  _updatedAt: string;
  seo: {
    title: string;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
}
