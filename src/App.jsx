import { useState } from 'react'
import './App.css'
import ExceltoObject from '../components/object_converter'
import RenameHeaders from '../components/renameheader'
import * as line from '../components/add-to-line-items'
import { stockWithCat } from '../components/object-arrays.jsx/stockwithcat'
import { starNum } from '../components/object-arrays.jsx/starArr'
import { processedlist } from '../components/add-to-line-items'
import { convert } from '../components/convertocsv'

function App() {
  const [list, setList] = useState([])

  // line.Orders(line.SampleOpenOrder, line.SampleLineItems);

  function listprocessorstart() {
    line.LineitemAdd(line.SampleLineItems, line.SampleAddresses, starNum, stockWithCat);
    // setList(...list,...processedlist);
  }

  function initiateconvert() {
    // console.log(processedlist);
    convert(processedlist);
  }

  return (
    <>
      <h1>Excel Object Creator</h1>
     <ExceltoObject/>
     <RenameHeaders/>
     <div>
      <button onClick={listprocessorstart}>processlist</button>
      <button onClick={initiateconvert}>convert to csv</button>
     </div>
    </>
  )
}

export default App
