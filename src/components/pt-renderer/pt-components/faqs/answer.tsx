export default function Answer({ children }: any) {
  return (
    <div className="text-md text-primary rounded-bl-md rounded-br-md bg-zinc-200 p-2 text-left text-sm leading-relaxed  sm:p-4 sm:text-base dark:bg-zinc-700">
      {children}
    </div>
  )
}
