import { Metadata } from 'next'
import { createUser, getUser } from '@/app/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import programmerImage from '@/images/programmer.webp'
import { RegisterForm } from '../_components/register-form'
import AuthGoBack from '@/app/_components/auth-go-back'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Create Account | Sign Up ',
  description:
    'Sign-up page. Create your account on tinomazorodze.com and gain access to exclusive features.',
}

export default function SignUp() {
  async function register(formData: FormData) {
    'use server'
    let name = formData.get('name') as string
    let email = formData.get('email') as string
    let password = formData.get('password') as string
    let username = formData.get('username') as string
    let user = await getUser(email)

    if (user.length > 0) {
      return 'User already exists' // TODO: Handle errors with useFormStatus
    } else {
      await createUser(name, email, password, username)
      redirect('/sign-in')
    }
  }

  return (
    <div className="relative flex w-full shrink-0 justify-center md:px-12 lg:px-0">
      <RegisterForm action={register} />
      <div className="hidden lg:relative lg:block lg:flex-1">
        <Image
          src={programmerImage}
          alt="Programmer"
          className="h-full w-full object-cover"
        />
      </div>
      <Suspense>
        <AuthGoBack />
      </Suspense>
    </div>
  )
}
