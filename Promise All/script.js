let allDataNormal = [];
let allDataResolved = [];


async function normalFetch() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");  // 100 Limit
    let data = await response.json();
    console.log(data.results);
    for (let index = 0; index < data.results.length; index++) {
        let response = await fetch(data.results[index].url);
        let singleData = await response.json();
        console.log("for loop data single:", index, singleData);
        allDataNormal.push(singleData); 
    }
    console.log("normal fetch done!");
}


async function withPromiseAll() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");  // 500 Limit
    let data = await response.json();
    console.log(data.results);
    let allData = data.results.map(async data => {
        let response = await fetch(data.url);
        return await response.json();
    });
    console.log("alldata promises", allData);
    allDataResolved = await Promise.all(allData);
    console.log("alle promise resolved daten:", allDataResolved);
    console.log("promise all done!");
}