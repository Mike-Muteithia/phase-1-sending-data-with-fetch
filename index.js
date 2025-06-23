// Add your code here

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then((response) => response.json())
    .then((object) => {
        const id = object.id;

        const idDisplay = document.createElement('div');
        idDisplay.textContent = `New ID: ${id}`;
        document.body.appendChild(idDisplay);
    })
    .catch((error) => {
        alert("Failed!");
        console.log(error.message);

        const errorDisplay = document.createElement('div');
        errorDisplay.textContent = error.message;
        document.body.appendChild(errorDisplay);
    }); 

}