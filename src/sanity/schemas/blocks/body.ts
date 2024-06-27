import { FormatColor } from '@/icons'
import EcocashLogo from '@/icons/ecocash-logo'
import MukuruLogo from '@/icons/mukuru-logo'
import OneMoneyLogo from '@/icons/onemoney-logo'
import gradientText from '@/sanity/components/gradient-text'
import {
  CheckmarkCircleIcon,
  CloseCircleIcon,
  HelpCircleIcon,
  ImageIcon,
  ImagesIcon,
  ThListIcon,
} from '@sanity/icons'
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
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal',
          },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal',
          },
          // Email
          {
            name: 'annotationLinkEmail',
            type: 'annotationLinkEmail',
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
      name: 'blockTable',
      type: 'table.object',
      icon: ThListIcon,
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
      name: 'imagesModule',
      type: 'imageCarousel.object',
      icon: ImagesIcon,
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
    },
    {
      name: 'blockButtonCta',
      type: 'buttonCta.object',
    },
    {
      name: 'blockEcocashCalculator',
      type: 'ecocashCalculator.object',
      icon: EcocashLogo,
    },
    {
      name: 'blockOneMoneyCalculator',
      type: 'onemoneyCalculator.object',
      icon: OneMoneyLogo,
    },
    {
      name: 'blockMukuruCalculator',
      type: 'mukuruCalculator.object',
      icon: MukuruLogo,
    },
  ],
})
