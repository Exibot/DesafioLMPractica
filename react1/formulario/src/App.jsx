import { useState } from 'react'
import { Formulario } from '../components/Formulario.jsx'
import { GetUsuario } from '../components/GetUsuario.jsx'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  

  return (
    <>
      <h1>Formulario</h1>
      <Formulario
      usuarios={usuarios}
      setUsuarios={setUsuarios} />


      <GetUsuario 
      usuarios={usuarios} 
      setUsuarios={setUsuarios} />
    </>
  )
}

export default App
