import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompanySearchJob from './Component/CompanySearchJob'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element ={<CompanySearchJob/>}></Route>
            <Route path='/CompanySearchJob' element ={<CompanySearchJob/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App