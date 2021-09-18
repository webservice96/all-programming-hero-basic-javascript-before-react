class Supporter {
    name;
    designation = 'Support web developer';
    adress = 'Dhaka';

    /**
     * constructor
     * @param {String} name 
     * @param {String} adress 
     * @param {String} designation 
     */
    constructor(name, designation, adress) {
        this.name = name;
        this.adress = adress;
        this.designation = designation;
    }

    startSession() {
        console.log(`${this.name} Start a support session`);
    }
}

/* inheritace class */
class StudentCare extends Supporter {
    supportTime;
    constructor(name, time) {
        super(name);
        this.supportTime = time;
    }
    createSuppor() {
        console.log(`${this.name} will start supoport at ${this.supportTime}`);
    }
}

class Team extends Supporter {
    createUser() {
        console.log(`${this.name} position at ${this.designation}`);
    }
}

/* create support object */
const support = new StudentCare('Helal Uddin', '11:PM');
// support.createSuppor();

const newUser = new Team('Helal Uddin', 'Programmer');
newUser.createUser();