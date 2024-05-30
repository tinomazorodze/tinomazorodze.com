import { Suspense } from 'react'
import { SignInAlt } from '../_components/alternatives'
import { Form } from '../_components/login-form'
import { type Metadata } from 'next'
import { signIn } from '@/app/auth'
import GoogleLogo from '@/icons/google'
import { LoginButton } from '../_components/login-button'

export const metadata: Metadata = {
  title: 'Welcome Back | Sign In ',
  description: 'Sign-in page. Login to your account on tinomazorodze.com',
}

export default function Login() {
  return (
    <div className="my-20 flex h-full w-full items-center justify-center">
      <div className="z-10 mx-4 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-600 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-600 bg-zinc-900 px-4 py-6 pt-8 text-center text-white sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-300">
            Welcome back. I am lucky to have you!
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server'
            await signIn('credentials', {
              redirectTo: '/dashboard',
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            })
          }}
        >
          <LoginButton>Sign in</LoginButton>
          <div className="mb-4 flex w-full items-center justify-center">
            <div className="h-[1px] w-full bg-gray-600"></div>
            <div className="mx-4 text-xs text-gray-300">
              OR&nbsp;
              <span className="hidden sm:inline">CONTINUE&nbsp;WITH</span>
            </div>
            <div className="h-[1px] w-full bg-gray-600"></div>
          </div>
          <div className="flex h-10 w-full cursor-pointer items-center justify-center gap-4 rounded-md border border-zinc-600 text-sm text-white transition-all hover:bg-zinc-600 focus:outline-none">
            <GoogleLogo />
            <span>Google</span>
          </div>
          <p className="text-center text-sm text-zinc-300">
            {"Don't have an account? "}
            <Suspense>
              <SignInAlt />
            </Suspense>
            {' for free.'}
          </p>
        </Form>
      </div>
    </div>
  )
}
