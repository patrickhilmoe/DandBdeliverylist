import { useState } from 'react'
import './App.css'
import ExceltoObject from '../components/object_converter'
import RenameHeaders from '../components/renameheader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Excel Object Creator</h1>
     <ExceltoObject/>
     <RenameHeaders/>
    </>
  )
}

export default App
