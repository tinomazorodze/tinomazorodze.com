import { Form } from '../_components/form'
import { SubmitButton } from '../_components/submit-button'
import { SignUpAlt } from '../_components/alternatives'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { createUser, getUser } from '@/app/db'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Create Account | Sign Up ',
  description:
    'Sign-up page. Create your account on tinomazorodze.com and gain access to exclusive features.',
}

export default function Login() {
  async function register(formData: FormData) {
    'use server'
    let email = formData.get('email') as string
    let password = formData.get('password') as string
    let user = await getUser(email)

    if (user.length > 0) {
      return 'User already exists' // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password)
      redirect('/sign-in')
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Suspense>
              <SignUpAlt />
            </Suspense>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  )
}
