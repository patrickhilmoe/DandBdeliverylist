export const ServiceTime = (listarr, stararr, catarr) => {
    let arr = [];
    let arr2 = [];
    let ord = "";
    let bigarr = [];
    let bigarray = [];
    // clear category and service time
    listarr.forEach((x) => {
        x.ServiceTime = ""
        x.Category = ""
    })
    const lastobject = [{ OrderNumber: "last order"}]
    listarr.push(...lastobject)
  listarr.forEach((x) => {
    //adding product category to main list
    catarr.forEach((cat) => {
      if (x.StockShipped === cat.StockShipped) {
        x.Category = cat.ProductCategory;
        // console.log(`model is ${x.StockShipped} and category is ${x.Category}`)
      }
    });
    //create array based on order number
    if (ord == x.OrderNumber || ord == "") {
      ord = x.OrderNumber;
      arr.push(x);
      
    } else {
    //   console.log(arr);
      // below is for finding service times matching with product category for every customer's order
      // if array has hookup charge, find object with a product category and add the service time. Then delete the hookup charge object. -- then loop again until no more hook up charges, then start again with creating new array object for new customer.
      
      // InstallItems(arr);

      arr.forEach((ar) => {

        stararr.forEach((star) => {
            let startemp = "";
          if (ar.StockShipped === star.StockShipped) {
            startemp = ar.StockShipped
            arr.forEach((ar2) => {
                // if star item matches appliance category apply service time
                if (startemp === "*CORD") {
                    if (ar2.Category == "RAN" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                    if (ar2.Category == "DRY") {
                        ar2.ServiceTime = 30
                    }
                }
                if (startemp === "*DRYERKIT") {
                    if (ar2.Category === "DRY" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }
                if (startemp === "*GASHOOKUP") {
                    if (ar2.Category === "DRY" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 45
                    }
                    if (ar2.Category === "RAN" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 45
                    }
                }
                if (startemp === "*HOOKUPREFRIG1") {
                    if (ar2.Category === "REF" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 60
                    }
                    if (ar2.Category === "BLM" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 60
                    }
                }
                if (startemp === "*HOOKUPREFRIG2") {
                    if (ar2.Category === "REF" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 60
                    }
                    if (ar2.Category === "BLM" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 60
                    }
                }
                if (startemp === "*HOSE-REGULAR") {
                    if (ar2.Category === "WAS" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }
                if (startemp === "*HOSE-STAINLESS") {
                    if (ar2.Category === "WAS" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }
            });
          }
        });
        // console.log(ar.Salesperson)
        // if ralph order add service time
        if (ar.Salesperson === '301') {
            // console.log(`adding service time for saleman number ${ar.Salesperson}`)
            if (ar.Category === "WAS" && !ar.ServiceTime) {
                ar.ServiceTime = 30
            }
            if (ar.Category === "REF" && !ar.ServiceTime) {
                ar.ServiceTime = 60
            }
            if (ar.Category === "DRY" && !ar.ServiceTime) {
                ar.ServiceTime = 45
            }
            if (ar.Category === "RAN" && !ar.ServiceTime) {
                ar.ServiceTime = 45
            }
            if (ar.Category === "COM" && !ar.ServiceTime) {
                ar.ServiceTime = 45
            }
        }
    });

    // add put all hookups into an array and create new object to have it
    // let hookup = [];
    // let temp = {};
    // arr.forEach((ord) => {
    //     if (
    //         ord.StockShipped === "*CORD" || 
    //         ord.StockShipped === "*DRYERKIT" || 
    //         ord.StockShipped === "*GASHOOKUP" || 
    //         ord.StockShipped === "*HOOKUPREFRIG1" ||
    //         ord.StockShipped === "*HOOKUPREFRIG2" ||
    //         ord.StockShipped === "*HOSE-REGULAR" ||
    //         ord.StockShipped === "*HOSE-STAINLESS"
    //         ) {
    //             hookup.push(ord.StockShipped);
    //             hookup.push(ord.QuantitytoShip)
    //         }
    //     })
    //     temp =     {
    //         "OrderNumber": ord.Ordernumber,
    //         "CustomerNumber": ord.CustomerNumber,
    //         "CustomerName": ord.CustomerName,
    //         "StockShipped": "Charges",
    //         "Description1": hookup,
    //         "QuantitytoShip": 1,
    //         "Salesperson": ord.Salesperson,
    //         "ShippingDate": ord.ShippingDate,
    //         "ShiptoAddress1": ord.ShiptoAddress1,
    //         "ShiptoAddress2": ord.ShiptoAddress2,
    //         "ShiptoCity": ord.ShiptoCity,
    //         "ShiptoState": ord.ShiptoState,
    //         "ShiptoZipCode": ord.ShiptoZipCode,
    //         "ServiceTime": ord.ServiceTime
    //     }
    //     arr.push(temp)
        // adding hook up in description ends here

    //   console.table("temp order:", arr);
      arr2.push(arr);
    //   console.table("aggrigate order:", arr2);
      bigarray = bigarr.concat(arr2);

      ord = x.OrderNumber;
      arr = [];
      arr.push(x);
      //   console.log('x pushed to arr:')
      //   console.log(x);
    }
});
// remove the last in the array for catchin the last order
listarr.pop()
// console.table(listarr);
  
//   console.log('bigarray is:');
//   console.log(bigarray);

//   const numbers = [1,2,3,4,5];
//   let listItems = numbers.map((number) => 
//   <li key={number.toString()}>
//       {number}
//   </li>
}


    // insert this funtion into area isolating order by order number
    export const ConcatCharge = (list) => {
        let arr = [];   
        let order = "";
        let concathookup = [];
        const lastobject = [{ OrderNumber: "last order"}]
        list.push(...lastobject)
        list.forEach((l) => {
            if (order == l.OrderNumber || order == "") {
                order = l.OrderNumber;
                return arr.push(l);
            } else {
                let hookup = [];
                let temp = {};
                arr.forEach((ord) => {
                    if (
                        ord.StockShipped === "*CORD" || 
                        ord.StockShipped === "*DRYERKIT" || 
                        ord.StockShipped === "*GASHOOKUP" || 
                        ord.StockShipped === "*HOOKUPREFRIG1" ||
                        ord.StockShipped === "*HOOKUPREFRIG2" ||
                        ord.StockShipped === "*HOSE-REGULAR" ||
                        ord.StockShipped === "*HOSE-STAINLESS" ||
                        ord.StockShipped === "*DISPOSAL"
                        ) {
                            hookup.push(ord.StockShipped);
                            hookup.push(ord.QuantitytoShip)
                            console.log(ord.StockShipped);
                        }
                        temp.OrderNumber = ord.OrderNumber
                        temp.CustomerNumber = ord.CustomerNumber
                        temp.CustomerName = ord.CustomerName
                        temp.Salesperson = ord.Salesperson
                        temp.ShippingDate = ord.ShippingDate
                        temp.PhoneNumber = ord.PhoneNumber
                        temp.EmailAddress = ord.EmailAddress
                        temp.ShiptoName = ord.ShiptoName
                        temp.ShiptoAddress1 = ord.ShiptoAddress1
                        temp.ShiptoAddress2 = ord.ShiptoAddress2
                        temp.ShiptoCity = ord.ShiptoCity
                        temp.ShiptoState = ord.ShiptoState
                        temp.ShiptoZipCode = ord.ShiptoZipCode
                        temp.HeaderTextExpanded = ord.HeaderTextExpanded
                    })
                    console.log("Hookups are",hookup);
                    temp.StockShipped = "Charges";
                    temp.Description1 = hookup.toString();
                    temp.QuantitytoShip = 1;
                    // if there are hookups on the order (colleted in hookup array) pass into the if statement
                    if (hookup[0]) {
                        // creating a collection of concatinated hook up lines
                        concathookup.push(temp);
                    }
                    // build new processed list here?
              }
              order = l.OrderNumber;
              arr = [];
        })
        list.pop();
        // add all of the concatinated hookup lines to the list
        list.push(...concathookup);
        // test to see if this method works - 3/10
    }