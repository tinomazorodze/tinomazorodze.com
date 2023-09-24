import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import { CaseIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Projects')
    .icon(CaseIcon)
    .child(
      S.documentTypeList('project')
        .title('Project')
        .child((id) =>
          S.document()
            .schemaType('project')
            .documentId(id))),
)
