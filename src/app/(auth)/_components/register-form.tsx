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
import { motion } from 'framer-motion'

type SignUpStep = 'BASIC_DETAILS' | 'CLAIM_USERNAME'

export const ZSignUpFormV2Schema = z
  .object({
    name: z.string().trim().min(1, { message: 'Please enter a valid name.' }),
    email: z.string().email().min(1),
    password: ZPasswordSchema,
    username: z
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
      username: '',
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
    <div className="z-10 mx-4 my-20 h-fit max-w-md overflow-hidden rounded-2xl border border-zinc-600 shadow-xl md:mx-20">
      {step === 'BASIC_DETAILS' && (
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-600 bg-zinc-900 px-4 py-6 pt-8 text-center text-white sm:px-16">
          <h1 className="text-xl font-semibold">Create a new account</h1>
          <p className="text-sm text-gray-300">
            With an account you can comment and use other premium features on
            this website.
          </p>
        </div>
      )}
      {step === 'CLAIM_USERNAME' && (
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-600 bg-zinc-900 px-4 py-6 pt-8 text-center text-white sm:px-16">
          <h1 className="text-xl font-semibold">Claim your username now</h1>
          <p className="text-sm text-gray-300">
            You will get notified & be able to join the $5 per week competition
            when I launch the feature.
          </p>
        </div>
      )}
      <Form {...form}>
        <form
          action={action}
          className="flex flex-col space-y-4 bg-zinc-900 px-4 py-8 sm:px-10"
        >
          {step === 'BASIC_DETAILS' && (
            <fieldset className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Full Name</FormLabel>
                    <input
                      id="name"
                      type="text"
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
                      placeholder="user@tinomazorodze.com"
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
            </fieldset>
          )}

          {step === 'CLAIM_USERNAME' && (
            <fieldset>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">
                      Public profile username
                    </FormLabel>
                    <input
                      type="text"
                      className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
          )}

          <div className="mt-6">
            {step === 'BASIC_DETAILS' && (
              <p className="text-center text-sm text-zinc-300">
                <span className="font-medium">Basic details</span> 1/2
              </p>
            )}

            {step === 'CLAIM_USERNAME' && (
              <p className="text-center text-sm text-zinc-300">
                <span className="font-medium">Claim username</span> 2/2
              </p>
            )}

            <div className="relative mt-4 h-1.5 rounded-full bg-zinc-600">
              <motion.div
                layout="size"
                layoutId="document-flow-container-step"
                className="absolute inset-y-0 left-0 rounded-full bg-teal-700"
                style={{
                  width: step === 'BASIC_DETAILS' ? '50%' : '100%',
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <button
              disabled={step === 'BASIC_DETAILS'}
              onClick={() => setStep('BASIC_DETAILS')}
              className={`flex h-10 w-full flex-1 items-center justify-center rounded-md bg-zinc-700 text-sm  transition-all ${step === 'BASIC_DETAILS' ? 'text-zinc-500' : 'cursor-pointer text-white hover:bg-zinc-600 '}`}
            >
              Back
            </button>
            {step === 'BASIC_DETAILS' && (
              <button
                onClick={onNextClick}
                className="flex h-10 w-full flex-1 items-center justify-center rounded-md bg-teal-700 text-sm text-white transition-all hover:bg-teal-600 focus:outline-none"
              >
                Next
              </button>
            )}
            {step === 'CLAIM_USERNAME' && (
              <RegisterButton>Sign Up</RegisterButton>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
