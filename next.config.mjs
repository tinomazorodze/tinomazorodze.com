import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/programming',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/uses',
        destination: '/tech',
        permanent: true,
      },
      {
        source: '/blog/most-beautiful-and-expensive-houses-in-zimbabwe',
        destination:
          'https://www.ibzim.com/home/rankings/most-beautiful-and-expensive-houses-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/top-10-richest-people-in-zimbabwe',
        destination:
          'https://www.ibzim.com/people/rankings/richest-zimbabwean-men-and-women',
        permanent: true,
      },
      {
        source: '/blog/most-expensive-schools-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/most-expensive-schools-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/best-phones-under-usd100-to-buy-in-zimbabwe',
        destination:
          'https://www.ibzim.com/tech/rankings/best-phones-under-usd100-to-buy-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/best-taxi-apps-that-work-zimbabwe',
        destination:
          'https://www.ibzim.com/travel/rankings/best-taxi-apps-that-work-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/highest-paying-top-tech-companies-in-zimbabwe',
        destination:
          'https://www.ibzim.com/business/rankings/highest-paying-top-tech-companies-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/best-laptops-to-buy-for-students-in-zimbabwe',
        destination:
          'https://www.ibzim.com/tech/rankings/best-laptops-to-buy-for-students-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/gadgets-every-tech-savy-in-zimbabwe-should-have',
        destination:
          'https://www.ibzim.com/tech/guides/gadgets-every-tech-savy-in-zimbabwe-should-have',
        permanent: true,
      },
      {
        source: '/blog/top-10-richest-companies-in-zimbabwe',
        destination:
          'https://www.ibzim.com/business/rankings/richest-companies-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/best-latest-gtel-phones-to-buy',
        destination:
          'https://www.ibzim.com/tech/rankings/best-latest-gtel-phones-to-buy',
        permanent: true,
      },
      {
        source: '/blog/how-to-make-online-payments-in-zimbabwe',
        destination:
          'https://www.ibzim.com/money/guides/how-to-make-online-payments-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/top-100-a-level-schools-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/100-best-high-passrate-a-level-schools-for-2023',
        permanent: true,
      },
      {
        source: '/blog/top-social-media-celebrity-influencers-in-zimbabwe',
        destination:
          'https://www.ibzim.com/media/rankings/most-followed-zimbabweans-on-social-media',
        permanent: true,
      },
      {
        source:
          '/blog/cheap-fast-reliable-internet-service-providers-in-zimbabwe',
        destination:
          'https://www.ibzim.com/telecom/rankings/cheap-fast-reliable-internet-service-providers-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/cheap-boarding-schools-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/cheap-boarding-schools-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/latest-ecocash-usd-and-zwl-charges',
        destination:
          'https://www.ibzim.com/money/info/latest-ecocash-usd-and-zwl-charges',
        permanent: true,
      },
      {
        source: '/blog/all-zig-and-usd-bank-charges-in-zimbabwe',
        destination:
          'https://www.ibzim.com/money/info/all-zig-and-usd-bank-charges-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/latest-mukuru-money-transfer-charges',
        destination:
          'https://www.ibzim.com/money/info/latest-mukuru-money-transfer-charges',
        permanent: true,
      },
      {
        source: '/blog/latest-onemoney-usd-and-zig-charges-and-limits',
        destination:
          'https://www.ibzim.com/money/info/latest-onemoney-usd-and-zig-charges-and-limits',
        permanent: true,
      },
      {
        source: '/blog/innbucks-latest-charges',
        destination: 'https://www.ibzim.com/money/info/innbucks-latest-charges',
        permanent: true,
      },
      {
        source: '/blog/top-10-best-banks-in-zimbabwe',
        destination:
          'https://www.ibzim.com/money/rankings/top-10-best-banks-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/all-updated-econet-short-codes',
        destination:
          'https://www.ibzim.com/telecom/info/all-updated-econet-short-codes',
        permanent: true,
      },
      {
        source: '/blog/school-opening-and-closing-dates-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/info/2024-school-opening-and-closing-dates-calender-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/all-about-buying-starlink-in-zimbabwe',
        destination:
          'https://www.ibzim.com/telecom/guides/all-about-buying-starlink-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/top-100-best-primary-schools-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/grade-7-zimsec-2023-best-performing-schools',
        permanent: true,
      },
      {
        source: '/blog/top-100-best-schools-for-o-level-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/highest-passrate-o-level-schools-for-2023-zimsec',
        permanent: true,
      },
      {
        source: '/blog/top-20-best-universities-in-zimbabwe',
        destination:
          'https://www.ibzim.com/education/rankings/top-20-best-universities-in-zimbabwe',
        permanent: true,
      },
      {
        source: '/blog/all-netone-ussd-short-codes',
        destination:
          'https://www.ibzim.com/telecom/info/all-working-netone-ussd-short-codes',
        permanent: true,
      },
      {
        source: '/blog/best-dating-apps-and-websites-for-zimbabweans',
        destination:
          'https://www.ibzim.com/people/rankings/best-dating-apps-and-websites-for-zimbabweans',
        permanent: true,
      },
      {
        source: '/blog/how-to-download-movies-for-free',
        destination:
          'https://www.ibzim.com/media/guides/how-to-download-movies-for-free-in-zimbabwe',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
