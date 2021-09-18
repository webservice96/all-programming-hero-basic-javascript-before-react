// 1. using object literal
const student = { name: 'Helal Uddin', job: 'Developer' };

// using constructor
const person = new Object({ name: 'Helal', age: 25 });
// 2. console.log(person);

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.name);

// 4. using class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = new People('Helal', 30);
// console.log(people);

// 5. using functio
function Man(name, city) {
    this.name = name;
    this.city = city;
}
const man = new Man('Helal Uddin', 52);
console.log(man);