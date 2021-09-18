const numbers = [10, 5, 20, 8];
const loopOutput = [];
const doubleIt = number => number * 5; // arrow function
for (const number of numbers) {
    const result = doubleIt(number);
    loopOutput.push(result);
}
// console.log(output);


/* array map */
// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
/* get squar of a number */
const squars = numbers.map(x => x * x);
console.log(squars);