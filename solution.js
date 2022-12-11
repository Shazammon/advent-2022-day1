const fs = require('fs')

fs.readFile('data.js', 'utf-8', (err, data) => {
    if (err) throw err;
    Number(data)
    console.log(data);
})

// console.log(data)