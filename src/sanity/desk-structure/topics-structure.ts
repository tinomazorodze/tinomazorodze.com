import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import { TagIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Topics')
    .icon(TagIcon)
    .child(
      S.documentTypeList('topic')
        .title('Topic')
        .child((id) =>
          S.document()
            .schemaType('topic')
            .documentId(id))),
)
