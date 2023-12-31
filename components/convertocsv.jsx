const ConvertToCSV = function(objArray) {
    // var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    // console.log(array[0]);
    // var str = "";

    // for (var i = 0; i < array.length; i++) {
    //   var line = "";
    //   for (var index in array[i]) {
    //     if (line !== "") line += ","

    //     line += array[i][index];
    //   }

    //   str += line + "\r\n";
    // }
    // console.log(str);
    // return str;

    var json = objArray
    var fields = Object.keys(json[0])
    var replacer = function(key, value) { return value === null ? '' : value } 
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
  // const JSON1 = JSON.stringify(delList);
  // $('#csv').append(ConvertToCSV(serialStock));
  var uri = "data:text/csv;charset=utf-8," + escape(CSV);

//   var link = document.createElement("a");
//   link.href = uri;
//   // link.style = "visibility:hidden";
//   link.download = ".csv";
//   // link.text = 'Download';
//   // console.log(link);

    const a = document.createElement('a')
    a.href = uri;
    a.download = ".csv"
    document.body.appendChild(a)
    a.click()
    // document.body.removeChild(a)
}