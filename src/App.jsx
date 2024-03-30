import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Routes,Route } from 'react-router-dom'

import { PageAdmin, PageEmpleos, PageEmpresas, PageHome, PagePerfiles, PageRegistrarse } from './Components/Index'


function App() {
 

  return (
    <div className='main'>
          <Header/>
          <br></br>
          <Routes>
             <Route path='/' element={ <PageHome/>}/>
             <Route path='/empleos' element={<PageEmpleos/>}/>
             <Route path='/perfiles' element={<PagePerfiles/>}/>
             <Route path='/empresas' element={<PageEmpresas/>}/>
             <Route path='/registrarse' element={<PageRegistrarse/>}/>
             <Route path='/admin' element={<PageAdmin/>}/>
          </Routes>
         
           
    </div>
  )
}

export default App
