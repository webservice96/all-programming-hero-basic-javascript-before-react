// array destructuring
const [name, age] = ['Helal', 25];

// object destructuring
const { name, age, roll } = { name: 'Hela', age: 25, roll: 10 };


const employee = {
    ide: 'VS Code',
    desc: 'Developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specificatin: {
        height: 665,
        weight: 67,
        address: 'Kumarkhali'
    }
};

const { machine, ide } = employee;
const { weight, address } = employee?.specificatin;
