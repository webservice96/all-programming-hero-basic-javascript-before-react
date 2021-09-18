const products = [
    { name: 'Iphone-12', price: 3200, brand: 'Apple', color: 'Blcack' },
    { name: 'Laptob-Fr-12', price: 58000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Glas', price: 200, brand: 'Corbil', color: 'Catch' },
    { name: 'MapBox', price: 4000, brand: 'Apple', color: 'Blue' },
    { name: 'Medicine', price: 1500, brand: 'nuro', color: 'Gold' }
];

// array map
const productName = products.map(product => product.name);
const productPrice = products.map((product) => product.price);
/* console.log(productName);
console.log(productPrice); */

// foreach
products.forEach(product => {
    // console.log(product.color);
});

// filter 
const cheap = products.filter(product => product.price <= 3500);
const productByName = products.filter(product => product.name.includes('n'));
// console.log(productByName);

// fine
const spesialPro = products.find(pro => pro.name.indexOf('n'));
console.log(spesialPro);

