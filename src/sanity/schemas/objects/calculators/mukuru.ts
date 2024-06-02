import MukuruLogo from '@/icons/mukuru-logo'
import { defineField } from 'sanity'

export default defineField({
  name: 'mukuruCalculator.object',
  title: 'Mukuru Calculator',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'Mukuru Charges Calculator',
      readOnly: true,
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
    },
  ],
  preview: {
    select: {
      lastUpdated: 'lastUpdated',
    },
    prepare(selection) {
      const { lastUpdated } = selection

      return {
        title: 'Mukuru Charges Calculator 2024',
        subtitle: lastUpdated,
        media: MukuruLogo,
      }
    },
  },
})
