import Link from 'next/link'
import { Calculator, calclulators } from '.'
import { LaunchIcon } from '@sanity/icons'

export default function EcocashCalculator() {
  return (
    <div
      className="mt-4 rounded-md border border-zinc-300 dark:border-zinc-600"
      id="#ecocash-calculator"
    >
      <div className="flex items-center justify-between rounded-md bg-zinc-900 p-4 text-white dark:bg-white dark:text-zinc-900  ">
        <div className="">
          <div className="mb-6 flex items-center gap-x-4">
            <div>
              <label
                htmlFor="currency"
                className="hidden text-sm font-medium leading-6 text-gray-900"
                aria-hidden={true}
              >
                Currency
              </label>
              <select
                id="currency"
                name="Currency"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-label="Currency"
              >
                <option value="none" selected disabled hidden>
                  Currency
                </option>
                <option value="zig">ZiG</option>
                <option value="usd">USD</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="operation"
                className="hidden text-sm font-medium leading-6 text-gray-900"
                aria-hidden={true}
              >
                Operation
              </label>
              <select
                id="operation"
                name="Operation"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-label="Operation"
              >
                <option value="none" selected disabled hidden>
                  Operation
                </option>
                <option value="cash-in">Cash In</option>
                <option value="cash-out">Cash Out</option>
                <option value="send-money">Send Money</option>
                <option value="check-balance">Check Balance</option>
                <option value="bill-payment">Bill Payment</option>
              </select>
            </div>
          </div>
          <div className="mb-4 mt-2 flex flex-col items-center">
            <label
              htmlFor="amount-range"
              className="mb-2 block text-sm font-medium text-white dark:text-gray-900"
            >
              Amount
            </label>
            <input
              id="amount-range"
              min="1"
              name="amount-range"
              max="100000"
              type="range"
              value="10"
              className="h-2 w-full cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-700"
            ></input>
          </div>
          {/* Signup to enter exact amounts */}
        </div>
        <div>Results</div>
      </div>
      <div className="flex gap-4 p-2">
        <span className="text-xs font-medium">Other&nbsp;Calulators:</span>
        <div className="flex flex-wrap items-center gap-x-4">
          {calclulators.map((calculator: Calculator) => (
            <Link
              href={calculator.url}
              key={calculator.name}
              className="flex items-center text-xs text-teal-800 hover:underline dark:text-teal-400"
            >
              {calculator.name}
              <LaunchIcon className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
