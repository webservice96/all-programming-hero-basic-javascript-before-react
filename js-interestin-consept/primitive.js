/* 
    Data types
--- primitive data types ---
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. symple

--- not primitive data types ---
    6. object
*/

let a = 'Hello';
let b = a;
// console.log(a, b);
a = 'Gello';
// console.log(a, b);


const x = { job: 'web developer' }
const y = x;
console.log(x, y);
y.job = 'Front end developer';
console.log(x, y);