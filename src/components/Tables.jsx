import React from 'react'

const Tables = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full text-sm text-left text-gray-700 bg-white">
        <thead className="text-xs text-white uppercase bg-blue-500">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-6 py-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-100">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    {row[col.toLowerCase()] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center px-6 py-4">
                Nessun dato disponibile
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tables