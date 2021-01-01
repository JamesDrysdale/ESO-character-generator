const express = require('express');
const path = require('path');
const data = require('./names.json');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use('/generate-character', (req, res) => {
    const race = getRace();
    const gender = getGender();

    return res.json({ race, gender }); 
}); 

app.use('/', (req, res) => {
    return res.render('index');
});




function getRace() {
    const randRace = Math.round(Math.random() * data["Race"].length);
    return data["Race"][randRace];
}

function getGender() {
    const randGender = Math.round(Math.random());
    return data["Gender"][randGender];
}

app.listen(3000, () => console.log('App listening...'));


console.log(getGender()); 
console.log(getRace()); 
// console.log(Math.floor(Math.random()) * data["Races"].length); 
// data["Races"]





