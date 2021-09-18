console.log('Frist');
/* setInterval(() => {
    console.log('js');
}, 1000); */
console.log('Second');

let seconds = 0;
const timeId = setInterval(() => {
    seconds++;
    if (seconds >= 10) {
        clearInterval(timeId);
    }
    console.log(seconds);
}, 1000);