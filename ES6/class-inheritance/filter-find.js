const numbers = [5, 13, 39, 40, 45, 71, 50];
const bigNUmber = numbers.filter(number => number > 40);
const smallNimber = numbers.filter(number => number < 50);
// console.log(smallNimber);


/* simple callback funciton */
function getProduct(product) {
    if (product.price > 15000) {
        return product;
    }
}

/* complex example */
const products = [
    { name: 'Water bottle', price: 90, color: 'red' },
    { name: 'Mobile phone', price: 15400, color: 'yellow' },
    { name: 'Smart watch', price: 8000, color: 'pink' },
    { name: 'BenQ phone', price: 16000, color: 'black' },
    { name: 'Laptob benQ', price: 560000, color: 'black' },
    { name: 'Speaker box', price: 14000, color: 'gold' },
    { name: 'iPhone - 10', price: 20000, color: 'silver' },
    { name: 'Mouse pad', price: 5000, color: 'green' },
];
const productFilter = products.filter(getProduct);
const productColor = products.filter(product => product.color == 'black');
// console.log(productFilter);
// console.log(productColor);

/* find example */

const searchText = 'phone';
const findProduct = products.filter(product => product.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
const findProductName = products.find(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
console.log(findProduct);
console.log(findProductName);