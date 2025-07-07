let employees = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 25,
        "employment": {
            "companyName": "ABC Corporation",
            "department": {
                "name": "Development",
                "office": {
                    "building": "Tech Tower",
                    "floor": 5,
                    "room": "D-503",
                    "data": [
                        {
                            "category": "Server",
                            "quantity": 20
                        },
                        {
                            "category": "Workstations",
                            "quantity": 50
                        },
                        {
                            "category": "Meeting Rooms",
                            "quantity": 3
                        }
                    ]
                }
            }
        },
        "salary": 60000,
        "children": [
            {
                "child_name": "Emily",
                "child_age": 5
            },
            {
                "child_name": "Daniel",
                "child_age": 8
            }
        ],
        "locations": [
            {
                "city": "Berlin",
                "country": "Germany",
                "country_info": {
                    "capital": "Berlin",
                    "population": 83019200,
                    "language": "German"
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 30,
        "employment": {
            "companyName": "XYZ Ltd",
            "department": {
                "name": "Marketing",
                "office": {
                    "building": "Marketing Plaza",
                    "floor": 2,
                    "room": "M-201",
                    "data": [
                        {
                            "category": "Marketing Campaigns",
                            "quantity": 5
                        },
                        {
                            "category": "Creative Team",
                            "quantity": 15
                        },
                        {
                            "category": "Meeting Rooms",
                            "quantity": 2
                        }
                    ]
                }
            }
        },
        "salary": 75000,
        "children": [
            {
                "child_name": "Sophie",
                "child_age": 3
            }
        ],
        "locations": [
            {
                "city": "Paris",
                "country": "France",
                "country_info": {
                    "capital": "Paris",
                    "population": 66991000,
                    "language": "French"
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "Mike Johnson",
        "age": 22,
        "employment": {
            "companyName": "Tech Innovators",
            "department": {
                "name": "Research",
                "office": {
                    "building": "Innovation Tower",
                    "floor": 8,
                    "room": "R-802",
                    "data": [
                        {
                            "category": "Research Labs",
                            "quantity": 10
                        },
                        {
                            "category": "Scientists",
                            "quantity": 30
                        },
                        {
                            "category": "Meeting Rooms",
                            "quantity": 4
                        }
                    ]
                }
            }
        },
        "salary": 55000,
        "children": [
            {
                "child_name": "Emma",
                "child_age": 4
            }
        ],
        "locations": [
            {
                "city": "New York",
                "country": "USA",
                "country_info": {
                    "capital": "Washington, D.C.",
                    "population": 331002651,
                    "language": "English"
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "Anna Müller",
        "age": 28,
        "employment": {
            "companyName": "Global Solutions",
            "department": {
                "name": "Human Resources",
                "office": {
                    "building": "HR Tower",
                    "floor": 3,
                    "room": "HR-301",
                    "data": [
                        {
                            "category": "Employee Relations",
                            "quantity": 8
                        },
                        {
                            "category": "Training Rooms",
                            "quantity": 2
                        },
                        {
                            "category": "Recruitment Team",
                            "quantity": 12
                        }
                    ]
                }
            }
        },
        "salary": 68000,
        "children": [
            {
                "child_name": "Lukas",
                "child_age": 7
            },
            {
                "child_name": "Sophia",
                "child_age": 1
            }
        ],
        "locations": [
            {
                "city": "Munich",
                "country": "Germany",
                "country_info": {
                    "capital": "Berlin",
                    "population": 83019200,
                    "language": "German"
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "Carlos Sanchez",
        "age": 35,
        "employment": {
            "companyName": "Global Markets",
            "department": {
                "name": "Finance",
                "office": {
                    "building": "Finance Tower",
                    "floor": 12,
                    "room": "F-1201",
                    "data": [
                        {
                            "category": "Financial Analysts",
                            "quantity": 25
                        },
                        {
                            "category": "Trading Floor",
                            "quantity": 1
                        },
                        {
                            "category": "Meeting Rooms",
                            "quantity": 3
                        }
                    ]
                }
            }
        },
        "salary": 85000,
        "children": [
            {
                "child_name": "Mateo",
                "child_age": 9
            }
        ],
        "locations": [
            {
                "city": "Madrid",
                "country": "Spain",
                "country_info": {
                    "capital": "Madrid",
                    "population": 46754778,
                    "language": "Spanish"
                }
            }
        ]
    }
]
console.log(employees);



function init() {
    exercise0();
    exercise1();
    exercise2();
    exercise3();
}


function exercise0() {
    let contentRender = document.getElementById('exercise0');
    for (let indexContent = 0; indexContent < employees.length; indexContent++) {
        contentRender.innerHTML += /*html*/`
            <div>${employees[indexContent].name}</div>
        `;
    }
}


function exercise1() {
    let contentRender = document.getElementById('exercise1');
    contentRender.innerHTML += /*html*/`
        <div>
            <p>Name: ${employees[3].name}</p>
            <p>Firmenname: ${employees[3].employment.companyName}</p>
        </div>
     `
    
}


function exercise2() {
    let contentRender = document.getElementById('exercise2');
    for (let i = 0; i < employees.length; i++) {
        contentRender.innerHTML += /*html*/`
            <div>
                <p>Sprache: ${employees[i].locations[0].country_info.language}</p>
                <p>Stockwerk: ${employees[i].employment.department.office.floor}</p>
                <br>
            </div>
        `
    }
}


function exercise3() {
    let contentRender = document.getElementById('exercise3');
    for (let i = 0; i < employees.length; i++) {
        if(employees[i].salary > 60000){
            contentRender.innerHTML += /*html*/`
                <div>
                    <p>Name: ${employees[i].name}</p>
                    <p>Gehalt: ${employees[i].salary}</p>
                    <br>
                </div>
            `
        }   
    }
}