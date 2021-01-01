const data = require('./names.json');

function getRace() {
    const randRace = Math.round(Math.random() * data["Races"].length);
    return data["Races"][randRace];
}



function getGender() {
    const randGender = Math.round(Math.random());
    return data["Gender"][randGender];
}


console.log(getGender()); 

console.log(getRace()); 