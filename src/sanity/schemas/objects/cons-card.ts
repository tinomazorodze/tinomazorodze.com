import { ShieldExclamationIcon } from '@heroicons/react/24/solid';
import { defineField } from 'sanity';

export default defineField({
  name: 'consCard.object',
  title: 'Cons Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      cons: 'cons',
    },
    prepare(selection) {
      const { title, cons } = selection;
      return {
        title,
        subtitle: `${cons.length} cons`,
        media: ShieldExclamationIcon,
      };
    },
  },
});
