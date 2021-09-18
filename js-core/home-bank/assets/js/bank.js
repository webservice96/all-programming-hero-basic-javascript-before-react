/* deposit system */
const depositAct = document.getElementById('deposit-btn');
depositAct.addEventListener('click', () => {
    const depositField = document.getElementById('deposit');
    const newDeposit = depositField.value;
    if(newDeposit == ''){
        alert("Please put your amount!");
    } else{
        /* current total deposit */
        const currentDeposit = document.getElementById('total-deposit');
        const totalDeposit = parseFloat(currentDeposit.innerText) + parseFloat(newDeposit);

        currentDeposit.innerText = totalDeposit;
        /* clear field */
        depositField.value = '';

        /* update balance */
        const totalBalance = document.getElementById("total-balance");
        const updateTotal = parseFloat(totalBalance.innerText) + parseFloat(newDeposit);
        totalBalance.innerText = updateTotal;
    }
});

/* withdraw system */
const withdrawAct =  document.getElementById('withdraw-btn');
withdrawAct.addEventListener('click', () => {
    const winthdrawField = document.getElementById("withdraw");
    const withdrawAmount = winthdrawField.value;

    if(withdrawAmount == ''){
        alert("Please put your amount!");
    }else{
        const previusWithdraw = document.getElementById("withraw-amount");
        const totalWithdraw = parseFloat(previusWithdraw.innerText) + parseFloat(withdrawAmount);
        previusWithdraw.innerText = totalWithdraw;

        winthdrawField.value = '';

        /* reduce balance */
        const totalBalanceFeild = document.getElementById("total-balance");
        const totalBalance = totalBalanceFeild.innerText;
        const reduceBalance = parseFloat(totalBalance) - parseFloat(withdrawAmount);
        totalBalanceFeild.innerText = reduceBalance.toFixed(2);
    }
});