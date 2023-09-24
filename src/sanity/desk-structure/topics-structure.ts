import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import { CaseIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Topics')
    .icon(CaseIcon)
    .child(
      S.documentTypeList('topic')
        .title('Topic')
        .child((id) =>
          S.document()
            .schemaType('topic')
            .documentId(id))),
)
