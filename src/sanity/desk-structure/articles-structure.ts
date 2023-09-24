import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import { DocumentsIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Articles')
    .icon(DocumentsIcon)
    .child(
      S.documentTypeList('article')
        .title('Article')
        .child((id) =>
          S.document()
            .schemaType('article')
            .documentId(id))),
)
