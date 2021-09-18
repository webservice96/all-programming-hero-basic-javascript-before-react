function sum(...args) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const total = sum(10, 20, 50, 20);
// console.log(total);

function getFullName() {
    let result = '';
    for (const name of arguments) {
        result = result + ' ' + name;
    }
    return result;
}
const fullname = getFullName('Helal', 'Uddin', 'marzia', 'Uddin');
console.log(fullname);