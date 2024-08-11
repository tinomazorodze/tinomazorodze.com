import { JsonLd } from 'react-schemaorg'
import { WebSite } from 'schema-dts'
import siteConfig from '@/content/site.json'

export default function WebsiteSchema() {
  return (
    <JsonLd<WebSite>
      item={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Tino Mazorodze',
        url: siteConfig.url.web,
      }}
    />
  )
}
