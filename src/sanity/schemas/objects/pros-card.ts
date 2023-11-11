import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { defineField } from 'sanity';

export default defineField({
  name: 'prosCard.object',
  title: 'Pros Card',
  type: 'object',
  fields: [
    {
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      pros: 'pros',
    },
    prepare(selection) {
      const { pros } = selection;
      return {
        title: "Advantages",
        subtitle: `${pros.length} pros`,
        media: ShieldCheckIcon,
      };
    },
  },
});
