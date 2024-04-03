import { ServiceTime, ConcatCharge } from './service-time'
import {LineItemKeyUpdate, LineItemDateKeyUpdate, AddressItemKeyUpdate, OpenOrderKeyUpdate, StockKeyUpdate, PicksKeyUpdate} from './renameheader'
import { PaperlessFirstStop } from './object-arrays/paperless-first-stop';

    export let processedlist = [];

    // use for quick uploads to Dispatch Track
    export const LineitemAdd = (lineitems, openorders, addresses, stararr, catarr) => {
        // console.log("lineitems", lineitems)
        let orders = [];
        LineItemKeyUpdate(lineitems);
        AddressItemKeyUpdate(addresses);
        OpenOrderKeyUpdate(openorders);
        StockKeyUpdate(catarr);
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
        processedlist = orders
        console.log("processed list is:")
        console.table(processedlist);
        return processedlist
    }

    // add after lineitemadd to make final list
    export const pickAdds = (proclist, picks) => {
        PicksKeyUpdate(picks);
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
                    proc.Notes = pick.HeaderTextExpanded;
                }
            })
        })

        return processedlist;
    }

    export const QuickLineitemAdd = (lineitems, picks) => {
        // console.log("lineitems", lineitems)
        LineItemDateKeyUpdate(lineitems);
        PicksKeyUpdate(picks);
        // console.log(lineitems)
        lineitems.forEach((x) => {
            picks.forEach((y) => {
                if(x.OrderNumber === y.OrderNumber  && x.StockShipped === y.StockShipped) {
                    x.Description1 = y.Description1;
                    x.Location = y.Location;
                    x.PhoneNumber = y.PhoneNumber;
                    x.EmailAddress = y.EmailAddress;
                    x.ShiptoName = y.ShiptoName;
                    x.ShiptoAddress1 = y.ShiptoAddress1;
                    x.ShiptoAddress2 = y.ShiptoAddress2;
                    x.ShiptoAddress3 = y.ShiptoAddress3;
                    x.ShiptoCity = y.ShiptoCity;
                    x.ShiptoState = y.ShiptoState;
                    x.ShiptoZipCode = y.ShiptoZipCode;
                    x.HeaderTextExpanded = y.HeaderTextExpanded;
                }
                if (x.OrderNumber === y.OrderNumber) {
                    x.PhoneNumber = y.PhoneNumber;
                    x.EmailAddress = y.EmailAddress;
                    x.ShiptoName = y.ShiptoName;
                    x.ShiptoAddress1 = y.ShiptoAddress1;
                    x.ShiptoAddress2 = y.ShiptoAddress2;
                    x.ShiptoAddress3 = y.ShiptoAddress3;
                    x.ShiptoCity = y.ShiptoCity;
                    x.ShiptoState = y.ShiptoState;
                    x.ShiptoZipCode = y.ShiptoZipCode;
                    x.HeaderTextExpanded = y.HeaderTextExpanded;
                }
            })
        })
        ConcatCharge(lineitems);
        processedlist = lineitems
        console.log("processed list is:")
        console.table(processedlist);
        return processedlist
    }

    // if order is not on list ( compare to picks and master separately?) add to list
    export const LineItemAddPicks = (lineitems, picks, master) => {
        // console.log("lineitems before header change", lineitems)
        LineItemDateKeyUpdate(lineitems);
        PicksKeyUpdate(picks);
        if (master) {
            PicksKeyUpdate(master);
        }
        let newarray = [];
        lineitems.forEach(line => {
            // assign to new array object
            let newobject = {
                "OrderNumber": line.OrderNumber,
                "CustomerNumber": line.CustomerNumber,
                "CustomerName": line.CustomerName,
                "ShippingDate": line.ShippingDate,
                "StockShipped": line.StockShipped,
                "QuantitytoShip": line.QuantitytoShip,
                "______________________________": line.______________________________
            }
            newarray.push(newobject);
        });
        // if an order is in line items but not picks or master
        let temp1 = []
        let temp2 = []
        let linecatch = []
        newarray.forEach((line) => {
            for (let i=0; i < picks.length; i++) {
                if (picks[i].OrderNumber === line.OrderNumber && picks[i].StockShipped === line.StockShipped) {
                    // console.log("returning matched",picks[i])
                    return
                }
                if (i+1 === picks.length) {
                    return temp1.push(line)
                }
            }
        });
        // console.log("temp1 is", temp1);

        //populate empty cells if one line item exists already
        temp1.forEach(temp => {
            for(let i=0; i < picks.length; i++) {
                if (temp.OrderNumber == picks[i].OrderNumber) {
                    temp.Salesperson = picks[i].Salesperson;
                    temp.PhoneNumber = picks[i].PhoneNumber;
                    temp.ShiptoName = picks[i].ShiptoName;
                    temp.ShiptoAddress1 = picks[i].ShiptoAddress1;
                    temp.ShiptoAddress2 = picks[i].ShiptoAddress2;
                    temp.ShiptoAddress3 = picks[i].ShiptoAddress3;
                    temp.ShiptoCity = picks[i].ShiptoCity;
                    temp.ShiptoState = picks[i].ShiptoState;
                    temp.ShiptoZipCode = picks[i].ShiptoZipCode;
                    temp.HeaderTextExpanded = picks[i].HeaderTextExpanded;
                }
            }
        });
        // console.log("populated cells", temp1);

        //use master list if available
        if (master) {
            newarray.forEach(line => {           
                for (let i=0; i < master.length; i++) {
                        if (master[i].OrderNumber === line.OrderNumber) {
                            return
                        }
                        if (i+1 === master.length) {                    
                            return temp2.push(line)
                        }
                    }
            });

                    temp1.forEach(temp => {
                        // pass new picks temp array through master and master temp array   
                        for (let i=0; i < master.length; i++) {
                            if (master[i].OrderNumber === temp.OrderNumber && master[i].StockShipped === temp.StockShipped) {
                                return
                            }
                            if (i+1 === master.length) {
                                return linecatch.push(temp)
                            }
                        }
                    });
        }

                // flag and make a note on install charges in catch array
                let installcharge = "";
                linecatch.forEach(line => {
                    if (
                        line.StockShipped === "*INSTALLMULTI" ||
                        line.StockShipped === "*INSTALLDISH" ||
                        line.StockShipped === "*INSTALLOTR" 
                        ) {
                            installcharge = line.OrderNumber
                            linecatch.forEach(charge => {
                                if (charge.OrderNumber === installcharge) {
                                    console.log("install item flagged", installcharge)
                                    charge.______________________________ = "DELETED INSTALL CHARGE";
                                }
                            });
                        }
                });
                console.log("line catch is", linecatch);

                // add paperless first stop lines to new picks if none already in the order
                PaperLessLines(picks);

                // add line catch array to picks
                picks.push(...linecatch);

            // add concat charge to new picks
            ConcatCharge(picks);
            
            console.log(picks);


    }

    export const PaperLessLines = (picks) => {
                // add paperless first stop if not already in
                let addlines = false

                let count = 0
                picks.forEach(pick => {        
                    count = count + 1
                        if (PaperlessFirstStop[0].OrderNumber === pick.OrderNumber) {
                            return addlines = false
                        }
                        if (count === picks.length) {
                            return addlines = true
                        }
                    });
                    if (addlines) {
                        console.log("adding paperless")
                        picks.push(...PaperlessFirstStop);
                    }
    }


    //Sift through open order sheet and line item sheet for only order sheet orders


