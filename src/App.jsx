import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/homef/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
  )
}

export default App
