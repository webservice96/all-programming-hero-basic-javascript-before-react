const products = [
    'Pharmaceutical products list',
    'Automobile parts product list',
    'Bakery product list',
    'Hardware tools product list',
    'Grocery product list',
    'Hair care product hardware list',
    'hardware Beauty product list'
];

const search = 'Hardware';
const output = [];

/* search product using "indexOf" */
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) != -1) {
        // -
        // output.push(product);
    }
}
// console.log(output);


/* search product using "includes" */
for (const product of products) {
    if (product.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        // -
        // output.push(product);
    }
}
// console.log(output);


/* search prodcut with "startwith" */
for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) {
        output.push(product);
    }
}
// console.log(output);
