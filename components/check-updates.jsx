export let updatedlist = [];
export let potentiallineupdate = [];

export const CheckUpdates = (newlist, oldlist) => {
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

    console.log("match is", match);
    console.log("nonmatch is", nonmatch)
    oldlist.push(...nonmatch)
    console.log("newmaster is", oldlist);
    console.log("updated ist is:", updatedlist)
}

// display match items for review

// loop through order numbers that match and return ones with updates

// start with match. check 