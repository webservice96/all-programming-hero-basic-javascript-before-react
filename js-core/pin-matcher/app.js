/**
 * getPin
 * @returns 
 */
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

/* pin handler */
document.getElementById('generate-pin').addEventListener('click', () => {
    const pinBox = document.getElementById('pin-box');
    pinBox.value = getPin();
});


/* key pad */
document.getElementById('key-pad').addEventListener('click', function (event) {
    const typedBox = document.getElementById('typed-number');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if ('C' == number) {
            typedBox.value = '';
        }
    } else {
        const preNum = typedBox.value;
        typedBox.value = preNum + number;
    }
});

/* verify pin matching */
document.getElementById('submit-act').addEventListener('click', () => {
    const pin = document.getElementById('pin-box').value;
    const typedPin = document.getElementById('typed-number').value;
    const failMessage = document.getElementById('fail-message');
    const successMessage = document.getElementById('success-message');
    if (typedPin == pin) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    } else {
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
