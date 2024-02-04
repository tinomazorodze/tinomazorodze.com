import { Star } from '@/icons'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="group relative float-right mr-4">
      <div className="border-accent-3 flex items-center rounded-full border p-2">
        <span className="mr-2 block text-2xl font-bold">{rating}</span>
        <div>
          <div className="grid grid-cols-5">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Star
                  key={i}
                  color={
                    i < Math.round(rating) ? 'teal' : 'rgba(136, 136,136,.4)'
                  }
                />
              ))}
          </div>
          <div className="flex items-center">
            <span className="text-accent-5 mr-1 block text-[12px]">
              TDMArena Rating
            </span>
            <InformationCircleIcon className="text-accent-4 h-3 w-3" />
          </div>
        </div>
      </div>
      <div className="absolute top-full pt-2">
        <div className="border-accent-3 bg-primary hidden rounded-md border p-2 text-[12px] group-hover:block ">
          <span>
            Our ratings take into consideration the pricing, features, usability
            and customer support. All ratings are determined soley by out
            editorial team.
          </span>
        </div>
      </div>
    </div>
  )
}
