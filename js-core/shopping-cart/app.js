/**
 * updateProductNumber
 * @param {String} product 
 * @param {Number} price 
 * @param {Boolean} isIncreasing 
 */
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(`${product}-number`);
    let productNumber = productInput.value;
    if (true == isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    /* update product total */
    const productTotal = document.getElementById(`${product}-total`);
    productTotal.innerText = productNumber * price;

    /* total calculation */
    calculateTotal();
}

/**
 * getInputValue
 * @param {String} product 
 * @returns 
 */
function getInputValue(product) {
    const productInput = document.getElementById(`${product}-number`);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

/**
 * calculateTotal
 */
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount
    // set data to html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}
// default init
calculateTotal();

// phone plus
document.getElementById('phone-plus').addEventListener('click', () => {
    updateProductNumber('phone', 1219, true);
});

// phone minus
document.getElementById('phone-minus').addEventListener('click', () => {
    updateProductNumber('phone', 1219, false);
});

/* case plus */
document.getElementById('case-plus').addEventListener('click', () => {
    updateProductNumber('case', 59, true);
});

/* case minus */
document.getElementById('case-minus').addEventListener('click', () => {
    updateProductNumber('case', 59, false);
});
