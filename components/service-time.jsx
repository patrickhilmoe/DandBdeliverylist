export const ServiceTime = (listarr, stararr, catarr) => {
    let arr = [];
    let arr2 = [];
    let ord = "";
    let bigarr = [];
    let bigarray = [];
  listarr.forEach((x) => {
    x.ServiceTime = "";
    //adding product category to main list
    catarr.forEach((cat) => {
      if (x.StockShipped === cat.Model) {
        x.Category = cat.ProductCategory;
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
          if (ar.StockShipped === star.StockShipped) {

            arr.forEach((ar2) => {
                console.log(ar.StockShipped);
                // if star item matches appliance category apply service time
                if ("*CORD") {
                    if (ar2.Category == "RAN" && !ar2.ServiceTime) {
                        console.log(`order name is ${x.CustomerName} and order number ${x.OrderNumber}`)
                        ar2.ServiceTime = 30
                    }
                    if (ar2.Category == "DRY" && !ar2.ServiceTime) {
                        console.log(`order name is ${x.CustomerName} and order number ${x.OrderNumber}`)
                        ar2.ServiceTime = 30
                    }
                }
                if (ar2.StockShipped === "*DRYERKIT") {
                    if (ar2.Category === "DRY" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }
                if ("*GASHOOKUP") {
                    if (ar2.Category === "DRY" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 45
                    }
                    if (ar2.Category === "RAN" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 45
                    }
                }
                if ("*HOOKUPREFRIG1") {
                    if (ar2.Category === "REF" && !ar2.ServiceTime) {
                        console.log("its working!!")
                        ar2.ServiceTime = 60
                    }
                }
                if ("*HOOKUPREFRIG2") {
                    if (ar2.Category === "REF" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 60
                    }
                }
                if ("HOSE-REGULAR") {
                    if (ar2.Category === "WAS" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }
                if ("HOSE-STAINLESS") {
                    if (ar2.Category === "WAS" && !ar2.ServiceTime) {
                        ar2.ServiceTime = 30
                    }
                }

            });
          }
        });
      });

      console.log(arr);
      arr2.push(arr);
      // console.log(arr2);
      bigarray = bigarr.concat(arr2);

      ord = x.OrderNumber;
      arr = [];
      arr.push(x);
      console.log('x pushed to arr:')
      console.log(x);
    }
  });
  console.log('bigarray is:');
  console.log(bigarray);

//   const numbers = [1,2,3,4,5];
//   let listItems = numbers.map((number) => 
//   <li key={number.toString()}>
//       {number}
//   </li>
}

export const test = () => {
    console.log("it is working");
}