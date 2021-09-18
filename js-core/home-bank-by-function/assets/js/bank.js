/**
 * getInputValue
 * @param {string} inputId 
 * @returns 
 */
function getInputValue(inputId) {
    inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    /* clear field */
    inputField.value = '';
    return inputAmount;
}

/**
 * updateTotalField
 * @param {string} fieldId 
 * @param {number} amount 
 */
function updateTotalField(fieldId, currentAmount) {
    const preAmount = document.getElementById(fieldId);
    const totalAmount = parseFloat(preAmount.innerText) + currentAmount;
    preAmount.innerText = totalAmount;
}


/**
 * getavAilableFund
 * @returns 
 */
function getavAilableFund() {
    const getField = document.getElementById("total-balance");
    const getTotal = parseFloat(getField.innerText);
    return getTotal;
}

/**
 * updateBalance
 * @param {String} fieldId 
 * @param {Number} amount 
 * @param {Number} isAdd 
 */
function updateBalance(fieldId, amount, isAdd) {
    const preTotal = document.getElementById(fieldId);
    const currentTotal = getavAilableFund();
    if (true == isAdd) {
        const preTotalamount = currentTotal + amount;
        preTotal.innerText = preTotalamount;
    } else {
        const preTotalamount = currentTotal - amount;
        preTotal.innerText = preTotalamount;
    }
}


document.getElementById("deposit-btn").addEventListener("click", () => {
    const depositAmount = getInputValue('deposit');
    if (depositAmount > 0) { /* update total deposit */
        updateTotalField("total-deposit", depositAmount);
        /* update total balace */
        updateBalance("total-balance", depositAmount, true);
    }
});


/* withdraw system */

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawAmount = getInputValue('withdraw');
    const availableBalance = getavAilableFund();
    if (withdrawAmount > 0 && withdrawAmount < availableBalance) {
        updateTotalField('withraw-amount', withdrawAmount);
        /* update reduce balance */
        updateBalance("total-balance", withdrawAmount, false);
    }
    if (withdrawAmount > availableBalance) {
        alert("This is a big amount.");
    }
});
