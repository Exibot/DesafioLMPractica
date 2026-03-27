import { useState } from 'react'
import Producto from '../components/Producto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto title="producto1" price="100" stock="10"/>
      <Producto title="producto2" price="200" stock="5"/>
      <Producto title="producto3" price="300" stock="8"/>
      <Producto title="producto4" price="800" stock="0"/>
    </>
  )
}

export default App
