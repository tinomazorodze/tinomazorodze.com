import { JsonLd } from 'react-schemaorg'
import { Person } from 'schema-dts'
import siteConfig from '@/content/site.json'

export default function PersonSchema() {
  return (
    <JsonLd<Person>
      item={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Tino Mazorodze',
        alternateName: 'TechTinoe',
        jobTitle: 'Fullstack Engineer',
        email: 'tinomazorodze.mt@gmail.com',
        knowsAbout: ['Programming', 'Gaming', 'Technology'],
        sameAs: [
          `${siteConfig.url.twitter}`,
          `${siteConfig.url.instagram}`,
          `${siteConfig.url.linkedin}`,
        ],
      }}
    />
  )
}
