import { ChevronUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ScrollTop() {
  return (
    <Link href="#top" className="bg-gradient-to-tl from-secondaryColor via-primaryColor to-secondaryColor hover:bg-opacity-90 fixed right-4 bottom-8 z-[999] grid h-9 w-9 place-content-center rounded-md md:right-5 lg:right-7" aria-label='Scroll To Top'>
      <ChevronUpIcon className="h-6 w-6 text-white" />
    </Link>
  );
}
