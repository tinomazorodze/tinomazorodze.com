import PrivacyPolicyContent from '@/app/_components/policy-content/privacy-policy-content'
import { preparePageMetadata } from '@/app/lib/metadata'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Privacy Policy | Tino Mazorodze Blog',
    description: 'Privacy Policy.',
    pageUrl: '/policies/privacy',
    imageUrl: '',
  })

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
