/**
 * megaFreind
 * @param {array} friends 
 * @returns 
 */
function megaFreind(freinds) {
    if (false == Array.isArray(freinds)) {
        return 'Please provide an array';
    }
    let mega = freinds[0];
    for (const freind of freinds) {
        if (freind.length > mega.length) {
            mega = freind;
        }
    }
    return mega;
}

// name array
const freinds = [
    "Helal",
    "Uddin",
    "Kalam Uddin",
    "kalu",
    "Sobis Mia",
    "Al-amin"
];

const bigFreind = megaFreind(freinds);
// console.log(bigFreind);

const arr1 = [
    1,
    2,
    3,
    4,
    5
];
const arr2 = [
    6,
    7,
    8,
    9,
    10
];

const allnumbs = arr1.concat(arr2);
// console.log(allnumbs);

console.log("Alhamdulillah");