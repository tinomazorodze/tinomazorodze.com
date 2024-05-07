import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {
  allArticlesQuery,
  allGamesQuery,
  allProjectsQuery,
  articleBySlugQuery,
  gameAndRelatedGamesQuery,
} from './queries'
import { SanityClient } from 'sanity'

export function getClient(): SanityClient {
  return createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })
}

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export default client

export async function getAllArticles(): Promise<any> {
  if (client) {
    return (await client.fetch(allArticlesQuery)) || {}
  }
  return {}
}

export async function getAllGames(): Promise<any> {
  if (client) {
    return (await client.fetch(allGamesQuery)) || {}
  }
  return {}
}

export async function getArticleBySlug(slug: string): Promise<any> {
  if (client) {
    return (await client.fetch(articleBySlugQuery, { slug })) || {}
  }
  return {}
}

export async function getAllProjects(): Promise<any> {
  if (client) {
    return (await client.fetch(allProjectsQuery)) || {}
  }
  return {}
}

export async function getGameAndRelatedGames(slug: string): Promise<any> {
  if (client) {
    return client.fetch(gameAndRelatedGamesQuery, { slug }) || {}
  }
  return {}
}
