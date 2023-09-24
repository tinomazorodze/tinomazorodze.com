import FormatColor from '@/components/icons/format-color'
import gradientText from '@/sanity/components/gradient-text'
import { CheckmarkCircleIcon, CloseCircleIcon, HelpCircleIcon, ImageIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
          {
            title: 'Code',
            value: 'code',
          },
          {
            title: 'Gradient Text',
            value: 'gradientText',
            icon: FormatColor,
            component: gradientText,
          },
        ],
        annotations: [
          {
            name: 'link',
            type: 'link.annotation',
          },
        ],
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
    },
    // Custom blocks
    {
      name: 'blockFAQs',
      type: 'faqs.object',
      icon: HelpCircleIcon,
    },
    {
      name: 'blockProsCard',
      type: 'prosCard.object',
      icon: CheckmarkCircleIcon,
    },
    {
      name: 'blockConsCard',
      type: 'consCard.object',
      icon: CloseCircleIcon,
    },
    {
      name: 'imageModule',
      type: 'image.object',
      icon: ImageIcon,
    },
    {
      name: 'blockGreenCard',
      type: 'greenCard.object',
    },
    {
      name: 'blockPartnersCard',
      type: 'partnersCard.object',
    },
    {
      name: 'blockProductSummary',
      type: 'productSummary.object',
    }
  ],
})
