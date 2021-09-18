const bottle = {
    color: 'red',
    hold: 'water',
    price: 450,
    isCleaned: true,
    sizes: {
        large: 16,
        medium: 8,
        small: 2
    }
};

// loop in object
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

// loop in object value
const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key);
}

// advance loop in array
for (const [key, value] of Object.entries(bottle)) {
    console.log(`${key} => ${value}`);
}