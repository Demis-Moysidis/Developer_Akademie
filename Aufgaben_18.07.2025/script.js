let meinBankkonto = new Bankkonto('Demis', 856.78);
// console.log('neues konto kontostand: ' + meinBankkonto.kontostand);
// meinBankkonto.abheben(70);
// meinBankkonto.einzahlen(150);
// meinBankkonto.zinsen();
// meinBankkonto.infos();

let meinGirokonto = new Girokonto('Demis', 345.45);
let meinSparkonto = new Sparkonto('Demis', 125.00);

// console.log(meinBankkonto, meinGirokonto, meinSparkonto);


console.log('Transaktion: von 100€');
meinGirokonto.transaktion(meinBankkonto, 100);

meinSparkonto.zinsen();
meinBankkonto.zinsen();
meinGirokonto.zinsen();


meinGirokonto.dauerauftrag();