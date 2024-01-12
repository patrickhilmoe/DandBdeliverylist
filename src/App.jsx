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
import { MapOrder } from '../components/map-order'

function App() {
  const [CatStock, setCatStock] = useState([]);
  const [OpenOrder, setOpenOrder] = useState([]);
  const [Addresses, setAddresses] = useState([]);
  const [LineItems, setLineItems] = useState([]);

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

  // line.Orders(line.SampleOpenOrder, line.SampleLineItems);

  function listprocessorstart() {
    // line.LineitemAdd(SampleOpenOrder, LineItems, Addresses, starNum, stockWithCat);
    ServiceTime(SampleList, starNum, stockWithCat);
  }

  function initiateconvert() {
    // console.log(processedlist);
    convert(processedlist);
  }
  
  const numbers = [1, 2, 3, 4, 5];



  return (
    <>
     <div>
      <button onClick={listprocessorstart}>processlist</button>
      <button onClick={initiateconvert}>convert to csv</button>
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
     </div>
     <div>
     <MapOrder SampleList={SampleList} />
     </div>
    </>
  )
}

export default App
