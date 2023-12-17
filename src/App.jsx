import { useState } from 'react'
import './App.css'
import ExceltoObject from '../components/object_converter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Excel Object Creator</h1>
     <ExceltoObject/>
    </>
  )
}

export default App
