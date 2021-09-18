// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 38, b: 69 };
const { x, a, b, y, z } = myObject;
// console.log(x, a, b, z);

// destructuting array
const [p, q, r] = [10, 85, 900];
// console.log(p, q, r);

const [name, id, roll] = ['helal Uddin', 15, 100];
// console.log(name, id, roll);

// optional chainign
console.log('Optional Object is: ', myObject?.p?.q);