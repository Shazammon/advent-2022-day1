const fs = require('fs')
// let datastring = ''

// fileconverter = fs.readFile('data.js', (err, data) => {
//     if (err) throw err;
//     // Number(data)
//    datastring = data.toString()
//    console.log(datastring)
//     // console.log(data);
//     return datastring
// })


// fileconverter()
// console.log(datastring)

let data = fs.readFileSync('data.txt', 'utf-8')
// console.log(data)

// console.log(typeof(data))

let separateLines = data.split(/[^\r\n]+/g);
console.log(separateLines.length)