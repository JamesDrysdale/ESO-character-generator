const loadCharacter = (resultDiv) => {
    fetch('http://localhost:3000/generate-character')
        .then(response => response.json())
        .then(result => {
            resultDiv.classList.add('alert', 'alert-success');
            resultDiv.innerHTML = `
            <h2>Personal Details</h2>
            <strong>Race</strong>: ${result.race}  <br />
            <strong>Gender</strong>: ${result.gender} <br />
            

            <h2>Allegiance</h2>
            <strong>Faction</strong>: 
            `;
        });


        // <h2>Race: ${result.Race} Gender: ${result.Gender}</h2>
};