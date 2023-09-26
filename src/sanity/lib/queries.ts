import { groq } from 'next-sanity'

export const allArticlesQuery = groq`*[_type == "article"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  slug,
  topic,
  _updatedAt,
  seo,
}`
export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0]`
export const allTopicsQuery = groq`*[_type == "topic"]`
export const allProjectsQuery = groq`*[_type == "project"] | order(date desc, _updatedAt desc)`
