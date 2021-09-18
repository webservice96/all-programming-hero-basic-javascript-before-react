const friends = ['Helal Uddin', 'Marzia Uddin', 'Kabin Ahmed', 'Tom Brady', 'Joni Mia'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'Water bottle', price: 90, color: 'red' },
    { name: 'Mobile phone', price: 15400, color: 'yellow' },
    { name: 'Smart watch', price: 8000, color: 'pink' },
    { name: 'Monitor benQ', price: 16000, color: 'black' },
    { name: 'Laptob benQ', price: 560000, color: 'black' },
    { name: 'iPhone - 10', price: 20000, color: 'silver' },
    { name: 'Mouse pad', price: 5000, color: 'green' },
];
const productName = products.map(pName => pName.name);
const productPrice = products.map(pPrice => pPrice.price);
console.log(productName, productPrice);