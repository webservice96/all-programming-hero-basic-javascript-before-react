const helal = {
    id: 101,
    name: 'Helal Uddin',
    money: 5000,
    treatDay: function(expense, boksis) {
        this.money = this.money - expense - boksis;
        console.log(this);
        return this.money;
    }
}

const marzia = {
    id: 102,
    money: 5500,
    name: 'Marzia Uddin'
}

helal.treatDay(100, 20);

// bind treaDay method in to marzia object
const marziTeatDay = helal.treatDay.bind(marzia);
marziTeatDay(200, 20);