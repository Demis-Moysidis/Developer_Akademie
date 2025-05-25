// console.log("Hello World!");


// && (AND) wird vor || (OR) ausgewertet.
// let myCondition_1 = true || true && false
// let myCondition_2 = true || false && true
// let myCondition_3 = false || true && false
// let myCondition_4 = false || false && true
// console.log(myCondition_1, myCondition_2)
// console.log(myCondition_3, myCondition_4)



// console.log(5 <= 10);

// console.log(15 == 15);

// console.log(20 > 10);

// console.log((7 <= 7) == (5 < 10));

// console.log((10 > 5) == (3 < 2));

// console.log((12 >= 8) && (8 < 9));

// console.log((3 == 3) || (10 > 20));

// console.log((6 != 6) || (15 <= 20));

// console.log((7 < 5) == !(10 >= 10));

// console.log((4 >= 4) && (8 < 15) && (3 == 3));



// // Aufgabe 1:
// if (5 <= 10) {
//     console.log("a");
// }

// // Aufgabe 2:
// if (15 == 15) {
//     console.log("b");
// }

// // Aufgabe 3:
// if (20 > 10) {
//     console.log("c");
// }

// // Aufgabe 4:
// if (7 <= 7) {
//     console.log("a");
// } else {
//     console.log("b");
// }

// // Aufgabe 5:
// if (10 > 5) {
//     console.log("a");
// } else if (3 < 2) {
//     console.log("b");
// } else {
//     console.log("c");
// }

// // Aufgabe 6:
// if (12 >= 8 && 8 < 9) {
//     console.log("a");
// } else {
//     console.log("b");
// }

// // Aufgabe 7:
// if (3 == 3) {
//     console.log("a");
// } else if (10 > 20) {
//     console.log("b");
// } else {
//     console.log("c");
// }

// // Aufgabe 8:
// if (6 != 6) {
//     console.log("a");
// } else if (15 <= 20) {
//     console.log("b");
// } else {
//     console.log("c");
// }

// // Aufgabe 9:
// if (7 < 5) {
//     console.log("a");
// } else if (!(10 >= 10)) {
//     console.log("b");
// } else {
//     console.log("c");
// }

// // Aufgabe 10:
// if (4 >= 4 && 8 < 15 && 3 == 3) {
//     console.log("a");
// } else {
//     console.log("b");
// }


// function formatToCurrency(value){
//     return value.toFixed(2).toString().replace(".", ",") + "€"
//     // return String(value.toFixed(2)).replace(".", ",") + "€"
// }
// console.log(formatToCurrency(0.5));


// document.getElementById('p-Tag').setAttribute('title', 'Ein Titel')
// document.getElementById('p-Tag').setAttribute('class', 'test-class')
// // document.getElementById('p-Tag').classList.add('test-class')

// function button_toogle(){
//     document.getElementById('p-Tag').classList.toggle('display_none')
// }


// function getValue(){
//     console.log(document.getElementById('input_id').value)
// }

let count = 0;

function init(){
    
    debuggerOutput('inti')
    testTwo('testTwo')
    
}

function testOne(){
    debuggerOutput('testOne')
}

function testTwo(text){
    debuggerOutput(text)
    
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = count + text;
}