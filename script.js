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



// let count = 0;

// function init(){
    
//     debuggerOutput('inti')
//     testTwo('testTwo')
    
// }

// function testOne(){
//     debuggerOutput('testOne')
// }

// function testTwo(text){
//     debuggerOutput(text)
    
// }

// function debuggerOutput(text){
//     count++;
//     let debuggerLogRef = document.getElementById('debugger_log');
//     debuggerLogRef.innerHTML = count + text;
// }


// function containsElement(array, element){
//     return array.includes(element)
// }

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false





// function findElementIndex(array, element){
//     return array.indexOf(element)
// }


// console.log(findElementIndex([10, 20, 30, 40], 30)); // 2

// console.log(findElementIndex([10, 20, 30, 40], 50)); // -1



// function removeFirstElement(array){
//     array.shift()
//     return array
// }

// console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]

// console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']



// function addElementToStart(array, element){
//     array.unshift(element)
//     return array

// }

// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

// console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']



// function getSubArray(array, start, end){
//     return array.slice(start, end)
// }


// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]

// console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']


// function joinArray(array, separator){
//     return array.join(separator)
// }

// console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

// console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"


// function sumArray(array){
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         sum += array[index];
//     }
//     return sum
// }

// console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

// console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)


// function printNumbers(number){
//     let num_list = []
//     for (let index = 0; index < number; index++) {
//         num_list[index] = index + 1
//     }
//     console.log(num_list.join(", "))
// }

// printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5

// printNumbers(3); // Erwartete Ausgabe: 1, 2, 3



// function printNumbersReverse(number){
//     let num_list = []
//     for (let index = 0; index < number; index++) {
//         num_list[index] = number - index;
//     }
//     console.log(num_list.join(", "))
// }

// printNumbersReverse(5); // Erwartete Ausgabe: 5, 4, 3, 2, 1

// printNumbersReverse(3); // Erwartete Ausgabe: 3, 2, 1



// function printEveryThirdElement(array){

//     let result_list = []
//     for (let index = 0; index < array.length; index += 3) {
//         result_list.push(array[index]);
//     }
//     console.log(result_list.join(", "))
// }

// printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Erwartete Ausgabe: 1, 4, 7

// printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']); // Erwartete Ausgabe: 'a', 'd'



// function isPrime(number){
//     if(number <= 1){
//         return false
//     }

//     for (let index = 2; index < number; index++) {
//         if(number % index == 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)

// console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)