import Superscript from '@/sanity/components/sup'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { ChevronUpIcon } from '@sanity/icons'
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
      of: [
        {
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
                  marks: {
                    decorators: [
                      {
                        title: 'Italic',
                        value: 'em',
                      },
                      {
                        title: 'Strong',
                        value: 'strong',
                      },
                      {
                        title: 'Underline',
                        value: 'underline',
                      },
                      {
                        title: 'Code',
                        value: 'code',
                      },
                      {
                        title: 'Sup',
                        value: 'sup',
                        icon: ChevronUpIcon,
                        component: Superscript,
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare(selection) {
      const { title, questions } = selection
      return {
        title: title,
        media: QuestionMarkCircleIcon,
        subtitle: `${questions.length} questions`,
      }
    },
  },
})
