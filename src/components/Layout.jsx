import React, { useEffect } from 'react'
import { Children } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'

const Layout = ({children}) => {
  const [mode, setMode]=useState('light')

  useEffect(()=>{
    const currentMode=localStorage.getItem('mode')
    if(currentMode){
      setMode(currentMode)
      document.body.className=currentMode;
    }
  },[])


  return (
    <div className="bg-gradient-to-b from-blue-300 to-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      
        {children}
      
    </main>
    <Footer />
  </div>
  )
}

export default Layout