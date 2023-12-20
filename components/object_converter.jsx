import * as XLSX from 'xlsx';
import {useState} from 'react';
import Rename from './renameheader';


function ExceltoObject() {
    const [item, setItems] = useState([]);

    const readExcel = (file) => {
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
          setItems(d);
        });
    
        console.log(item)
    
    };

    function PrintObject() {
      console.log(item);
    }

    return(
        <div>
        <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
          <button onClick={PrintObject}>Print Object in the Console</button>
          <button onClick={Rename}>button</button>
        </div>
    )
}

export default ExceltoObject;