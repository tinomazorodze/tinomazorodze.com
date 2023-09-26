import { StructureResolver } from "sanity/desk";
import articlesStructure from "./articles-structure";
import projectsStructure from "./projects-structure";
import topicsStructure from "./topics-structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      articlesStructure(S, context),
      S.divider(),
      projectsStructure(S, context),
      S.divider(),
      topicsStructure(S, context),
      S.divider(),
    ])
