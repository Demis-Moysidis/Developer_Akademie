class Girokonto extends Bankkonto{

    transaktion(bankkonto, betrag) {
        bankkonto.abheben(betrag);
        this.einzahlen(betrag);
    }

    dauerauftrag() {
        setInterval( () => {
            this.kontostand -= 1;
            console.log('Dauerauftrag Kontostand:' + this.kontostand)
        }, 3000)
    }
}