'use client'

import { Container } from '@/components/Container'
import MdRenderer from '@/components/md-renderer'

export default function PrivacyPolicyContent() {
  const PolicyContent = require('../../../content/privacy-policy.md').default

  return (
    <Container>
      <div className="mt-16 sm:mt-20">
        <MdRenderer>
          <PolicyContent />
        </MdRenderer>
      </div>
    </Container>
  )
}
