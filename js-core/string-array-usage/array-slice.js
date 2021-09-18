const numbers = [1, 50, 41, 20, 84, 96, 74, 52, 84, 61, 55, 100];

/* const sliceArray = numbers.slice(5, 10);
console.log(sliceArray); */

const spliceArray = numbers.splice(5, 10, 110, 111, 112);
console.log(spliceArray);
console.log(numbers);