import { useState, useEffect } from 'react'
import './App.css'
import * as XLSX from 'xlsx'
import ExceltoObject from '../components/object_converter'
import * as line from '../components/add-to-line-items'
import { stockWithCat } from '../components/object-arrays/stockwithcat'
import { starNum } from '../components/object-arrays/starArr'
import { processedlist, LineitemAdd, pickAdds } from '../components/add-to-line-items'
import { convert, convertV2 } from '../components/convertocsv'
import { PicksTest } from '../components/object-arrays/picks-2-19'
// import { AddressesTest } from '../components/object-arrays/addresses'
// import { LineItemsTest } from '../components/object-arrays/line-items'
// import { OpenOrderReportTest } from '../components/object-arrays/open-order-report'
// import { SampleOpenOrder} from '../components/add-to-line-items'
import { ServiceTime, SampleList, SampleListChange } from '../components/service-time'
import { MapOrder } from '../components/map-order'
import { CheckUpdates, updatedlist, potentiallineupdate } from '../components/check-updates'
import { newlisttest, oldlisttest } from '../components/adding-old-new'
import { PicksKeyUpdate } from '../components/renameheader'

function App() {
  const [CatStock, setCatStock] = useState([]);
  const [OpenOrder, setOpenOrder] = useState([]);
  const [Addresses, setAddresses] = useState([]);
  const [LineItems, setLineItems] = useState([]);
  const [EffectTest, setEffectTest] = useState("");
  const [Picks, setPicks] = useState([]);

  const readExcelCat = (file) => {
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
      setCatStock(d);
    });

  };

  const readExcelOpenOrder = (file) => {
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
      setOpenOrder(d);
    });

  };

  const readExcelAddresses = (file) => {
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
      setAddresses(d);
    });

  };

  const readExcelLineItems = (file) => {
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
      setLineItems(d);
    });

  };

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

  // line.Orders(line.SampleOpenOrder, line.SampleLineItems);

  // function to use for testing with local files
  // function listprocessorstart() {
  //   LineitemAdd(OpenOrderReportTest, LineItemsTest, AddressesTest, starNum, stockWithCat)
  // }

  // function to use with uploading files
  function listprocessorstart() {
    LineitemAdd(OpenOrder, LineItems, Addresses, starNum, CatStock)
  }

  function integratepick() {
    pickAdds(Picks, processedlist)
  }

  function runpickheader() {
    PicksKeyUpdate(Picks);
  }

  function initiateconvert() {
    // console.log(processedlist);
    convertV2(processedlist);
  }

  return (
    <>
     <div>
      <button onClick={listprocessorstart}>processlist</button>
      <button onClick={integratepick}>integrate info from picks</button>
      <button onClick={runpickheader}>pickheader test</button>
     </div>
     <div>
      <div>
          <strong>Stock with Category</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcelCat(file);
          }}
        />
      </div>
      <div>
          <strong>Open Order Report</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcelOpenOrder(file);
          }}
        />
      </div>
      <div>
          <strong>Address Report</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcelAddresses(file);
          }}
        />
      </div>
      <div>
          <strong>Lineitems Report</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcelLineItems(file);
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
      <button onClick={(initiateconvert)}>convert object array</button>
      {/* <button onClick={(CombineUpdates)}>COMBINE OLD LIST AND NEW LIST</button> */}
      {/* <button onClick={(testEffect)}>test effect</button> */}
     </div>
     
     <div>
      <ExceltoObject/>
     </div>
     <div>
      <MapOrder SampleList={potentiallineupdate} here={EffectTest}/>
     </div>
    </>
  )
}

export default App
