import { StructureResolver } from "sanity/desk";
import articlesStructure from "./articles-structure";
import projectsStructure from "./projects-structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      articlesStructure(S, context),
      S.divider(),
      projectsStructure(S, context),
    ])
