class Bankkonto {
    besitzer;
    kontostand;
    zins = 0.02;

    constructor(besitzer, kontostand) {
        this.besitzer = besitzer;
        this.kontostand = kontostand;
    }

    abheben(auszahlung) {
        console.log('vor abheben: ' + this.kontostand);
        this.kontostand -= auszahlung;
        console.log('nach abheben: ' + this.kontostand);
    }

    einzahlen(einzahlung) {
        console.log('vor einzahlen: ' + this.kontostand);
        this.kontostand += einzahlung;
        console.log('nach einzahlen: ' + this.kontostand);
    }

    zinsen() {
        console.log('vor zinsen: ' + this.kontostand);
        this.kontostand += Number((this.zins * this.kontostand).toFixed(2));
        console.log('nach zinsen: ' + this.kontostand);
    }

    infos() {
        console.log('info besitzer: ' + this.besitzer)
        console.log('info kontostand: ' + this.kontostand)
        console.log('info zinsen: ' + this.zins)
    }

}
