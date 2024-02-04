import { ShieldExclamationIcon } from '@heroicons/react/24/solid';
import { defineField } from 'sanity';

export default defineField({
  name: 'consCard.object',
  title: 'Cons Card',
  type: 'object',
  fields: [
    {
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      cons: 'cons',
    },
    prepare(selection) {
      const { cons } = selection;
      return {
        title: "Disadvantages",
        subtitle: `${cons.length} cons`,
        media: ShieldExclamationIcon,
      };
    },
  },
});
