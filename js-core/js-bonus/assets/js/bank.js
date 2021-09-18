/**
 * getInputValue
 * @param {String} fieldId 
 * @returns 
 */
function getInputValue(fieldId) {
    const fieldInput = document.getElementById(fieldId);
    const value = parseFloat(fieldInput.value);
    fieldInput.value = '';
    return value;
}

/**
 * getInnerTextValue
 * @param {String} fieldId 
 * @returns 
 */
function getInnerTextValue(fieldId) {
    const htmlField = document.getElementById(fieldId);
    const textValue = parseFloat(htmlField.innerText);
    return textValue;
}


/**
 * 
 * @param {String} fieldId 
 * @param {Number} amount 
 */
function updateTotal(fieldId, amount) {
    const prevAmount = getInnerTextValue(fieldId);
    document.getElementById(fieldId).innerText = prevAmount + amount;
}

function updateBalance(amount, isAdd) {
    const prevBalace = getInnerTextValue('total-balance');
    let newBalance = '';
    if (true == isAdd) {
        newBalance = prevBalace + amount;
    } else {
        newBalance = prevBalace - amount;
    }
    document.getElementById('total-balance').innerText = newBalance;
}

/* deposit handler */
document.getElementById('deposit-btn').addEventListener('click', () => {
    const amount = getInputValue('deposit');
    if (amount > 0) {
        updateTotal('total-deposit', amount);
        updateBalance(amount, true);
    }
});

/* withdraw handler */
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const amount = getInputValue('withdraw');
    const balance = getInnerTextValue('total-balance');
    if (amount > 0 && amount < balance) {
        updateTotal('withraw-amount', amount);
        updateBalance(amount, false);
    }
});