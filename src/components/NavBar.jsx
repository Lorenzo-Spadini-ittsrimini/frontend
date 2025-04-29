import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MdDashboard } from "react-icons/md";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const NavBar = () => {

  const[isOpen,SetIsOpen] = useState(false)

  return (
    <nav className={`text-white bg-sidebar h-screen flex flex-col gap-10 items-start pt-4 transition-all duration-300 
                    ${isOpen ? 'w-40' : 'w-20'}`}
         onMouseEnter={() => SetIsOpen(true)}
         onMouseLeave={() => SetIsOpen(false)}>

      <Link to="PatientDashboard" className='w-full group'>
        <span className='flex items-center gap-2 justify-start transition-color w-full hover:bg-sidebarHover pt-2 pb-2 pl-3 hover:shadow-md 
                   transition-all duration-200 ease-in-out '>
          <MdDashboard size={30} className='shrink-0'/>
          {isOpen && <p className='text-lg group-hover:text-xl transition-all duration-200'>Dashboard</p> }
        </span> 
      </Link>
      <Link to="FogEpisodes" className='w-full group'>
        <span className='flex items-center gap-2 justify-start transition-color w-full hover:bg-sidebarHover pt-2 pb-2 pl-3 hover:shadow-md 
                   transition-all duration-200 ease-in-out '>
          <FaPersonWalkingDashedLineArrowRight size={30} className='shrink-0'/>
          {isOpen && <p className='text-lg group-hover:text-xl transition-all duration-200'>FOG</p> }
        </span>
      </Link>
      <Link to="PatientTerapies" className='w-full group'>
        <span className='flex items-center gap-2 justify-start transition-color w-full hover:bg-sidebarHover pt-2 pb-2 pl-3 hover:shadow-md 
                   transition-all duration-200 ease-in-out '>
          <FaPills size={30} className='shrink-0'/>
          {isOpen && <p className='text-lg group-hover:text-xl transition-all duration-200'>Terapies</p> }
        </span>
      </Link>
      <Link to="ClinicianDetails" className='w-full group'>
        <span className='flex items-center gap-2 justify-start transition-color w-full hover:bg-sidebarHover pt-2 pb-2 pl-3 hover:shadow-md 
                   transition-all duration-200 ease-in-out '>
          <FaUserDoctor size={30} className='shrink-0'/>
          {isOpen && <p className='text-lg group-hover:text-xl transition-all duration-200'>Clinician</p> }
        </span>
      </Link>    
      <Link to="Account" className='w-full group'>
        <span className='flex items-center gap-2 justify-start transition-color w-full hover:bg-sidebarHover pt-2 pb-2 pl-3 hover:shadow-md 
                   transition-all duration-200 ease-in-out '>
          <MdAccountCircle  size={30} className='shrink-0'/>
          {isOpen && <p className='text-lg group-hover:text-xl transition-all duration-200'>Account</p> }
        </span>
      </Link> 
    </nav>
  )
}

export default NavBar