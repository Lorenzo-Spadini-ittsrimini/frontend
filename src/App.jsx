import { React, useState } from 'react'
import  Layout  from "@/components/Layout.jsx" 
import  PatientDashboard  from '@/components/PatientDashboard.jsx'
import Login from '@/components/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  //user type verrà preso dal local storage
  const[userType, SetUserType] = useState('patient') //cambiare con null, patient è per prova 

  return (
    <BrowserRouter>
      <Routes>
        {/* Controllo del tipo di utente e rendering condizionale */}
        {userType === 'patient' ? (
          <Route path="/" element={<Layout />}>
            <Route path="/PatientDashboard" element={<PatientDashboard />} />
          </Route>
        ) : userType === 'clinician' ? (
          <Route path="/" element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
