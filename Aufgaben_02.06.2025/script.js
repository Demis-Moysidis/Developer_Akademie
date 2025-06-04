// Aufgabe 1 (einfache for-Schleife):
// Mithilfe der Funktion `ticketCounter()` soll der Verkauf von 10 Tickets
// an einer Kinokasse einzeln in der Konsole ausgegeben werden. Vervollständige
// den nachfolgenden Code.

// function ticketCounter() {
//     for (let indexTicket = 1; indexTicket <= 10; indexTicket++) {  // intialisierung / bedingung / inkrement
//     // for (let indexTicket = 0; indexTicket <= 10; indexTicket++) {  // initialize / condition / increment  -> english
//         console.log(`Ticket Nummer ${indexTicket} wurde verkauft.`);
//     }
// }

// ticketCounter();





// Aufgabe 2 (for-Schleife rückwärts):

// Der Verkauf von 8 Sandwiches, und darüber hinaus die Info über die Anzahl
// der nochverbleibenden Sandwiches, sollen mit der Funktion `sandwichCounter`
// in der Konsole einzeln ausgegeben werden. Vervollständigedie den nachfolgenden Code.


// function sandwichCounter(){
//     for (let sandwichIndex = 8; sandwichIndex >= 1; sandwichIndex--) {
//         console.log(`Ein Sandwich verkauft und noch ${sandwichIndex} Sandwiches übrig.`);
//     }
// }

// sandwichCounter();







// ## Aufgabe 3 (Verwendung von Arrays in for-Schleifen):

// In einem Online-Shop möchte ich die Gesamtmenge der Produkte in meinem
// Warenkorb mit Hilfe einer for-Schleife in einer Funktion namens:
// `productCounter()` **einmalig** über die Konsole angezeigt bekommen.

// Folgende Produkte sollen dafür zuerst mit der Funktion `addProduct(product)` **einzeln** dem Array
// `cart` hinzugefügt werden:
// - Hundekorb
// - Taschenlampe
// - Headset
// - Bettwäsche

// Verwende den zuvor befüllten Array `cart` in `productCounter()`.

// let cart = [];

// function addProduct(product){
//     cart.push(product);
// }

// addProduct('Hundekorb');
// addProduct('Taschenlampe');
// addProduct('Headset');
// addProduct('Bettwäsche');

// function productCounter(array){
//     let cartIndex = 0;
//     for (let index = 0; index < array.length; index++) {
//         cartIndex++;
//     }
//     console.log(cartIndex);
// }

// productCounter(cart);






// ## Aufgabe 4 (for-Schleifen innerhalb von for-Schleifen):

// Stelle in der Konsole mithilfe der Funktion `fiveTillNine()` das Einmaleins von 5 bis 9 dar.

// ### Erwartete Ausgabe:
// `5 x 1 = 5`
// `5 x 2 = 10`
// `...`
// `9 x 10 = 90`


function fiveTillNine(){
    for (let i = 5; i <= 9; i++){
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i*j}`)
        }
    }
}

fiveTillNine()