export default function LineItemKeyUpdate(array) {
    let updatedArray = array.map(item => {
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
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
        delete item['Unit of Measure'];
        delete item['Unit Price'];
        delete item['MATCH ORDER'];
        delete item['E tended Price'];
        return item;
        })
  };

export default function AddressItemKeyUpdate(array) {
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

export default function OpenOrderKeyUpdate(array) {
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
}