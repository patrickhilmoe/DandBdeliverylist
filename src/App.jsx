import { useState, useEffect } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import * as XLSX from 'xlsx'
import ExceltoObject from '../components/object_converter'
import * as line from '../components/add-to-line-items'
import { starNum } from '../components/object-arrays/starArr'
import { processedlist, LineitemAdd, pickAdds, QuickLineitemAdd, LineItemAddPicks } from '../components/add-to-line-items'
import { convert, convertV2 } from '../components/convertocsv'

import { PicksTest, MasterPicksTest } from '../components/object-arrays/picks-2-19'
// import { stockWithCat } from '../components/object-arrays/stockwithcat'
// import { AddressesTest } from '../components/object-arrays/addresses'
// import { LineItemsTest } from '../components/object-arrays/line-items'
// import { OpenOrderReportTest } from '../components/object-arrays/open-order-report'
// import { SampleOpenOrder} from '../components/object-arrays/other-test-arrays'

import { LineItemDateTest } from '../components/object-arrays/line-item-by-date';
import { SampleList, SampleListChange } from '../components/object-arrays/other-test-arrays'
import { newlisttest, oldlisttest } from '../components/object-arrays/other-test-arrays'
import { ServiceTime, ConcatCharge } from '../components/service-time'
import { MapOrder } from '../components/map-order'
import { CheckUpdates, updatedlist, potentiallineupdate } from '../components/check-updates'
import { PicksKeyUpdate } from '../components/renameheader'
import RouteAhead from '../components/route-ahead'

function App() {
  const [Picks, setPicks] = useState([]);
  const [MasterPicks, setMasterList] = useState([]);
  const [LineItemsDate, setLineItemsDate] = useState([]);

  const readPicks = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setPicks(d);
    });

  };

  const readLineItemsDate = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setLineItemsDate(d);
    });

  };

  const readMasterPicks = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setMasterPicks(d);
    });

  };

  // line.Orders(line.SampleOpenOrder, line.SampleLineItems);

  // function to use for testing with local files
  function listprocessorstart() {
    LineitemAdd(OpenOrderReportTest, LineItemsTest, AddressesTest, starNum, stockWithCat)
  }

  // function to use with uploading files
  // function listprocessorstart() {
  //   LineitemAdd(LineItems, OpenOrder, Addresses, starNum, CatStock)
  //   alert("Route Ahead Report Finished!")
  // }

  function integratepick() {
    pickAdds(LineitemAdd(LineItems, OpenOrder, Addresses, starNum, CatStock), Picks)
    alert("Picks Report Finished!")
  }

  function quicklineitem() {
    LineItemAddPicks(LineItemsDate, Picks, MasterPicks);
  }

  function runpickheader() {
    PicksKeyUpdate(Picks);
  }

  function initiateconvert() {
    // console.log(processedlist);
    convertV2(processedlist);
  }

  // ConcatCharge(SampleList);

  // CheckUpdates(SampleListChange, SampleList)

  // QuickLineitemAdd(LineItemDateTest, PicksTest);

  // console.log(PicksTest);

  return (
    <>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <RouteAhead />
      </div>
     <div className='col'>
          <h3>Pick Report</h3>
          <div>
          <strong>Line Item Report (DB-SHIP)</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readLineItemsDate(file);
          }}
         />
         </div>
          <div>
          <strong>Picks Report</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readPicks(file);
          }}
        />
      </div>
      <div>
          <strong>Master List</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readMasterPicks(file);
          }}
        />
      </div>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={quicklineitem}>Picks Processor</Button>
     </div>
     </div>
     <div className="row">
     <button onClick={(initiateconvert)}>Click Me to Download!</button>
     </div>
     </div>
     
     <div>
      <ExceltoObject/>
     </div>
     {/* <div>
      <MapOrder SampleList={potentiallineupdate} here={EffectTest}/>
     </div> */}
    </>
  )
}

export default App
