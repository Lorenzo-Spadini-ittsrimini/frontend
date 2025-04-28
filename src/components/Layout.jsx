import React from 'react'
import  NavBar  from './NavBar.jsx'
import  Header   from './Header.jsx'
import  { Outlet }  from 'react-router-dom'

const layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <Header></Header>

      {/* Corpo: sidebar + contenuto */}
      <div className="flex flex-1 min-h-0">
        <NavBar />
        <main className="flex-1 bg-background p-5 overflow-auto">
            <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default layout