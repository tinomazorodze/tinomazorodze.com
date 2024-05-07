import { DocumentIcon, InfoOutlineIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.max(70).warning(
              'Longer titles may be truncated by search engines',
            ),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: (Rule) =>
            Rule.max(160).warning(
              'Longer descriptions may be truncated by search engines',
            ),
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ],
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      rows: 3,
    },
    {
      name: 'generalInfo',
      title: 'General Information',
      description: 'Players, Developer, Publisher etc.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tableHeading',
              title: 'Table Heading',
              type: 'string',
            },
            {
              name: 'tableData',
              title: 'Table Data',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'tableHeading',
              subtitle: 'tableData',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle,
                media: InfoOutlineIcon,
              }
            },
          },
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'brandedCoverImage',
      title: 'Branded Cover Image',
      type: 'image',
    },
    {
      name: 'plainCoverImage',
      title: 'Plain Cover Image',
      type: 'image',
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'object',
      fields: [
        {
          name: 'visuals',
          title: 'Visuals',
          type: 'number',
          validation: (Rule) => Rule.max(5).error('Can only rate 1 - 5'),
        },
        {
          name: 'sound',
          title: 'Sound',
          type: 'number',
          validation: (Rule) => Rule.max(5).error('Can only rate 1 - 5'),
        },
        {
          name: 'gameplay',
          title: 'Gameplay',
          type: 'number',
          validation: (Rule) => Rule.max(5).error('Can only rate 1 - 5'),
        },
        {
          name: 'updates',
          title: 'Updates',
          type: 'number',
          validation: (Rule) => Rule.max(5).error('Can only rate 1 - 5'),
        },
        {
          name: 'optimization',
          title: 'Optimization',
          type: 'number',
          validation: (Rule) => Rule.max(5).error('Can only rate 1 - 5'),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled',
        media: media || DocumentIcon,
      }
    },
  },
})
