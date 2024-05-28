import EcocashLogo from '@/icons/ecocash-logo'
import { defineField } from 'sanity'

export default defineField({
  name: 'ecocashCalculator.object',
  title: 'Ecocash Calculator',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'Ecocash Charges Calculator',
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
        title: 'Ecocash Charges Calculator 2024',
        subtitle: lastUpdated,
        media: EcocashLogo,
      }
    },
  },
})
