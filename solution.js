const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)
const numData = stringData.map(function(str) {
    if (str === '') {
        return ''
    } else {
        return parseInt(str)
    }
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
            // console.log(highest)
        } else {
            current = current + numData[i]
        }
    }
    return highest

}

console.log(highestCal())

console.log(highest)

// console.log(numData[0] + numData[1])
