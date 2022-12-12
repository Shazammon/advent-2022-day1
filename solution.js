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
    let highest = 3
    let secondhighest = 2
    let thirdhighest = 1
    let threeHighestTotal = 0
    for (let i = 0; i < numData.length; i++) {
        if (numData[i] === '') {
            if (current > highest) {
                highest = current
            } else if (current > secondhighest) {
                secondhighest = current
            } else if (current > thirdhighest) {
                thirdhighest = current
            }
            current = 0
            // console.log(highest)
        } else {
            current = current + numData[i]
        }
    }
    threeHighestTotal = highest + secondhighest + thirdhighest
    return 

}

console.log(highestCal())

console.log(highest)

// console.log(numData[0] + numData[1])
