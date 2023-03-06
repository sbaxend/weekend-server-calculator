const express = require('express');
const routerMath = express.Router();


let mathList = [
    {   
        Variable1: 8,
        Operator: "+" ,
        Variable2: 4,
        Answer: 12
    }
]

routerMath.get('/', (req, res) => {
    console.log('GET Request made for /math')
    res.send(mathList)
})
//stays on bottom
module.exports = routerMath;

let answer = 0;
routerMath.post('/', (req, res) => {
    console.log('POST request for /math');
    console.log(req.body);
    const {Variable1, Operator, Variable2} = req.body;
    if (Operator === "+") {
        answer = parseInt(Variable1) + parseInt(Variable2);
    } else if (Operator === "-"){
        answer = Variable1 - Variable2
    } else if (Operator === "*" ){
        answer = Variable1 * Variable2
    } else if (Operator === "/") {
        answer = Variable1 / Variable2
    }
    mathList.push({
        Variable1: Variable1,
        Operator: Operator,
        Variable2: Variable2,
        Answer: answer

    })
    console.log(mathList)
    res.sendStatus(201)
    res.send({answer})

})

// routerMath.get('/', (req, res) => {
//     console.log("GET request for /answer")
//     res.send({answer})
// })