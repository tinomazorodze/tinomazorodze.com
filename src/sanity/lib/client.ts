import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { allArticlesQuery, allProjectsQuery, allTopicsQuery, articleBySlugQuery } from './queries'
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

export async function getArticleBySlug(slug: string): Promise<any> {
  if (client) {
    return (await client.fetch(articleBySlugQuery, { slug })) || {}
  }
  return {}
}

export async function getAllTopics(): Promise<any> {
  if (client) {
    return (await client.fetch(allTopicsQuery)) || {}
  }
  return {}
}

export async function getAllProjects(): Promise<any> {
  if (client) {
    return (await client.fetch(allProjectsQuery)) || {}
  }
  return {}
}
