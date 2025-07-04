// Fragestellung 1: Du möchtest prüfen, ob eine Person volljährig ist. Nutze den ternären Operator, um dies zu überprüfen und eine entsprechende Nachricht auszugeben.

// Aufgabe 1: Schreibe eine Funktion isAdult, die das Alter einer Person als Parameter entgegennimmt und entweder "Volljährig" oder "Minderjährig" ausgibt in der Konsole. 
// Tipp: Nutze die forEach Schleife um durch das people Array zu iterieren.

let people = [
    {
        "name": "Rita",
        "age": 55
    },
    {
        "name": "Paul",
        "age": 10
    },
    {
        "name": "Sophie",
        "age": 21
    },
    {
        "name": "Lukas",
        "age": 18
    },
    {
        "name": "Marie",
        "age": 15
    },
    {
        "name": "Tom",
        "age": 25
    },
    {
        "name": "Lena",
        "age": 86
    },
    {
        "name": "Max",
        "age": 16
    },
    {
        "name": "Anna",
        "age": 12
    },
    {
        "name": "Philipp",
        "age": 22
    }
]

people.forEach(isAdult)

function isAdult(e){
    console.log(e.age >= 18 ? e.name + ': Volljährig' : e.name + ': Minderjährig')
}


// Fragestellung 2: Du möchtest überprüfen, ob eine Zahl positiv oder negativ ist. Nutze den ternären Operator, um dies zu überprüfen und eine entsprechende Nachricht auszugeben.

// Aufgabe 2: Schreibe eine Funktion checkNumber, die eine Zahl als Parameter entgegennimmt und entweder "Positiv" oder "Negativ" ausgibt in der Konsole. 
// Tipp: Nutze die forEach Schleife um durch das numbers Array zu iterieren.

let numbers = [12, -7, 5, 0, -3, 25, -11, 8];

numbers.forEach(checkNumber);

function checkNumber(number){
    console.log(number >= 0 ? 'Positiv' : 'Negativ');
}




// Fragestellung 3: Prüfe, ob ein Benutzer ein Admin ist. Falls ja, gib "Admin" aus, andernfalls "Guest".

// Aufgabe 3: Nutze die forEach Schleife um durch das users Array zu iterieren. Schreibe hier eine Arrow-Function um den Namen und die Rolle (Guest/Admin) des users auszuloggen.
// Tipp: Schreibe eine Funktion checkRole die auch in der Arrow Function aufgerufen wird, die einen String role als Parameter erhält und entweder "Admin" oder "Guest" zurückgibt, 
// nutze auch hier den Ternary Operator.

let users = [
    {
        "name": "Rita",
        "role": "Guest",
        "lastLogin": "2024-09-20T14:30:00Z"
    },
    {
        "name": "Paul",
        "role": "Admin",
        "lastLogin": "2024-09-22T09:15:00Z"
    },
    {
        "name": "Sophie",
        "role": "Guest",
        "lastLogin": "2024-09-25T12:00:00Z"
    },
    {
        "name": "Lukas",
        "role": "Admin",
        "lastLogin": "2024-09-26T08:45:00Z"
    },
    {
        "name": "Marie",
        "role": "Guest",
        "lastLogin": "2024-09-23T18:10:00Z"
    },
    {
        "name": "Tom",
        "role": "Admin",
        "lastLogin": "2024-09-21T10:30:00Z"
    },
    {
        "name": "Lena",
        "role": "Guest",
        "lastLogin": "2024-09-24T16:20:00Z"
    },
    {
        "name": "Max",
        "role": "Admin",
        "lastLogin": "2024-09-25T11:00:00Z"
    },
    {
        "name": "Anna",
        "role": "Guest",
        "lastLogin": "2024-09-20T14:00:00Z"
    },
    {
        "name": "Philipp",
        "role": "Admin",
        "lastLogin": "2024-09-26T07:30:00Z"
    }
]

users.forEach(e => 
    console.log(`${e.name} ist ${checkRole(e.role)}`)
)

function checkRole(role){
    return role == 'Admin' ? 'Admin' : 'Guest'
}



// Fragestellung 4: Schaue, ob ein Artikel auf Lager ist. 

// Aufgabe 4: Zeige den Namen des Produkts und dessen Bestand in der Konsole an. Wenn der Bestand größer als 0 ist, gib "Auf Lager" aus, andernfalls "Ausverkauft".

let products = [
    { productName: "Laptop", stock: 5 },
    { productName: "Smartphone", stock: 0 },
    { productName: "Tablet", stock: 3 },
    { productName: "Kopfhörer", stock: 10 },
    { productName: "Smartwatch", stock: 0 }
];

products.forEach(product => {
    console.log(`${product.productName}: ${checkStock(product.stock)}`);
});


function checkStock(stock) {
    return stock > 0 ? "Auf Lager" : "Ausverkauft";
}

// products.forEach(e => 
//     console.log(e.productName, ":", e.stock, ":", e.stock > 0 ? "Auf Lager" : "Ausverkauft")
// )