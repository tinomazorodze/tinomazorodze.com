/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from '@sanity/dashboard'
import { media, mediaAssetSource } from 'sanity-plugin-media'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemas'
import { structure } from '@/sanity/desk-structure'
import { customDocumentActions } from '@/sanity/plugins/customDocumentActions'
import { TutorialsWidget } from '@/sanity/components/tutorials'
import StudioLogo from '@/sanity/components/studio-header'

export default defineConfig({
  basePath: '/studio',
  title: 'Content Studio',
  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [
    dashboardTool({
      widgets: [TutorialsWidget(), projectInfoWidget(), projectUsersWidget()],
    }),
    deskTool({ structure }),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
    customDocumentActions(),
  ],

  studio: {
    components: {
      logo: StudioLogo,
    },
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        )
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource,
        )
      },
    },
  },
})
