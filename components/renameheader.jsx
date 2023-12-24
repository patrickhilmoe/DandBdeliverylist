
function RenameHeaders() {
function LineItemKeyUpdate(array) {
    let updatedArray = array.map(item => {
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerNumber'] = item['Customer Number'];
        delete item['Customer Number'];
        delete item['Line Number'];
        item['CustomerName'] = item['Customer Name'];
        delete item['Customer Name'];
        delete item['Line Number_1'];
        item['StockShipped'] = item['Stock # Shipped'];
        delete item['Stock # Shipped'];
        delete item['Service Code'];
        item['Description1'] = item['Description 1'];
        delete item['Description 1'];
        item['QuantitytoShip'] = item['Quantity Ordered'];
        delete item['Quantity Ordered'];
        delete item['Unit Of Measure'];
        delete item['Unit Price'];
        delete item['MATCH ORDER'];
        delete item['E tended Price'];
        return item;
        })
  };


function AddressItemKeyUpdate(array) {
    let updatedArray = array.map(item => {
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerName'] = item['Ship-to Name'];
        delete item['Ship-to Name'];
        item['ShiptoAddress1'] = item['Ship-to Address 1'];
        delete item['Ship-to Address 1'];
        item['ShiptoAddress2'] = item['Ship-to Address 2'];
        delete item['Ship-to Address 2'];
        item['ShiptoCity'] = item['Ship-to City'];
        delete item['Ship-to City'];
        item['ShiptoState'] = item['Ship-to State'];
        delete item['Ship-to State'];
        item['ShiptoZipCode'] = item['Ship-to Zip Code'];
        delete item['Ship-to Zip Code'];
    })
}

function OpenOrderKeyUpdate(array) {
    let updatedArray = array.map(item => {
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerName'] = item['Customer Name'];
        delete item['Customer Name'];
        item['CustomerNumber'] = item['Customer Number'];
        delete item['Customer Number'];
        item['ShiptoCity'] = item['Ship-to City'];
        delete item['Ship-to City'];
        item['ShippingDate'] = item['Shipping Date'];
        delete item['Shipping Date'];
    })
    console.log(array);
}


// test files

const SampleOpenOrder =    [
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
    }
]

const SampleLineItems = [
    {
        "Order Number": 11314787,
        "Line Number": 80,
        "Customer Number": 98941,
        "Customer Name": "CASSELLA, EJ",
        "Line Number_1": 80,
        "Stock # Shipped": "*HOOKUPREFRIG1",
        "Service Code": "",
        "Description 1": "HOOKUP REFRIGERATOR",
        "Quantity Ordered": 1,
        "Unit Of Measure": "EA",
        "Unit Price": 49.95,
        "MATCH ORDER": 11314787,
        "E tended Price": 49.95
    },
    {
        "Order Number": 11314787,
        "Line Number": 90,
        "Customer Number": 98941,
        "Customer Name": "CASSELLA, EJ",
        "Line Number_1": 90,
        "Stock # Shipped": "B36CD50SNS",
        "Service Code": "",
        "Description 1": "Bosch 500 Series 36\" Free",
        "Quantity Ordered": 1,
        "Unit Of Measure": "EA",
        "Unit Price": 2969,
        "MATCH ORDER": 11314787,
        "E tended Price": 2969
    }
];

const SampleAddresses = [
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
        "Ship-to Address 1": "1012 E TOLEDO ST",
        "@VAR_SHIPADD2=": "@VAR_SHIPADD2=",
        "Ship-to Address 2": "",
        "@VAR_SHIPCITY=": "@VAR_SHIPCITY=",
        "Ship-to City": "BELLINGHAM",
        "@VAR_SHIPST=": "@VAR_SHIPST=",
        "Ship-to State": "WA",
        "@VAR_SHIPZIP=": "@VAR_SHIPZIP=",
        "Ship-to Zip Code": "98229",
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
        "Order Number": 11314787,
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
        "Order Number": 11314792,
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

}

export default RenameHeaders;