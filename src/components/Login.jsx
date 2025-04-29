import React from 'react'

const Login = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="relative max-w-lg w-full mx-auto p-10 bg-gray-50 shadow-lg rounded-2xl space-y-8">
        <h1 class="text-3xl font-semibold text-center text-black">Registrati</h1>

        <div class="space-y-6">
      
          <div class="flex flex-col">
            <label for="email" class="mb-2 text-lg font-semibold text-black">Email</label>
            <input type="text" name="email" id="email" class="text-lg border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-black" />
          </div>

      
          <div class="flex flex-col">
            <label for="passW" class="mb-2 text-lg font-semibold text-black">Password</label>
            <input type="password" name="passW" id="passW" class="text-lg border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-black" />
          </div>

      
          <div class="flex flex-col">
            <label for="ruolo" class="mb-2 text-lg font-semibold text-black">Medico o Paziente?</label>
            <select id="ruolo" name="ruolo" class="text-lg border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-black">
              <option value="">Seleziona un'opzione</option>
              <option value="medico">Medico</option>
              <option value="paziente">Paziente</option>
            </select>
          </div>
        </div>

    
        <div>
          <button type="submit" class="w-full bg-black text-white text-lg font-semibold py-3 px-6 rounded hover:bg-gray-800 transition-colors duration-200">
            Registrati
          </button>
        </div>
      </div>
    </div>
  )
}



export default Login