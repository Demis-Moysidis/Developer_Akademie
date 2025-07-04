
async function fetchFruitsData(){
    let fruitsData = await fetch('https://www.fruityvice.com/api/fruit/all');
    let fruitsDataJson = await fruitsData.json();

    for (let i = 0; i < fruitsDataJson.length; i++) {
        document.getElementById('fruits').innerHTML += `<p>${fruitsDataJson[i].name}</p>`
    }
}