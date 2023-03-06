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
                <p>${solve.Variable1} ${solve.Operator} ${solve.Variable2} = ${solve.Answer} </p>
            `;
        }

    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
getProblems();

function submitProblem(event) {
    event.preventDefault;
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
    }).catch ((error) => {
    console.log(error);
    alert('Something went wrong.')
});
axios.get('/math')


}
function clearProblem() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
}