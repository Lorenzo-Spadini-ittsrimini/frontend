import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const[isOpen,SetIsOpen] = useState(true)

  return (
    <aside className='text-white bg-sidebar h-screen'>
      <Link to="PatientDashboard">
        dashboard
      </Link>

    </aside>
  )
}

export default NavBar