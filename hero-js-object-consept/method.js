const student = {
    id: 101,
    name: 'Mahbub Mia',
    money: 5000,
    major: 'Programming',
    subjects: ['PHP', 'Javascript', 'Laravel', 'React'],
    bestFriends: {
        name: 'Marzia Uddin',
        job: 'Home wife',
    },
    takeExam: function() {
        console.log(`${this.name} taking your examp`);
    },
    treatDay: function(expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const expense = student.treatDay(1000, 100);
const expense2 = student.treatDay(1200, 80);
console.log(expense2);