class Osoba {
    constructor(ime, godine) {
        this.name = ime
        this.age = godine
    }
}


class Radnik extends Osoba {
    constructor(ime, godine, plata) {
        super(ime, godine)
        this.paycheck = plata
    }
}


var pera = new Radnik("Petar", 20, 100)
console.log(pera)
