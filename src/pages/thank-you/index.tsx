import { SimpleLayout } from '@/components/SimpleLayout'
import Helmet from '@/components/helmet'

export default function ThankYou() {
  return (
    <>
      <Helmet
        metaTitle="You’re subscribed | Tino Mazorodze"
        metaDescription="Thanks for subscribing to my newsletter."
        pageUrl="https://www.tinomazorodze.com/thank-you"
      />
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
