import {  Routes,Route} from 'react-router-dom';
import Header from './layout/Header.jsx';
import Home from './pages/Home.jsx'
import React from 'react'

function App() {
  return (
   <>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>} />
 
 </Routes>
   </>
  )
}

export default App