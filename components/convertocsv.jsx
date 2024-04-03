// csv converter not making header if first line is missing cell info
// if the description has " at the end it merges the next 3 cells
  // the back slash gets added before the csv conversion

const ConvertToCSV = function(objArray) {
    var json = objArray
    var fields = Object.keys(json[0])
    // here is maybe where to fill in empty cells with placeholder info
    var replacer = function(key, value) { return value === null ? ' ' : value } 
    var csv = json.map(function(row){
      return fields.map(function(fieldName){
      return JSON.stringify(row[fieldName], replacer)
      }).join(',')
      })
      csv.unshift(fields.join(',')) // add header column
        csv = csv.join('\r\n');
      console.log(csv)
      return csv;

  }

// convert first report
export const convert = (list) => {
  const CSV = ConvertToCSV(list);
  var uri = "data:text/csv;charset=utf-8," + escape(CSV);

    const a = document.createElement('a')
    a.href = uri;
    a.download = ".csv"
    document.body.appendChild(a)
    a.click()
}

export function convertV2(list) {
  const CSV = ConvertToCSV(list);
let link = document.createElement('a')
link.id = 'download-csv'
link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(CSV));
link.setAttribute('download', 'yourfiletextgoeshere.csv');
document.body.appendChild(link)
document.querySelector('#download-csv').click()
}