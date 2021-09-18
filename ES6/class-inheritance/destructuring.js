const fish = {
        id: 51,
        name: 'King Elish',
        price: 8500,
        phone: '017555555',
        address: 'Pirojpur',
        dress: 'Silver'
    }
    /* const phone = fish.phone;
    const price = fish.price;
    console.log(price); */

/* short cut system */
/* const { id, name, price, phone, address, dress } = fish;
console.log(name);
console.log(price); */

// complex example
const company = {
        name: 'Soft Market',
        ceo: {
            id: 12,
            name: 'Helal Uddin',
            salary: 815000
        },
        web: {
            work: 'softwer develepment',
            employee: 500,
            framework: 'React',
            tech: {
                frist: 'html',
                second: 'js',
                third: 'php'
            }
        }
    }
    // company objects using short cut system
    // const { name } = company;
const { name, salary } = company.ceo;
const { work, framework } = company.web;
console.log(framework);