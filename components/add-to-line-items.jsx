import { ServiceTime } from './service-time'

    export const SampleOpenOrder =    [
        {
            "Ship-toCity": "BELLINGHAM",
            "Salesperson": 304,
            "OrderNumber": 11314787,
            "OrderDate": 45147,
            "CustomerNumber": 98941,
            "CustomerName": "CASSELLA, EJ",
            "ShippingDate": 45278,
            "TotalInvoiceAmt": 3328.08,
            "TotalAllPayments": 3328.08
        }
    ]
    
    export const SampleLineItems = [
        {
            "OrderNumber": 11314787,
            "LineNumber": 80,
            "CustomerNumber": 98941,
            "CustomerName": "CASSELLA, EJ",
            "LineNumber_1": 80,
            "StockShipped": "*HOOKUPREFRIG1",
            "ServiceCode": "",
            "Description1": "HOOKUP REFRIGERATOR",
            "QuantityOrdered": 1,
            "UnitOfMeasure": "EA",
            "UnitPrice": 49.95,
            "MATCHORDER": 11314787,
            "EtendedPrice": 49.95
        },
        {
            "OrderNumber": 11314787,
            "LineNumber": 90,
            "CustomerNumber": 98941,
            "CustomerName": "CASSELLA, EJ",
            "LineNumber_1": 90,
            "StockShipped": "B36CD50SNS",
            "ServiceCode": "",
            "Description1": "Bosch 500 Series 36\" Free",
            "QuantityOrdered": 1,
            "UnitOfMeasure": "EA",
            "UnitPrice": 2969,
            "MATCHORDER": 11314787,
            "EtendedPrice": 2969
        },
        {
            "OrderNumber": 11314788,
            "LineNumber": 100,
            "CustomerNumber": 98941,
            "CustomerName": "placeholder name",
            "LineNumber_1": 100,
            "StockShipped": "*DELIVERY",
            "ServiceCode": "",
            "Description1": "DELIVERY CHARGE",
            "QuantityOrdered": 1,
            "UnitOfMeasure": "EA",
            "UnitPrice": 39.95,
            "MATCHORDER": 11314787,
            "EtendedPrice": 39.95
        }
    ];
    
    export const SampleAddresses = [
        {
            "@VAR_BILLNAME=": "@VAR_BILLNAME=",
            "Bill-to Name": "CASSELLA, EJ",
            "@VAR_BILLADD1=": "@VAR_BILLADD1=",
            "Bill-to Address 1": "1012 E TOLEDO ST",
            "@VAR_BILLADD2=": "@VAR_BILLADD2=",
            "Bill-to Address 2": "",
            "@VAR_BILLCITY=": "@VAR_BILLCITY=",
            "Bill-to City": "BELLINGHAM",
            "@VAR_BILLST=": "@VAR_BILLST=",
            "Bill-to State": "WA",
            "@VAR_BILLZIP=": "@VAR_BILLZIP=",
            "Bill-to Zip": "98229",
            "@VAR_SHIPNAME=": "@VAR_SHIPNAME=",
            "Ship-to Name": "CASSELLA, EJ",
            "@VAR_SHIPADD1=": "@VAR_SHIPADD1=",
            "ShiptoAddress1": "1012 E TOLEDO ST",
            "@VAR_SHIPADD2=": "@VAR_SHIPADD2=",
            "ShiptoAddress2": "",
            "@VAR_SHIPCITY=": "@VAR_SHIPCITY=",
            "ShiptoCity": "BELLINGHAM",
            "@VAR_SHIPST=": "@VAR_SHIPST=",
            "ShiptoState": "WA",
            "@VAR_SHIPZIP=": "@VAR_SHIPZIP=",
            "ShiptoZipCode": "98229",
            "@VAR_STATUS=": "@VAR_STATUS=",
            "Entered": "Entered",
            "Only": "Only",
            "Selected": "",
            "for": "",
            "Invoicing": "",
            "Invoice": "",
            "Printed": "",
            "@VAR_ORDDT=": "@VAR_ORDDT=",
            "Order Date": 45147,
            "@VAR_PONO=": "@VAR_PONO=",
            "PO Number": "REFER",
            "(none)": "",
            "@VAR_SHIPVIA=": "@VAR_SHIPVIA=",
            "Ship Via Code": 100,
            "Ship-via Description": "Store Delivery",
            "@VAR_ORDNO=": "@VAR_ORDNO=",
            "OrderNumber": 11314787,
            "@VAR_PRICE=": "@VAR_PRICE=",
            "Total Price": 3058.9,
            "@VAR_DISC=": "@VAR_DISC=",
            "-": "",
            "Total Discount": 0,
            "@VAR_TAX=": "@VAR_TAX=",
            "Tax Amount": 269.18,
            "@VAR_MISC1D=": "@VAR_MISC1D=",
            "Misc Charge Code 1": "",
            "Misc Charge Desc": "",
            "@VAR_DISC_LIT=": "@VAR_DISC_LIT=",
            "Trade": "",
            "Discount": "",
            "@VAR_MISC1=": "@VAR_MISC1=",
            "Misc Charge Amount 1": 0,
            "@VAR_MISC2D=": "@VAR_MISC2D=",
            "Misc Charge Code 2": "",
            "Misc Charge Desc_1": "",
            "@VAR_MISC2=": "@VAR_MISC2=",
            "Misc Charge Amount 2": 0,
            "@VAR_MISC3=": "@VAR_MISC3=",
            "Misc Charge Amount 3": 0,
            "@VAR_MISC3D=": "@VAR_MISC3D=",
            "Misc Charge Code 3": "",
            "Misc Charge Desc_2": "",
            "@VAR_MISC4D=": "@VAR_MISC4D=",
            "Misc Charge Code 4": "",
            "Misc Charge Desc_3": "",
            "@VAR_MISC4=": "@VAR_MISC4=",
            "Misc Charge Amount 4": 0,
            "@VAR_DUE=": "@VAR_DUE=",
            "Charge Amount": 0,
            "@VAR_PAYTEMP=": "@VAR_PAYTEMP=",
            "@VAR_PAY=": "@VAR_PAY=",
            "Payments": 3328.08
        },
        {
            "@VAR_BILLNAME=": "@VAR_BILLNAME=",
            "Bill-to Name": "TIGER CONSTRUCTION LTD",
            "@VAR_BILLADD1=": "@VAR_BILLADD1=",
            "Bill-to Address 1": "PO BOX 368",
            "@VAR_BILLADD2=": "@VAR_BILLADD2=",
            "Bill-to Address 2": "",
            "@VAR_BILLCITY=": "@VAR_BILLCITY=",
            "Bill-to City": "EVERSON",
            "@VAR_BILLST=": "@VAR_BILLST=",
            "Bill-to State": "WA",
            "@VAR_BILLZIP=": "@VAR_BILLZIP=",
            "Bill-to Zip": "98247-0368",
            "@VAR_SHIPNAME=": "@VAR_SHIPNAME=",
            "Ship-to Name": "MT VERNON FIRE STATION",
            "@VAR_SHIPADD1=": "@VAR_SHIPADD1=",
            "Ship-to Address 1": "",
            "@VAR_SHIPADD2=": "@VAR_SHIPADD2=",
            "Ship-to Address 2": "",
            "@VAR_SHIPCITY=": "@VAR_SHIPCITY=",
            "Ship-to City": "MOUNT VERNON",
            "@VAR_SHIPST=": "@VAR_SHIPST=",
            "Ship-to State": "WA",
            "@VAR_SHIPZIP=": "@VAR_SHIPZIP=",
            "Ship-to Zip Code": "98277",
            "@VAR_STATUS=": "@VAR_STATUS=",
            "Entered": "Entered",
            "Only": "Only",
            "Selected": "",
            "for": "",
            "Invoicing": "",
            "Invoice": "",
            "Printed": "",
            "@VAR_ORDDT=": "@VAR_ORDDT=",
            "Order Date": 45092,
            "@VAR_PONO=": "@VAR_PONO=",
            "PO Number": "MT VERN FIRE",
            "(none)": "",
            "@VAR_SHIPVIA=": "@VAR_SHIPVIA=",
            "Ship Via Code": 100,
            "Ship-via Description": "Store Delivery",
            "@VAR_ORDNO=": "@VAR_ORDNO=",
            "OrderNumber": 11314792,
            "@VAR_PRICE=": "@VAR_PRICE=",
            "Total Price": 14162.95,
            "@VAR_DISC=": "@VAR_DISC=",
            "-": "",
            "Total Discount": 0,
            "@VAR_TAX=": "@VAR_TAX=",
            "Tax Amount": 0,
            "@VAR_MISC1D=": "@VAR_MISC1D=",
            "Misc Charge Code 1": "",
            "Misc Charge Desc": "",
            "@VAR_DISC_LIT=": "@VAR_DISC_LIT=",
            "Trade": "",
            "Discount": "",
            "@VAR_MISC1=": "@VAR_MISC1=",
            "Misc Charge Amount 1": 0,
            "@VAR_MISC2D=": "@VAR_MISC2D=",
            "Misc Charge Code 2": "",
            "Misc Charge Desc_1": "",
            "@VAR_MISC2=": "@VAR_MISC2=",
            "Misc Charge Amount 2": 0,
            "@VAR_MISC3=": "@VAR_MISC3=",
            "Misc Charge Amount 3": 0,
            "@VAR_MISC3D=": "@VAR_MISC3D=",
            "Misc Charge Code 3": "",
            "Misc Charge Desc_2": "",
            "@VAR_MISC4D=": "@VAR_MISC4D=",
            "Misc Charge Code 4": "",
            "Misc Charge Desc_3": "",
            "@VAR_MISC4=": "@VAR_MISC4=",
            "Misc Charge Amount 4": 0,
            "@VAR_DUE=": "@VAR_DUE=",
            "Charge Amount": 14162.95,
            "@VAR_PAYTEMP=": "@VAR_PAYTEMP=",
            "@VAR_PAY=": "@VAR_PAY=",
            "Payments": 0
        }
    ];

    export let processedlist = [];

    // adding address to each line item
    export const LineitemAdd = (lineitems, addresses, stararr, catarr) => {
        lineitems.forEach((x) => {
            addresses.forEach((y) => {
                if(x.OrderNumber === y.OrderNumber) {
                    x.ShiptoAddress1 = y.ShiptoAddress1;
                    x.ShiptoAddress2 = y.ShiptoAddress2;
                    x.ShiptoCity = y.ShiptoCity;
                    x.ShiptoState = y.ShiptoState;
                    x.ShiptoZipCode = y.ShiptoZipCode;
                }
            })
        })
        console.log(lineitems);
        ServiceTime(lineitems, stararr, catarr);
        processedlist = lineitems
        console.log("processed list is:")
        console.table(processedlist);
    }

    // LineitemAdd(SampleLineItems, SampleAddresses);

    //Sift through open order sheet and line item sheet for only order sheet orders


    export const Orders = (openorders, lineitems) => {

        let orders =[];
        openorders.forEach((x) => {
            lineitems.forEach((y) => {
                if(x.OrderNumber === y.OrderNumber) {
                    orders.push(x);
                }
            })
        })
        console.log(orders);
    }

    // Orders(SampleOpenOrder, SampleLineItems);

