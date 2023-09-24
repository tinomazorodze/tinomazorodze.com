import { groq } from 'next-sanity'

export const allArticlesQuery = groq`*[_type == "article"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  "slug": slug.current,
  _updatedAt,
  seo,
  tag,
}`
export const articleBySlugQuery = groq`{
  "article": *[_type == "article" && slug.current == $slug][0],
  "moreArticles": *[_type == "article" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...5] {
    _id,
    title,
    "slug": slug.current,
    _updatedAt,
    seo,
    tag,
  }
}`
export const allTopicsQuery = groq`*[_type == "topic"]`
