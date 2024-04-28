import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './container/Main.jsx'
import Footer from './container/Footer.jsx'
import Header from './container/Head.jsx'
import './App.css'

function App() {
 
  return (
    <>
    <div className='container'>
    <Header />
    <Main />
    <Footer />
    </div>
    </>
    
  )
}

export default App
