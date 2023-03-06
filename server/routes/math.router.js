const express = require('express');
const routerMath = express.Router();


let mathList = [
    {   
        // Variable1: 8,
        // Operator: "+" ,
        // Variable2: 4,
    }
]

routerMath.get('/', (req, res) => {
    console.log('GET Request made for /math')
    res.send(mathList)
})
//stays on bottom
module.exports = routerMath;

routerMath.post('/', (req, res) => {
    console.log('POST request for /math');
    console.log(req.body);
    const {Variable1, Operator, Variable2} = req.body;
    let answer = 0;
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
    res.send(answer)
    res.sendStatus(201)

})

routerMath.post('/', (req, res) => {
    let solving = req.body
})