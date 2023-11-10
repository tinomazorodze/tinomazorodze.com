export default function blockTable({ rows }: {
  rows: string[],
}) {

  return (
    <table className="w-full mb-6">
      <thead>
        <tr className="bg-secondary text-primary-2">
          {rows[0].split(',').map((cell, i) => (
            <th key={i} className={`text-left px-2 py-2 ${i > 2 && " hidden md:table-cell"}`}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr key={i} className="odd:bg-primary even:bg-accent-2">
            {row.split(',').map((cell, i) => (
              <td key={i} className={`text-left px-2 py-2 ${i > 2 && " hidden md:table-cell"}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
