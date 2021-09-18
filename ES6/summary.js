let likePerson = "Helal Uddin";
likePerson = 'Marzia Uddin';
/* console.log(likePerson); */

const religion = "Islam";
// console.log(religion);

const arrowFunc = (firstName, LastName) => {
    return firstName + ' ' + LastName;
}

/* arrow funciton */
const fullName = arrowFunc('Marzia', 'Uddin');
// console.log(fullName);


/* spread operator */
const numbers = [185, 85, 48, 62, 35, 41, 89, 25, 74, 12, 90];
console.log(...numbers);


const ourClasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigClass = Math.max(...ourClasses);
// console.log(bigClass);