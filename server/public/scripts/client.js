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
                <p>${solve.Variable1} ${solve.symbol} ${solve.Variable2} = ${solve.Answer}</p>
            `;
        }

    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
getProblems();