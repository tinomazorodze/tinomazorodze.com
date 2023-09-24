import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { defineField } from 'sanity';

export default defineField({
  name: 'prosCard.object',
  title: 'Pros Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      pros: 'pros',
    },
    prepare(selection) {
      const { title, pros } = selection;
      return {
        title,
        subtitle: `${pros.length} pros`,
        media: ShieldCheckIcon,
      };
    },
  },
});
