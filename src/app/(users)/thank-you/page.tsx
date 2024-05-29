import { preparePageMetadata } from '@/app/lib/metadata'
import { SimpleLayout } from '@/components/SimpleLayout'

export const generateMetadata = () =>
  preparePageMetadata({
    title: 'You’re subscribed | Tino Mazorodze Blog',
    description: 'Thanks for subscribing to my newsletter.',
    pageUrl: '/thank-you',
    imageUrl: '',
  })

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
    />
  )
}
