import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function blockProsCard({ title, pros }: any) {
  return (
    <div className="border border-green dark:border-green-900 bg-accent-1 rounded-xl p-6 my-4 w-full">
      <ul className="mt-4">
        {pros.map((pro: any) => (
          <li key={pro} className="flex items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <ShieldCheckIcon className="h-4 w-4 text-green" />
            </div>
            <span>{pro}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
