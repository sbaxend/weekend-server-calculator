console.log('Welcome to the Calculator')

function getProblems() {
    axios.get('/math').then((response) => {
        console.log(response);
        let mathFromServer = response.data;
        console.log(mathFromServer)
        let contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = ``
        for (let solve of mathFromServer) {
            contentDiv.innerHTML += `
                <p id="display">${solve.Variable1} ${solve.Operator} ${solve.Variable2} = ${solve.Answer} </p>
            `;
        }

    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
getProblems();

function submitProblem(event) {
    event.preventDefault();
    console.log('in submitProblem function');
    let interger1 = document.querySelector('#number1').value
    let interger2 = document.querySelector('#number2').value
    let operator = document.querySelector('#operation').value


    let problemsforServer = {
        Variable1: interger1,
        Operator: operator,
        Variable2: interger2

    }
    axios.post('/math', problemsforServer).then((response) => {
        console.log(response)
        getProblems()
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.')
    });
    axios.get('/math').then((response) => {
        let answerFromServer = response.data;
        // for (let answer of answerFromServer){
            let lastAnswer = answerFromServer[answerFromServer.length -1];
        
            let resultDiv = document.querySelector('#results')
            resultDiv.innerHTML += `
                <h1 id="answer">${lastAnswer.Answer}</h1>
                `;
        // }
    })


}
function clearProblem() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    let resultDiv = document.querySelector('#answer')
            resultDiv.innerHTML = ''
}