import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";
import { format, parseISO } from 'date-fns'

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      description: 'Set a 3 - 5 word keyword as the name of your page',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 200,
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'topic',
      type: 'reference',
      title: 'Topic',
      to: [{ type: 'topic' }],
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
            Rule.max(70).warning('Longer titles may be truncated by search engines'),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: (Rule) =>
            Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image'
        },
      ]
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    },
    {
      name: 'hasProductListing',
      title: 'Has Product Listing',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'optimizeFor',
      title: 'Optimize For',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Reading', value: 'reading' },
          { title: 'Link Click', value: 'linkClick' },
          { title: 'Both', value: 'both' },
        ],
      },
    },
    {
      name: "products",
      title: "Products",
      hidden: ({ parent }) => !parent.hasProductListing,
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "link",
              title: "Link",
              type: "object",
              fields: [
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
                {
                  name: "dofollow",
                  title: "Dofollow",
                  type: "boolean",
                }
              ]
            }
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
              media: "image",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title,
                subtitle: subtitle,
                media: media,
              }
            }
          }
        }
      ]
    },
    {
      name: 'subHeadings',
      title: 'Sub Headings',
      description: 'Write your h2 and h3 sub headings exactly as they appear in the article body',
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
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "h2", value: "h2" },
                  { title: "h3", value: "h3" },
                  { title: "h4", value: "h4" },
                ],
              },
            }
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body',
    },
    {
      name: 'displayAds',
      title: 'Display Ads',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Off', value: 'off' },
          { title: 'On', value: 'on' },
        ],
      },
    },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
      description: 'These articles will be displayed at the hero so make sure they are related to the topic of this article',
    }

  ],
  preview: {
    select: {
      title: 'title',
      date: '_updatedAt',
      media: 'seo.image',
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
