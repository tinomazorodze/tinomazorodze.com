'use client'

import Link from 'next/link'
import { callBackHref } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export function SignInAlt() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl')?.toString()

  return (
    <Link
      href="/sign-up"
      onClick={(e) => {
        e.preventDefault()
        callBackHref(callbackUrl, '/sign-up')
      }}
      className="font-semibold text-gray-800"
    >
      Sign up
    </Link>
  )
}

export function SignUpAlt() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl')?.toString()

  return (
    <Link
      href="/sign-in"
      onClick={(e) => {
        e.preventDefault()
        callBackHref(callbackUrl, '/sign-in')
      }}
      className="font-semibold text-gray-800"
    >
      Sign up
    </Link>
  )
}

export function BackToSite() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl')?.toString()

  if (callbackUrl != '') {
  }
}
