'use client'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'

export function RegisterForm({
  action,
  children,
}: {
  action: any
  children: React.ReactNode
}) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-zinc-900 px-4 py-8 sm:px-10"
    >
      <div>
        <label htmlFor="name" className="block text-xs uppercase text-gray-300">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase text-gray-300"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs uppercase text-gray-300"
        >
          Password
        </label>
        <div className="mt-1 flex w-full  items-center overflow-hidden rounded-md border border-gray-300 bg-[#e8f0fe] placeholder-gray-400 shadow-sm focus:border-black  focus:ring-black sm:text-sm">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            className="w-full appearance-none border-none focus:outline-none"
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
              <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {children}
    </form>
  )
}
