import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL'
        },
        {
          name: 'dofollow',
          type: 'boolean',
          title: 'Do follow'
        }
      ]
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start date'
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End date'
    }

  ]
})
