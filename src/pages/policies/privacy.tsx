import { Container } from '@/components/Container'
import Helmet from '@/components/helmet'
import MdRenderer from '@/components/md-renderer'

export default function PrivacyPolicy() {
  const PolicyContent = require('../../content/privacy-policy.md').default

  return (
    <>
      <Helmet
        metaTitle="Privacy Policy | Tino Mazorodze Blog"
        metaDescription="Privacy Policy."
        pageUrl="https://www.tinomazorodze.com/policies/privacy"
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
