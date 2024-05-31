'use client'

import Link from 'next/link'
import { callBackHref } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export function SignInAlt() {
  const searchParams = useSearchParams()
  const gobackUrl = searchParams?.get('gobackUrl')?.toString()

  return (
    <Link
      href="/sign-up"
      onClick={(e) => {
        e.preventDefault()
        callBackHref(gobackUrl, '/sign-up')
      }}
      className="font-semibold text-teal-600 hover:underline"
    >
      Sign up
    </Link>
  )
}

export function SignUpAlt() {
  const searchParams = useSearchParams()
  const gobackUrl = searchParams?.get('gobackUrl')?.toString()

  return (
    <Link
      href="/sign-in"
      onClick={(e) => {
        e.preventDefault()
        callBackHref(gobackUrl, '/sign-in')
      }}
      className="font-semibold text-teal-600 hover:underline"
    >
      Sign in
    </Link>
  )
}

export function BackToSite() {
  const searchParams = useSearchParams()
  const gobackUrl = searchParams?.get('gobackUrl')?.toString()

  if (gobackUrl != '') {
  }
}
