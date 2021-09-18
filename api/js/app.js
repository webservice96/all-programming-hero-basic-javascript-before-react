/* JavaScript Object Notation */
// JSON
const user = { id: 11, name: 'Helal Uddin', job: 'Developer' };
const stringified = JSON.stringify(user);
/* console.log(user);
console.log(stringified); */

const shop = {
    name: 'BenQ Monitor',
    adress: 'Bagerhat',
    owner: {
        name: 'Helal Uddin',
        profession: 'actor',
        roll: 'Editor'
    },
    products: ['Monitor', 'Phone', 'Mouse'],
    isExpensive: true,
    profit: 5000,
};

const shopStringified = JSON.stringify(shop);
const shopParse = JSON.parse(shopStringified);
console.log(shop);

console.log(shopStringified);

console.log(shopParse);