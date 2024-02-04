import { defineField } from 'sanity'

export default defineField({
  name: 'question',
  title: 'FAQ Question',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
