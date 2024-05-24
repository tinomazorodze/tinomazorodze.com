import { Suspense } from 'react'
import { SignInAlt } from '../_components/alternatives'
import { Form } from '../_components/form'
import { SubmitButton } from '../_components/submit-button'
import { type Metadata } from 'next'
import { signIn } from '@/app/auth'

export const metadata: Metadata = {
  title: 'Welcome Back | Sign In ',
  description: 'Sign-in page. Login to your account on tinomazorodze.com',
}

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
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
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
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
