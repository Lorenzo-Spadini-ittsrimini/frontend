import React from 'react'

const Header = () => {


  return (
    <div className='z-10 h-[70px] bg-header flex items-center justify-end p-7'>
        <span className='flex font-bold border-2 border-white p-1 rounded-lg'>
            <h1 className='text-[1.2rem] mr-[7px] text-logoPrimary'>Telemedice</h1>
            <h1 className='text-[1.2rem] text-logoAccent'>for Parkinson</h1>
        </span>
    </div>
  )
}

export default Header