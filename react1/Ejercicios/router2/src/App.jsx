import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Personaje from './components/Personaje'
import Home from './views/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personajes/:id' element={<Personaje />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
