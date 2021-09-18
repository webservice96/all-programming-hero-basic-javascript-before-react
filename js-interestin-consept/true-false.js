/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/


const x = '';
if (x) {
    console.log('This is a true thing');
} else {
    console.log('This is a false thing');
}