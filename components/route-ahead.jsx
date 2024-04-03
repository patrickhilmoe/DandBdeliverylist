import * as XLSX from 'xlsx';
import {useState} from 'react';
import Button from '@mui/material/Button'
import { LineitemAdd } from './add-to-line-items';

// import { stockWithCat } from '../components/object-arrays/stockwithcat'
// import { AddressesTest } from '../components/object-arrays/addresses'
// import { LineItemsTest } from '../components/object-arrays/line-items'
// import { OpenOrderReportTest } from '../components/object-arrays/open-order-report'
// import { SampleOpenOrder} from '../components/add-to-line-items'
import { starNum } from '../components/object-arrays/starArr'



function RouteAhead(props) {
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

    function listprocessorstart() {
        LineitemAdd(OpenOrderReportTest, LineItemsTest, AddressesTest, starNum, stockWithCat)
      }

    return (
        <>
        <div className='container'>
    <div className='row'>
     <div className='col'>
    <h3>Upload These for Route Ahead</h3>
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
          <strong>Stock with Category</strong>
          <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcelCat(file);
          }}
        />
      </div>
          <br></br>
          <br></br>
     <div>
      <Button variant="contained" onClick={listprocessorstart}>Route Ahead Processor</Button>

      {/* <button onClick={runpickheader}>pickheader test</button> */}
     </div>
      </div>
      </div>
      </div>
        </>
    )

}

export default RouteAhead;