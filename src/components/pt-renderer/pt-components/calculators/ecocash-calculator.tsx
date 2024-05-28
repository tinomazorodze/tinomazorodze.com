export default function EcocashCalculator() {
  return (
    <div className="my-4 rounded-md bg-zinc-900 p-4 text-white dark:bg-white dark:text-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <span>Currency</span>
          <span>Operation</span>
        </div>
        <span>Amount</span>
        {/* Signup to enter exact amounts */}
      </div>
      <div>Results</div>
    </div>
  )
}
