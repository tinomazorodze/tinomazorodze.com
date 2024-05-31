'use client'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { SignUpAlt } from '../_components/alternatives'
import { Suspense } from 'react'
import GoogleLogo from '@/icons/google'
import { RegisterButton } from '../_components/register-button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ZPasswordSchema } from '@/lib/auth-router/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/lib/form'

type SignUpStep = 'BASIC_DETAILS' | 'CLAIM_USERNAME'

export const ZSignUpFormV2Schema = z
  .object({
    name: z.string().trim().min(1, { message: 'Please enter a valid name.' }),
    email: z.string().email().min(1),
    password: ZPasswordSchema,
    url: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: 'We need a username to create your profile' })
      .regex(/^[a-z0-9-]+$/, {
        message:
          'Username can only container alphanumeric characters and dashes.',
      }),
  })
  .refine(
    (data) => {
      const { name, email, password } = data
      return !password.includes(name) && !password.includes(email.split('@')[0])
    },
    {
      message: 'Password should not be common or based on personal information',
    },
  )

export type TSignUpFormV2Schema = z.infer<typeof ZSignUpFormV2Schema>

export function RegisterForm({ action }: { action: any }) {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState<SignUpStep>('BASIC_DETAILS')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // use zod to validate form as in documenso and then create steps

  const form = useForm<TSignUpFormV2Schema>({
    values: {
      name: '',
      email: '',
      password: '',
      url: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(ZSignUpFormV2Schema),
  })

  const onNextClick = async () => {
    const valid = await form.trigger(['name', 'email', 'password'])

    if (valid) {
      setStep('CLAIM_USERNAME')
    }
  }

  return (
    <Form {...form}>
      <form
        action={action}
        className="flex flex-col space-y-4 bg-zinc-900 px-4 py-8 sm:px-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <input
                id="name"
                type="name"
                autoComplete="name"
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email Adress</FormLabel>
              <input
                id="email"
                type="email"
                placeholder="user@acme.com"
                autoComplete="email"
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <div className="mt-1 flex w-full  items-center overflow-hidden rounded-md border border-gray-300 bg-[#e8f0fe] placeholder-gray-400 shadow-sm focus:border-black  focus:ring-black sm:text-sm">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full appearance-none border-none focus:outline-none"
                  {...field}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="px-2"
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mb-4 flex w-full items-center justify-center">
          <div className="h-[1px] w-full bg-gray-600"></div>
          <div className="mx-4 text-xs text-gray-300">
            OR&nbsp;CONTINUE&nbsp;WITH
          </div>
          <div className="h-[1px] w-full bg-gray-600"></div>
        </div>
        <div className="flex h-10 w-full cursor-pointer items-center justify-center gap-4 rounded-md border border-zinc-600 text-sm text-white transition-all hover:bg-zinc-600 focus:outline-none">
          <GoogleLogo />
          <span>Google</span>
        </div>
        <p className="text-center text-sm text-gray-300">
          {'Already have an account? '}
          <Suspense>
            <SignUpAlt />
          </Suspense>
          {' instead.'}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-full flex-1 cursor-pointer items-center justify-center rounded-md bg-zinc-700 text-sm text-white transition-all hover:bg-zinc-600">
            Back
          </div>
          {step === 'BASIC_DETAILS' && (
            <button
              onClick={onNextClick}
              className="flex h-10 w-full flex-1 items-center justify-center rounded-md bg-teal-700 text-sm text-white transition-all hover:bg-teal-600 focus:outline-none"
            >
              Continue
            </button>
          )}
          {step === 'CLAIM_USERNAME' && <RegisterButton>Next</RegisterButton>}
        </div>
      </form>
    </Form>
  )
}
