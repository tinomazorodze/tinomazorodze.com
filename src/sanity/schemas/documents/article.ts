import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

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
  ]
})
