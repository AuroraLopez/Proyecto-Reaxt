import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import  { Routes } from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar';
import { Inicio } from './Componentes/Pages/Inicio/inicio';
import { Login }  from './Componentes/Pages/Contactanos/Contactanos'
import { Cuidados } from './Componentes/Pages/Cuidado/Cuidados';
import { Razas } from './Componentes/Pages/Razas/razas';
import { R } from './Componentes/Pages/Razas/rr';

function App() {
  return (
    <>
      <header className='inicio'>
         <Navbar></Navbar>
      </header>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Razas' element={<Razas />}/>
        <Route path='/Cuidados' element={<Cuidados />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/rr' element={<R />}/>
      </Routes>
      
    </>
  )
}

export default App;
