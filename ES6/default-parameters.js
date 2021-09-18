function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(12, 45);
// console.log(result);


/**
 * namDefaultVal
 * @param {String} title 
 * @param {String} firstName 
 * @param {String} lastName 
 * @returns 
 */
function namDefaultVal(firstName, lastName, title = 'Mr.') {
    const fullName = title + firstName + ' ' + lastName;
    return fullName;
}
const person = namDefaultVal('Helal', 'Uddin');
console.log(person);