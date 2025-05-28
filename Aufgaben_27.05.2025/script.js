// function checkGrade(grade) {
//     if (grade >= 1 && grade <= 4) {
//         console.log("Passed");
//     } else if (grade >= 5 && grade <= 6) {
//         console.log("Failed");
//     } else {
//         console.log("Invalid grade");
//     }
// }


// function checkNumber(num) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }


// function checkBigger(num1, num2) {
//     if (num1 > num2) {
//         console.log("Bigger number:", num1);
//     } else if (num2 > num1) {
//         console.log("Bigger number:", num2);
//     } else {
//         console.log("Both numbers are equal");
//     }
// }


// function checkStringLength(text) {
//     if (text.length > 5) {
//         console.log("Text has more than 5 characters");
//     } else {
//         console.log("Text has 5 or fewer characters");
//     }
// }


// checkGrade(3);
// checkNumber(-2);
// checkBigger(1, 4);
// checkStringLength("hello!");




// Aufgabe 1.1
// Erweitere Aufgabe 1 von der Übung so, dass nun die Eingaben über ein Inputfeld und einen Button erfolgen, die Ergebnisse sollen nun z.b. in einer Div darunter im HTML angezeigt werden.

// pseudocode
// 1. button im html anlegen + onclick auf den button geben zum funktionsaufruf
// 2. inputfeld im html anlegen + id
// 3. wert aus inputfeld ziehen
// 4. p im html anlegen für den output /das ergebnis

// version 2:

function checkGrade() {
    let gradeValue = document.getElementById("inputGrade").value;
    if (gradeValue >= 1 && gradeValue <= 4) {
        document.getElementById("outputGrade").innerHTML = "Passed";
    } else if (gradeValue >= 5 && gradeValue <= 6) {
        document.getElementById("outputGrade").innerHTML = "Failed";
    } else {
        document.getElementById("outputGrade").innerHTML = "Invalid grade";
    }
}


// version 1:
// function checkGrade(grade) {
//     if (grade >= 1 && grade <= 4) {
//         console.log("Passed");
//     } else if (grade >= 5 && grade <= 6) {
//         console.log("Failed");
//     } else {
//         console.log("Invalid grade");
//     }
// }

// checkGrade(3);




// Aufgabe 2.1
// Erweitere Aufgabe 2 von der Übung so, dass nun die Eingaben über ein Inputfeld und einen Button erfolgen, die Ergebnisse sollen nun z.b. in einer Div darunter im HTML angezeigt werden.

function checkNumber(id_input, id_p) {
    let num = document.getElementById(id_input).value
    if (num > 0) {
        document.getElementById(id_p).innerHTML =  "Positive";
    } else if (num < 0) {
        document.getElementById(id_p).innerHTML = "Negative";
    } else {
        document.getElementById(id_p).innerHTML = "Zero";
    }
}


// Aufgabe 3.1
// Erweitere Aufgabe 3 von der Übung so, dass nun die Eingaben über mehrere Inputfelder und einen Button erfolgen, die Ergebnisse sollen nun z.b. in einer Div darunter im HTML angezeigt werden.

function checkBigger(id_num1, id_num2, id_p) {
    let num1 = document.getElementById(id_num1).value;
    let num2 = document.getElementById(id_num2).value;
    if (num1 > num2) {
        document.getElementById(id_p).innerHTML =  "Bigger number:" + num1;
    } else if (num2 > num1) {
        document.getElementById(id_p).innerHTML =  "Bigger number:" + num2;
    } else {
        document.getElementById(id_p).innerHTML = "Both numbers are equal";
    }
}


// Zusatzaufgabe 4.1
// Erweitere Zusatzaufgabe 4 von der Übung so, dass nun die Eingaben über ein Inputfeld und einen Button erfolgen, die Ergebnisse sollen nun z.b. in einer Div darunter im HTML angezeigt werden.

function checkStringLength(id_input, id_p) {
    let text = document.getElementById(id_input).value;
    if (text.length > 5) {
        document.getElementById(id_p).innerHTML = "Text has more than 5 characters";
    } else {
        document.getElementById(id_p).innerHTML =  "Text has 5 or fewer characters";
    }
}