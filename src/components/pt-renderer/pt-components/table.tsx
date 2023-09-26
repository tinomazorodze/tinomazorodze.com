export default function blockTable({ rows }: {
  rows: string[],
}) {

  return (
    <table>
      <thead>
        <tr>
          {rows[0].split(',').map((cell) => (
            <th key="cell">{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr key={i}>
            {row.split(',').map((cell) => (
              <td key="cell">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
