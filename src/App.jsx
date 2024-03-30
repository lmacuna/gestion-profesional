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
             <Route path='/gestion-profesional/' element={ <PageHome/>}/>
             <Route path='/gestion-profesional/empleos' element={<PageEmpleos/>}/>
             <Route path='/gestion-profesional/perfiles' element={<PagePerfiles/>}/>
             <Route path='/gestion-profesional/empresas' element={<PageEmpresas/>}/>
             <Route path='/registrarse' element={<PageRegistrarse/>}/>
             <Route path='/gestion-profesional/admin' element={<PageAdmin/>}/>
          </Routes>
         
           
    </div>
  )
}

export default App
