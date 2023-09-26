import Star from '@/components/icons/star';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="relative float-right mr-4 group">
      <div className="flex items-center p-2 border border-accent-3 rounded-full">
        <span className="block text-2xl font-bold mr-2">{rating}</span>
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
            <span className="block text-[12px] text-accent-5 mr-1">
              TDMArena Rating
            </span>
            <InformationCircleIcon className="h-3 w-3 text-accent-4" />
          </div>
        </div>
      </div>
      <div className="absolute top-full pt-2">
        <div className="border border-accent-3 bg-primary text-[12px] p-2 rounded-md hidden group-hover:block ">
          <span>
            Our ratings take into consideration the pricing, features, usability
            and customer support. All ratings are determined soley by out
            editorial team.
          </span>
        </div>
      </div>
    </div>
  );
}
