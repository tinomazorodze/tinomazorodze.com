import { ShieldExclamationIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export function TextAnswer({ children }: any) {
  return (
    <div className="text-sm leading-relaxed text-left p-2 sm:p-4 text-md text-primary  bg-accent-2 rounded-bl-md rounded-br-md [&>p:not(:last-child)]:mb-3 [&>p>a]:underline [&>p>a]:text-blue-500">
      {children}
    </div>
  );
}

export function ProsNCons({ pros, cons }: any) {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between bg-accent-2 text-primary p-6">
      <div className="w-full">
        <h5 className="font-bold text-green mb-2">Pros</h5>
        <ul className=" text-sm mb-4 md:mb-0">
          {pros.map((pro: any) => (
            <li key={pro} className="flex font-medium items-baseline mb-2">
              <div className="h-4 w-4 mr-2">
                <ShieldCheckIcon className="h-4 w-4 text-green" />
              </div>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h5 className="font-bold text-red mb-2">Cons</h5>
        <ul className=" text-sm">
          {cons.map((con: any) => (
            <li key={con} className="flex font-medium items-baseline mb-2">
              <div className="h-4 w-4 mr-2">
                <ShieldExclamationIcon className="h-4 w-4 text-red" />
              </div>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
