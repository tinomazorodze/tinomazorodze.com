import { Metadata } from 'next'
import { createUser, getUser } from '@/app/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import programmerImage from '@/images/programmer.webp'
import { RegisterForm } from '../_components/register-form'

export const metadata: Metadata = {
  title: 'Create Account | Sign Up ',
  description:
    'Sign-up page. Create your account on tinomazorodze.com and gain access to exclusive features.',
}

export default function SignUp() {
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
    <div className="flex w-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="z-10 mx-4 my-20 h-fit max-w-md overflow-hidden rounded-2xl border border-zinc-600 shadow-xl md:mx-20">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-600 bg-zinc-900 px-4 py-6 pt-8 text-center text-white sm:px-16">
          <h3 className="text-xl font-semibold">Create a new account</h3>
          <p className="text-sm text-gray-300">
            With an account you can comment and use other premium features on
            this website.
          </p>
        </div>
        <RegisterForm action={register} />
      </div>
      <div className="hidden md:contents lg:relative lg:block lg:flex-1">
        <Image
          src={programmerImage}
          alt="Programmer"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
