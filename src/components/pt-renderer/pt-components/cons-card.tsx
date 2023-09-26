import { ShieldExclamationIcon } from '@heroicons/react/24/solid';

export default function blockConsCard({ title, cons }: any) {
  return (
    <div className="border border-red  bg-accent-1 rounded-xl p-6 my-6 w-full">
      <h5 className="text-red">{title}</h5>
      <ul className="mt-4">
        {cons.map((con: any) => (
          <li key={con} className="flex items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <ShieldExclamationIcon className="h-4 w-4 text-red" />
            </div>
            <span>{con}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
