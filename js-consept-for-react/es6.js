const numbers = [15, 54, 84, 20, 10, 2, 0];
const students = {
    name: 'Helal Uddin',
    age: 25,
    roll: 10,
    homeCity: 'Chitalmari'
}

const about = `My name is ${students.name} and my age is ${students.age}`;

const personRoll = `Your roll is ${numbers[2]}`;

// arrow funciton
const getYourRoll = () => 56;
const isEven = x => x % 2 == 0;

// spread operator
const newArray = [...numbers];
const newArray2 = [...numbers, 121];

numbers.push(90);
numbers.push(500);
numbers.push(290);

console.log('New Array', newArray);
console.log('New Array 2', newArray2);
console.log(numbers);