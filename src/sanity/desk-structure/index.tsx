import { StructureResolver } from 'sanity/desk'
import articlesStructure from './articles-structure'
import gamesStructure from './games-structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      articlesStructure(S, context),
      S.divider(),
      gamesStructure(S, context),
      S.divider(),
    ])
