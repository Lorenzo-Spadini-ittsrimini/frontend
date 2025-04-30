import React, { useState } from 'react'
import Tables from '../Tables' 

const FogEpisodes = () => {
  const [showForm, setShowForm] = useState(false)

  const columns = ["data", "durata", "distanza"]
  const data = [
    { data: "15/12", durata: 5, distanza: "1" },
    { data: "12/12", durata: 10, distanza: "2" }
  ]

  return (
    <div className="p-6">
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-bold text-blue-700 uppercase">
          Episodi di FOG
        </h2>
        <p className="text-gray-600 mt-1 text-sm">
          Elenco degli episodi di FOG
        </p>
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 flex  ml-auto items-center  gap-2 px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
      >
        <span className="text-lg font-bold">+</span> 
      </button>
      <Tables columns={columns} data={data} />
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Nuovo Episodio di FOG</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Data (es. 15/12)" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input type="number" placeholder="Durata (sec)" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input type="text" placeholder="Distanza (m)" className="w-full border border-gray-300 rounded px-3 py-2" />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Annulla
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Salva
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default FogEpisodes