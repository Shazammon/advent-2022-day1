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

// let separateLines = data.split(/[^\r\n]+/g);
// console.log(separateLines.length)
const numData = data.split(/\r?\n/)
// console.log(numData)
// console.log(numData.length)

function highestCal() {
    // console.log(numData.length)
    let addition = 0
    for (let i = 0; i < numData.length; i++) {
        addition = i + addition
    }
    console.log(addition)
    return addition
}

highestCal()

