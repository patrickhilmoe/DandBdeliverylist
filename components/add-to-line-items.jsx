import { ServiceTime } from './service-time'
import {LineItemKeyUpdate, AddressItemKeyUpdate, OpenOrderKeyUpdate} from './renameheader'

    export const SampleOpenOrder =    [
        {
            "Ship-to City": "BELLINGHAM",
            "Salesperson": 304,
            "Order Number": 11314787,
            "Order Date": 45147,
            "Customer Number": 98941,
            "Customer Name": "CASSELLA, EJ",
            "Shipping Date": 45278,
            "Total Invoice Amt": 3328.08,
            "Total All Payments": 3328.08
        },
        {
            "Ship-to City": "BELLINGHAM",
            "Salesperson": 312,
            "Order Number": 11316872,
            "Order Date": 45162,
            "Customer Number": 128950,
            "Customer Name": "COLLINS, MISHA",
            "Shipping Date": 45278,
            "Total Invoice Amt": 8346.76,
            "Total All Payments": 8118.33
        },
        {
            "Ship-to City": "FERNDALE",
            "Salesperson": 329,
            "Order Number": 11317412,
            "Order Date": 45171,
            "Customer Number": 141943,
            "Customer Name": "LOVE, LISA",
            "Shipping Date": 45278,
            "Total Invoice Amt": 4221.57,
            "Total All Payments": 4221.57
        },
        {
            "Ship-to City": "FERNDALE",
            "Salesperson": 329,
            "Order Number": 11320648,
            "Order Date": 45261,
            "Customer Number": 60916,
            "Customer Name": "BECK, ALICIA & RICK",
            "Shipping Date": 45278,
            "Total Invoice Amt": 3653.01,
            "Total All Payments": 3653.01
        },
        {
            "Ship-to City": "BLAINE",
            "Salesperson": 335,
            "Order Number": 11320960,
            "Order Date": 45271,
            "Customer Number": 186288,
            "Customer Name": "TOPOR, JANUSZ",
            "Shipping Date": 45278,
            "Total Invoice Amt": 978.99,
            "Total All Payments": 978.99
        },
        {
            "Ship-to City": "FERNDALE",
            "Salesperson": 301,
            "Order Number": 11321088,
            "Order Date": 45274,
            "Customer Number": 46344,
            "Customer Name": "BEACON MANOR APARTMENTS",
            "Shipping Date": 45278,
            "Total Invoice Amt": 602.7,
            "Total All Payments": 0
        },
        {
            "Ship-to City": "BELLINGHAM",
            "Salesperson": 301,
            "Order Number": 11321090,
            "Order Date": 45274,
            "Customer Number": 183714,
            "Customer Name": "CHUCKANUT PM & REALTY INC.",
            "Shipping Date": 45278,
            "Total Invoice Amt": 1527.5,
            "Total All Payments": 0
        },
        {
            "Ship-to City": "BELLINGHAM",
            "Salesperson": 301,
            "Order Number": 11321092,
            "Order Date": 45274,
            "Customer Number": 168358,
            "Customer Name": "SAMISH COMMONS",
            "Shipping Date": 45278,
            "Total Invoice Amt": 2130.14,
            "Total All Payments": 0
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

    // use for quick uploads to Dispatch Track
    export const LineitemAdd = (openorders, lineitems, addresses, stararr, catarr) => {
        console.log("lineitems", lineitems)
        let orders = [];
        LineItemKeyUpdate(lineitems);
        AddressItemKeyUpdate(addresses);
        OpenOrderKeyUpdate(openorders);
        openorders.forEach((x) => {
            lineitems.forEach((y) => {
                if(x.OrderNumber === y.OrderNumber) {
                    y.Salesperson = x.Salesperson
                    y.ShippingDate = x.ShippingDate
                    orders.push(y);

                }
            })
        })
        orders.forEach((x) => {
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
        ServiceTime(orders, stararr, catarr);
        console.log(orders);
        console.log("modded lineitems", lineitems);
        processedlist = orders
        // console.log("processed list is:")
        // console.table(processedlist);
        return processedlist
    }

    // add after lineitemadd to make final list
    export const pickAdds = (picks, proclist) => {
        proclist.forEach((proc) => {
            proc.Location = "";
            proc.PhoneNumber = "";
            proc.Notes = "";
        })
        let ord = "";
        let arr = [];
        proclist.forEach((proc) => {
            picks.forEach((pick) => {
                if(proc.OrderNumber === pick.OrderNumber && proc.StockShipped === pick.StockShipped) {
                    proc.Location = pick.Location;
                    proc.PhoneNumber = pick.PhoneNumber;
                    proc.Notes = pick.Notes;
                }
                // if(proc.OrderNumber === pick.OrderNumber) {
                //     proc.PhoneNumber = pick.PhoneNumber;
                //     proc.Notes = pick.Notes;
                // }
            })
        })
        return processedlist;
    }

    //Sift through open order sheet and line item sheet for only order sheet orders


