'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function AuthGoBack() {
  const searchParams = useSearchParams()
  const gobackUrl = searchParams?.get('gobackUrl') ?? null

  return (
    <Link
      href={gobackUrl || '/'}
      className="fixed right-0 top-0 -translate-x-4 translate-y-4 rounded-full p-2 hover:bg-zinc-700"
    >
      <XMarkIcon className="h-7 w-7 text-zinc-300" />
    </Link>
  )
}
