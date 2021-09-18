function stopWatch() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}
const clock1 = stopWatch();
const clock2 = stopWatch();

console.log(clock1());
console.log(clock2());
console.log(clock2());