async function init(){
    let refCharacters = document.getElementById('characters');

    let charactersData = await fetch('https://thronesapi.com/api/v2/Characters');
    let charactersDataJson = await charactersData.json();

    charactersDataJson.forEach((element, index) => {
        refCharacters.innerHTML += /*html*/`
            <div class="character">
                <img src="${element.imageUrl}" alt="">
                <b>#${index + 1}</b>
                <p>${element.firstName} ${element.lastName}</p>
                <b>${element.title}</b>
            </div>
        `
    });
}