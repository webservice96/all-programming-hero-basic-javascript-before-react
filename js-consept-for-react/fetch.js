// JSON
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

const employeeJSONString = JSON.stringify(employee);
const employeeJSON = JSON.parse(employeeJSONString);
// console.log(employeeJSON);

// keys, valus
const keys = Object.keys(employee);
const values = Object.values(employee);

// console.log(values);

