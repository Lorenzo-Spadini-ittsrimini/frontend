import React from 'react'
import NavBar from './NavBar'
import Header  from './Header'

const layout = ({children}) => {
  return (
    <div className='w-screen h-screen'>
        <NavBar></NavBar>
        <Header></Header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default layout