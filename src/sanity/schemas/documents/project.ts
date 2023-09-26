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
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{ type: 'image' }]
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
    },
    {
      name: 'testimonial',
      type: 'object',
      title: 'Testimonial',
      fields: [
        {
          name: 'quote',
          type: 'text',
          title: 'Quote'
        },
        {
          name: 'authorName',
          type: 'string',
          title: 'Author Name'
        },
        {
          name: 'authorTitle',
          type: 'string',
          title: 'Author Title'
        },
        {
          name: 'companyName',
          type: 'string',
          title: 'Company Name'
        },
        {
          name: 'authorImage',
          type: 'image',
          title: 'Author Image'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'gallery.0'
    }
  }
})
