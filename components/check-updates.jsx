export let updatedlist = [];
export let potentiallineupdate = [];

export const CheckUpdates = (newlist, oldlist) => {
    // loop through orders to find differences
    let arr = [];   
    let ord = "";
    const lastobject = [{ OrderNumber: "last order"}]
    oldlist.push(...lastobject)
    oldlist.forEach((old) => {
        if (ord == old.OrderNumber || ord == "") {
            ord = old.OrderNumber;
            return arr.push(old);
        } else {
            arr.forEach((ar) => {
                newlist.forEach((newl) => {
                    // console.log(newl)
                    // if model is the same but order number is different
                    if (newl.OrderNumber === ar.OrderNumber && newl.StockShipped === ar.StockShipped) {
                        if (newl.Location !== ar.Location) {
                            // console.log("updated location new",newl);
                            // console.log("updated location old",ar);
                        }
                    }                    
                    if (newl.OrderNumber === ar.OrderNumber && newl.StockShipped === ar.StockShipped) {
                        if (newl.QuantitytoShip !== ar.QuantitytoShip) {
                            console.log("updated quantity new",newl);
                            console.log("updated quantity old",ar);
                        }
                    }
                    
                })
            })
          }
          ord = old.OrderNumber;
          arr = [];
    })
    oldlist.pop();

    // comparing matching with nonmatching
    let match = []
    let nonmatch = []

    newlist.forEach((list) => {
        for (let i=0; i < oldlist.length; i++) {
            if (oldlist[i].OrderNumber === list.OrderNumber) {
                return match.push(list);
            } 
            if (i+1 === oldlist.length) {
                nonmatch.push(list);
            }
        }
    })
    updatedlist = nonmatch
    potentiallineupdate = match;

    // console.log("match is", match);
    // console.log("nonmatch is", nonmatch)

    // oldlist.push(...nonmatch)
    // console.log("newmaster is", oldlist);
    // console.log("updated ist is:", updatedlist)

}

// display match items for review

// loop through order numbers that match and return ones with updates

// start with match. check 