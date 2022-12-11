const fs = require('fs')
// let datastring = ''

fs.readFile('data.js', (err, data) => {
    if (err) throw err;
    // Number(data)
   let datastring = data.toString()
//    console.log(datastring)
    // console.log(data);
    return datastring
})

console.log(datastring)