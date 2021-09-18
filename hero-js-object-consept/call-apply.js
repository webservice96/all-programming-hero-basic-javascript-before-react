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

// using call
/* helal.treatDay.call(marzia, 400, 100);
helal.treatDay.call(marzia, 300, 50); */

// using apply
helal.treatDay.apply(marzia, [300, 30]);
helal.treatDay.apply(marzia, [300, 300]);