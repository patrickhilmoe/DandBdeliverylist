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
                    // console.log("adding hookup desc", temp)
                    if (hookup[0]) {
                        // arr.push(temp)
                        concathookup.push(temp);
                    }
                    // build new processed list here?
              }
              order = l.OrderNumber;
              arr = [];
        })
        list.pop();
        list.push(...concathookup);
        // test to see if this method works - 3/10
    }

export const SampleList = [
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "*HOOKUPREFRIG1",
        "Description1": "HOOKUP REFRIGERATOR",
        "QuantitytoShip": 1,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "B36CD50SNS",
        "Description1": "Bosch 500 Series 36\" Free",
        "QuantitytoShip": 1,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "LSIS6338F",
        "Description1": "LG Studio 30\" Slide-In",
        "QuantitytoShip": 5,
        "Location" : "001",
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "HBC143ESS",
        "Description1": "Best 43\" Ceiling Mounted Range",
        "QuantitytoShip": 1,
        "Location": 500,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "ILB6",
        "Description1": "BEST 600CFM INLINE BLOWER",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*CORD",
        "Description1": "RANGE OR DRYER CORD",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*INSTALLHLINER",
        "Description1": "INSTALL HOOD LINER UP TO 36\"",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "JES1657DMWW",
        "Description1": "GE 1.6 cu ft Countertop",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GRSC2352AF",
        "Description1": "Frigidaire Gallery 36\" 22.3",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GCFE3060BF",
        "Description1": "Frigidaire Gallery 30\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "JVW5301SJSS",
        "Description1": "GE 30\" Wall Mount Chimney",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": "",
        "Category": "RAH"
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GDPH4515AF",
        "Description1": "Frigidaire Gallery 24\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "FGBC5334VS",
        "Description1": "Frigidaire 5.3 cu ft Built In",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "*ESP",
        "Description1": "CUSTOMER DECLINED EXT WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "RF203QDUVX1",
        "Description1": "Fisher Paykel Quad Door 36\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*HOOKUPREFRIG1",
        "Description1": "HOOKUP REFRIGERATOR",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*HAULAWAY",
        "Description1": "APPL CONTAINING REFRIGERANT",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "*ESP",
        "Description1": "CUSTOMER DECLINED EXT WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "528648-61",
        "Description1": "Sealy Banstead Plush Tight",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": "",
        "Category": "MAT"
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "528649-51",
        "Description1": "Sealy Banstead Plush Pillow",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": "",
        "Category": "MAT"
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "*FREEDELIVERY",
        "Description1": "FREE DELIVERY TO HOME",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "NED4655EW",
        "Description1": "Amana 6.5 cu ft Dryer",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 30,
        "Category": "DRY"
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "WET4024HW",
        "Description1": "Whirlpool 24\" Electric Laundry",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": "",
        "Category": "COM"
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "WM3400CW",
        "Description1": "LG 27\" Front Load Washer",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "014035",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "DLE3400W",
        "Description1": "LG 27\" Electric Dryer",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*CORD",
        "Description1": "CORD",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "KSTK4",
        "Description1": "LG Stacking Kit for 27\" Wide",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    }
]

export const SampleListChange = [
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "*HOOKUPREFRIG1",
        "Description1": "HOOKUP REFRIGERATOR",
        "QuantitytoShip": 1,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "B36CD50SNS",
        "Description1": "Bosch 500 Series 36\" Free",
        "QuantitytoShip": 2,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11314787,
        "CustomerNumber": 98941,
        "CustomerName": "CASSELLA, EJ",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 304,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1012 E TOLEDO ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "LSIS6338F",
        "Description1": "LG Studio 30\" Slide-In",
        "QuantitytoShip": 7,
        "Location": 500,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "HBC143ESS",
        "Description1": "Best 43\" Ceiling Mounted Range",
        "QuantitytoShip": 1,
        "Location": "001",
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "ILB6",
        "Description1": "BEST 600CFM INLINE BLOWER",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*CORD",
        "Description1": "RANGE OR DRYER CORD",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*INSTALLHLINER",
        "Description1": "INSTALL HOOD LINER UP TO 36\"",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "JES1657DMWW",
        "Description1": "GE 1.6 cu ft Countertop",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11316872,
        "CustomerNumber": 128950,
        "CustomerName": "COLLINS, MISHA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 312,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1425 AUSTIN ST",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98229",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GRSC2352AF",
        "Description1": "Frigidaire Gallery 36\" 22.3",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GCFE3060BF",
        "Description1": "Frigidaire Gallery 30\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "JVW5301SJSS",
        "Description1": "GE 30\" Wall Mount Chimney",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": "",
        "Category": "RAH"
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "GDPH4515AF",
        "Description1": "Frigidaire Gallery 24\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "FGBC5334VS",
        "Description1": "Frigidaire 5.3 cu ft Built In",
        "QuantitytoShip": 3,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "*ESP",
        "Description1": "CUSTOMER DECLINED EXT WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11317412,
        "CustomerNumber": 141943,
        "CustomerName": "LOVE, LISA",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "5626 ELM COURT",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "RF203QDUVX1",
        "Description1": "Fisher Paykel Quad Door 36\"",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 60,
        "Category": "REF"
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "014036",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*HOOKUPREFRIG1",
        "Description1": "HOOKUP REFRIGERATOR",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*HAULAWAY",
        "Description1": "APPL CONTAINING REFRIGERANT",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320648,
        "CustomerNumber": 60916,
        "CustomerName": "BECK, ALICIA & RICK",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 329,
        "ShippingDate": 45278,
        "ShiptoAddress1": "4193 SALTSPRING DR",
        "ShiptoAddress2": "",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "*ESP",
        "Description1": "CUSTOMER DECLINED EXT WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "528648-61",
        "Description1": "Sealy Banstead Plush Tight",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": "",
        "Category": "MAT"
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "528649-51",
        "Description1": "Sealy Banstead Plush Pillow",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": "",
        "Category": "MAT"
    },
    {
        "OrderNumber": 11320960,
        "CustomerNumber": 186288,
        "CustomerName": "TOPOR, JANUSZ",
        "StockShipped": "*FREEDELIVERY",
        "Description1": "FREE DELIVERY TO HOME",
        "QuantitytoShip": 1,
        "Salesperson": 335,
        "ShippingDate": 45278,
        "ShiptoAddress1": "3965 LOOMIS TRAIL RD",
        "ShiptoAddress2": "",
        "ShiptoCity": "BLAINE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98230",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "NED4655EW",
        "Description1": "Amana 6.5 cu ft Dryer",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": 30,
        "Category": "DRY"
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321088,
        "CustomerNumber": 46344,
        "CustomerName": "BEACON MANOR APARTMENTS",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2308 DOUGLAS RD #301",
        "ShiptoAddress2": "DENAI 360-441-5886",
        "ShiptoCity": "FERNDALE",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98248",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "WET4024HW",
        "Description1": "Whirlpool 24\" Electric Laundry",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": "",
        "Category": "COM"
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321090,
        "CustomerNumber": 183714,
        "CustomerName": "CHUCKANUT PM & REALTY INC.",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "2000 KNOX AVE #1",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "WM3400CW",
        "Description1": "LG 27\" Front Load Washer",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "014035",
        "Description1": "5 YEAR PARTS/LABOR WARRANTY",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "DLEX3400W",
        "Description1": "LG 27\" Electric Dryer - UPDATED DRYER",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*CORD",
        "Description1": "CORD",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "KSTK4",
        "Description1": "LG Stacking Kit for 27\" Wide",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*DELIVERY",
        "Description1": "DELIVERY CHARGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321092,
        "CustomerNumber": 168358,
        "CustomerName": "SAMISH COMMONS",
        "StockShipped": "ADB1400AMW",
        "Description1": "AMANA DW - ADDED IN TEST",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1000 OTIS ST #A-102",
        "ShiptoAddress2": "P/U KEYS AT CCM SHOP",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321000,
        "CustomerNumber": 168359,
        "CustomerName": "NOS VEROTU",
        "StockShipped": "LSDL6336F",
        "Description1": "LG RANGE",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1001 OTIS ST #A-102",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    },
    {
        "OrderNumber": 11321000,
        "CustomerNumber": 168359,
        "CustomerName": "NOS VEROTU",
        "StockShipped": "*DISPOSAL",
        "Description1": "APPLIANCE UNINSTALLED AND",
        "QuantitytoShip": 1,
        "Salesperson": 301,
        "ShippingDate": 45278,
        "ShiptoAddress1": "1001 OTIS ST #A-102",
        "ShiptoAddress2": "",
        "ShiptoCity": "BELLINGHAM",
        "ShiptoState": "WA",
        "ShiptoZipCode": "98225",
        "ServiceTime": ""
    }
]