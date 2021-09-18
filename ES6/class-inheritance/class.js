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
    constructor(name, adress, designation) {
        this.name = name;
        this.adress = adress;
        this.designation = designation;
    }

    startSession() {
        console.log(`${this.name} Start a support session`);
    }
}

/* spporter one */
const support1 = new Supporter('Helal Uddin', 'Bagerhat', 'Web Developer');
console.log(support1);
support1.startSession();


/* spporter tow */
const support2 = new Supporter('Hasin Bro', 'Rajshahi', 'Softwer Enginier');
console.log(support2);
support2.startSession();