import React from 'react'
import Tables from '../Tables' 

const PatientTerapies = () => {
  const columns = ["Terapia", "Quantità", "Orari"]
  const data = [
    { terapia: "terapia1", quantità: 0, orari: "00/00" },
    { terapia: "terapia2", quantità: 100, orari: "01/01" }
  ]

  return (
    <div className="p-6">
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-bold text-blue-700 uppercase">
          Terapie
        </h2>
        <p className="text-gray-600 mt-1 text-sm">
          Elenco delle terapie attive
        </p>
      </div>
      <Tables columns={columns} data={data} />
    </div>
  )
}

export default PatientTerapies