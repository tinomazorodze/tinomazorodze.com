export default function blockTable({ rows }: { rows: string[] }) {
  return (
    <table className="mb-6 w-full">
      <thead>
        <tr className="bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          {rows[0].split(',').map((cell, i) => (
            <th
              key={i}
              className={`px-2 py-2 text-left ${i > 2 && ' hidden md:table-cell'}`}
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr
            key={i}
            className="odd:bg-primary even:bg-zinc-100 dark:even:bg-white/10"
          >
            {row.split(',').map((cell, i) => (
              <td
                key={i}
                className={`px-2 py-2 text-left ${i > 2 && ' hidden md:table-cell'}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
