import { groq } from 'next-sanity'

export const allArticlesQuery = groq`*[_type == "article"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  slug,
  tag,
  _updatedAt,
  seo,
}`

export const allGamesQuery = groq`*[_type == "game"] | order(date desc, _updatedAt desc) {
  _id,
  name,
  slug,
  _updatedAt,
  seo,
  plainCoverImage,
}`

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0]`
export const allProjectsQuery = groq`*[_type == "project"] | order(date desc, _updatedAt desc)`

export const gameAndRelatedGamesQuery = groq`
{
  "game": *[_type == "game" && slug.current == $slug] | order(_updatedAt desc) [0],
  "relatedGames": *[_type == "game" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...3] {
    _id,
    name,
    seo
  }
}`
