import { useState } from 'react'
import './App.css'
import ExceltoObject from '../components/object_converter'
import * as line from '../components/add-to-line-items'
import { stockWithCat } from '../components/object-arrays/stockwithcat'
import { starNum } from '../components/object-arrays/starArr'
import { processedlist } from '../components/add-to-line-items'
import { convert } from '../components/convertocsv'
// import { Addresses } from '../components/object-arrays/addresses'
// import { LineItems } from '../components/object-arrays/line-items'
import { OpenOrderReport } from '../components/object-arrays/open-order-report'
import { SampleOpenOrder} from '../components/add-to-line-items'
import { ServiceTime, SampleList } from '../components/service-time'

function App() {
  const [list, setList] = useState([])

  // line.Orders(line.SampleOpenOrder, line.SampleLineItems);

  function listprocessorstart() {
    // line.LineitemAdd(SampleOpenOrder, LineItems, Addresses, starNum, stockWithCat);
    ServiceTime(SampleList, starNum, stockWithCat);
  }

  function initiateconvert() {
    // console.log(processedlist);
    convert(processedlist);
  }


  return (
    <>
      <h1>Excel Object Creator</h1>
     <ExceltoObject/>
     <div>
      <button onClick={listprocessorstart}>processlist</button>
      <button onClick={initiateconvert}>convert to csv</button>
     </div>
    </>
  )
}

export default App
