
export const LineItemKeyUpdate = (array) => {
    let updatedArray = array.map(item => {
        if (
            item.OrderNumber ||
            item.CustomerNumber ||
            item.CustomerName ||
            item.StockShipped ||
            item.Description1 ||
            item.QuantitytoShip
        )
        {
            return
        }
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
        delete item['~'];
        delete item['~_1'];
        delete item['~_2'];
        delete item['~_3'];
        delete item['<A'];
        delete item['HREF="http://@VAR_FORM_ACTION_'];
        delete item['URL_@?SESSION_NO=@VAR_SESSION_'];
        delete item['NO_@&ORDNO='];
        delete item['&LINE_NO='];
        delete item['&CUST_NO='];
        delete item['&CUST_NAME='];
        delete item['&REQUEST_ID=CORDDETLIN">'];
        delete item['</A>'];
        delete item['`'];
        delete item['`_1'];
        delete item['`_2'];
        return item;
        })
  };

  export const LineItemDateKeyUpdate = (array) => {
    let updatedArray = array.map(item => {
        if (
            item.OrderNumber || 
            item.CustomerNumber || 
            item.CustomerName || 
            item.ShippingDate || 
            item.StockShipped || 
            item.QuantitytoShip ||
            item.______________________________
            )
             {
            return
        }
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerNumber'] = item['Customer# (from hdr)'];
        delete item['Customer# (from hdr)'];
        item['CustomerName'] = item['Customer Name'];
        delete item['Customer Name'];
        item['ShippingDate'] = item['Shipping Date'];
        delete item['Shipping Date'];
        item['StockShipped'] = item['Stock # Ordered'];
        delete item['Stock # Ordered'];
        item['QuantitytoShip'] = item['Quantity To Ship'];
        delete item['Quantity To Ship'];
        item["______________________________"] = item["____________________"];
        delete item["____________________"];
        delete item['Order Date'];
        delete item['Service Code'];
        return item;
    })
  };

export const AddressItemKeyUpdate =(array) => {
    let updatedArray = array.map(item => {
        if (
            item.OrderNumber ||
            item.CustomerName ||
            item.ShiptoAddress1 ||
            item.ShiptoAddress2 ||
            item.ShiptoCity ||
            item.ShiptoState ||
            item.ShiptoZipCode
        ){
            return
        }
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerName'] = item['Customer Name'];
        delete item['Customer Name'];
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

export const OpenOrderKeyUpdate = (array) => {
    let updatedArray = array.map(item => {
        if (
            item.OrderNumber || 
            item.CustomerNumber || 
            item.CustomerName ||
            item.ShiptoCity ||
            item.ShippingDate
        ) {
            return
        }
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
        delete item['Total Invoice Amt'];
        delete item['Total All Payments'];
    })
}

export const StockKeyUpdate = (array) => {
    let updatedArray = array.map(item => {
        if (
            item.StockShipped ||
            item.Location ||
            item.StockDescription1 ||
            item.QtyonHand ||
            item.QtyCom ||
            item.QtyAvail ||
            item.AvgCost ||
            item.YTDSold ||
            item.DateLastReceived ||
            item.ProductCategory ||
            item.QtyOnRequisition
        ) {
            return
        }
        item['StockShipped'] = item['Model #'];
        delete item['Model #'];
        item['Location'] = item['Loc'];
        delete item['Loc'];
        item['StockDescription1'] = item['Stock Description 1'];
        delete item['Stock Description 1'];
        item['QtyOnHand'] = item['Qty On Hand'];
        delete item['Qty On Hand'];
        item['QtyCom'] = item['Qty Com'];
        delete item['Qty Com'];
        item['QtyAvail'] = item['Qty Avail'];
        delete item['Qty Avail'];
        item['AvgCost'] = item['Avg Cost'];
        delete item['Avg Cost'];
        item['YTDSold'] = item['YTD Sold'];
        delete item['YTD Sold'];
        item['DateLastReceived'] = item['Date Last Received'];
        delete item['Date Last Received'];
        item['ProductCategory'] = item['Product Category'];
        delete item['Product Category'];
        item['QtyOnRequisition'] = item['Qty On Requisition'];
        delete item['Qty On Requisition'];
    })
}

export const PicksKeyUpdate = (array) => {
    let updatedArray = array.map(item => {
        if (
            item.OrderNumber || 
            item.CustomerNumber || 
            item.CustomerName ||
            item.StockShipped || 
            item.Description1 || 
            item.QuantitytoShip ||
            item.Location ||
            item.PhoneNumber ||
            item.EMailAddress ||
            item.ShiptoName ||
            item.ShiptoAddress1 ||
            item.ShiptoAddress2 ||
            item.ShiptoAddress3 ||
            item.ShiptoCity ||
            item.ShiptoState ||
            item.ShiptoZipCode ||
            item.HeaderTextExpanded
            ) {
            return
        }
        item['OrderNumber'] = item['Order Number'];
        delete item['Order Number'];
        item['CustomerNumber'] = item['Customer Number'];
        delete item['Customer Number'];
        item['CustomerName'] = item['Customer Name'];
        delete item['Customer Name'];
        item['StockShipped'] = item['Stock # Shipped'];
        delete item['Stock # Shipped'];
        delete item['Service Code'];
        item['Description1'] = item['Description 1'];
        delete item['Description 1'];
        item['QuantitytoShip'] = item['Quantity to Ship'];
        delete item['Quantity to Ship'];
        item['Location'] = item['Location Number'];
        delete item['Location Number'];
        item['PhoneNumber'] = item['Phone Number'];
        delete item['Phone Number'];
        item['EMailAddress'] = item['EMail Address'];
        delete item['EMail Address'];
        item['ShiptoName'] = item['Ship-to Name'];
        delete item['Ship-to Name'];
        item['ShiptoAddress1'] = item['Ship-to Address 1'];
        delete item['Ship-to Address 1'];
        item['ShiptoAddress2'] = item['Ship-to Address 2'];
        delete item['Ship-to Address 2'];
        item['ShiptoAddress3'] = item['Ship-to Address 3'];
        delete item['Ship-to Address 3'];
        item['ShiptoCity'] = item['Ship-to City'];
        delete item['Ship-to City'];
        item['ShiptoState'] = item['Ship-to State'];
        delete item['Ship-to State'];
        item['ShiptoZipCode'] = item['Ship-to Zip Code'];
        delete item['Ship-to Zip Code'];
        item['HeaderTextExpanded'] = item['Header Text Expanded'];
        delete item['Header Text Expanded'];
    })
}