let products = [ 
    {
      'name': 'Apfel',
      'preis': 1.99,
      'kategorie': 'Obst',
      'eigenschaften': ['vegan', 'bio', 'rot', 'süß']
    },
    {
      'name': 'Banane',
      'preis': 3.99,
      'kategorie': 'Obst',
      'eigenschaften': ['vegan', 'bio', 'gelb']
    },
    {
      'name': 'Tomate',
      'preis': 2.99,
      'kategorie': 'Gemüse',
      'eigenschaften': ['vegan', 'rot']
    }
];

function renderProducts(){
    let refProducts = document.getElementById('products');

    for (let i = 0; i < products.length; i++) {
        refProducts.innerHTML += /*html*/ `<div class="card">
                                                <h2>${products[i].name}</h2>
                                                <p><b>Preis:</b> ${products[i].preis}€</p>
                                                <p><b>Kategorie:</b> ${products[i].kategorie}</p>
                                                <br>
                                                <p><b>Eigenschaften:</b></p>
                                                <ul>
                                                    ${renderCharacteristicsOfPruduct(i)} 
                                                </ul>
                                            </div> 
                                            `
    };
};



function renderCharacteristicsOfPruduct(indexOfPruduct){
    let html = "";
    for (let j = 0; j < products[indexOfPruduct].eigenschaften.length; j++) {
        html += /*html*/`<li>${products[indexOfPruduct].eigenschaften[j]}</li>`
    };
    return html
};