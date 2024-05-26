import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Helmet from '@/components/helmet'
import MdRenderer from '@/components/md-renderer'

export default function Cookies() {
  const PolicyContent = require('../../content/cookie-policy.md').default

  return (
    <>
      <Helmet
        metaTitle="Cookie Policy | Tino Mazorodze Blog"
        metaDescription="Cookie Policy."
        pageUrl="https://www.tinomazorodze.com/policies/cookies"
      />
      <Container>
        <div className="mt-16 sm:mt-20">
          <MdRenderer>
            <PolicyContent />
          </MdRenderer>
        </div>
      </Container>
    </>
  )
}
