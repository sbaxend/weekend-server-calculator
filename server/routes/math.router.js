const express = require('express');
const routerMath = express.Router();

let mathList = [
    {   
        Variable1: 8,
        symbol: "+" ,
        Variable2: 4,
        Answer: 12
    }

    // {
    //     Problem: "12 - 4",
    //     Answer: 12 - 4
    // }
]

routerMath.get('/', (req, res) => {
    console.log('GET Request made for /math')
    res.send(mathList)
})
//stays on bottom
module.exports = routerMath;