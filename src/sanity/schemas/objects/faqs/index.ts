import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { defineField } from 'sanity'

export default defineField({
  name: 'faqs.object',
  title: 'FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [
              {
                title: 'Block',
                type: 'block',
                styles: [{ title: 'Normal', value: 'normal' }],
                lists: [],
              },
            ],
          },
        ]
      }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare(selection) {
      const { title, questions } = selection;
      return {
        title: title,
        media: QuestionMarkCircleIcon,
        subtitle: `${questions.length} questions`
      }
    }
  },
})

