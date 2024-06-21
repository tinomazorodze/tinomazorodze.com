import { ShieldExclamationIcon } from '@heroicons/react/24/solid'

export default function blockConsCard({ title, cons }: any) {
  return (
    <div className="my-6 w-full  rounded-xl border border-zinc-200 bg-zinc-100 p-6 dark:border-zinc-600 dark:bg-zinc-800">
      <ul className="mt-4">
        {cons.map((con: any) => (
          <li key={con} className="mb-2 flex items-baseline">
            <div className="mr-2 h-4 w-4">
              <ShieldExclamationIcon className="h-4 w-4 text-red-600" />
            </div>
            <span>{con}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
