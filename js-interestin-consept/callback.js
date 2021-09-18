function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}

/* const names = ['helal', 'marzia', 'krina', 'jorina'];
const myObj = { name: 'Helal Uddin', age: 25 } */

function greetMorning(name) {
    console.log('Good Morning', name);
}
welcomeMessage('Helal Uddin', greetMorning);