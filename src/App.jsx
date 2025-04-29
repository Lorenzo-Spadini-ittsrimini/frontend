import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login.jsx'
import Layout from './components/layout.jsx'
import  PatientDashboard  from './components/patient-components/PatientDashboard.jsx'
import FogEpisodes from './components/patient-components/FogEpisodes'
import AddFogEpisodes from './components/patient-components/AddFogEpisodes.jsx'
import PatientTerapies from './components/patient-components/PatientTerapies'
import ClinicianDetails from './components/patient-components/ClinicianDetails.jsx'


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
            <Route path='/FogEpisodes' element={<FogEpisodes/>}/>
            <Route path='/PatientTerapies' element={<PatientTerapies/>}/>
            <Route path='/ClinicianDetails' element={<ClinicianDetails/>}/>
          </Route>
        ) : userType === 'clinician' ? (
          <Route path="/" element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/Login" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
