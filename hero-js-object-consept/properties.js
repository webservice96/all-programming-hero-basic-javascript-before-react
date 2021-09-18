const bottle = { color: 'red', hold: 'water', price: 450, isCleaned: true };

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// getting all values
const values = Object.values(bottle);
// console.log(values);

// getting object pairs
const pairs = Object.entries(bottle);
// console.log(pairs);


// if we use the "freeze" methid we can't do anything in the object
/* Object.freeze(bottle); */

// seal a object for skip deleting propery and adding new property
Object.seal(bottle);
bottle.price = 250; // we can change the value of the property
bottle.height = 20; // but we can't add a new property in the current object


// delete a propery from the object
delete bottle.isCleaned;
console.log(bottle);