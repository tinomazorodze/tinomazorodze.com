import defineStructure from '../utils/defineStructure'
import { JoystickIcon } from '@sanity/icons'

export default defineStructure<any>((S) =>
  S.listItem()
    .title('Games')
    .icon(JoystickIcon)
    .child(
      S.documentTypeList('game')
        .title('Game')
        .child((id) => S.document().schemaType('game').documentId(id)),
    ),
)
