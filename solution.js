const fs = require('fs')
const { parse } = require('path')
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
const stringData = data.split(/\r?\n/)
const numData = stringData.map(function(str) {
    return parseInt(str)
})
console.log(numData)
// console.log(numData)
// console.log(numData.length)

function highestCal() {
    // console.log(numData.length)
    let current = 0
    let highest = 1
    for (let i = 0; i < numData.length; i++) {
        if (numData[i] === '') {
            if (current > highest) {
                highest = current
            }
            current = 0
            console.log(highest)
        } else {
            current = current + numData[i]
        }
    }
    return highest

}

// highestCal()
// console.log(highest)

console.log(numData[0] + numData[1])
