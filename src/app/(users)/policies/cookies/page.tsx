import CookiePolicyContent from '@/app/_components/policy-content/cookie-policy-content'
import { preparePageMetadata } from '@/app/lib/metadata'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'Cookie Policy | Tino Mazorodze Blog',
    description: 'Cookie Policy.',
    pageUrl: '/policies/cookies',
    imageUrl: '',
  })

export default function Cookies() {
  return <CookiePolicyContent />
}
