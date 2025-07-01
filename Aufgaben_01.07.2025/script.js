let checkIfClicked = [
    false,
    false,
    false,
    false,
    false
];

function renderSquare(){
    let refContent = document.getElementById('content');
    
    for (let index = 1; index <= 5; index++) {
        refContent.innerHTML += renderOneHTMLSquare(index);
    }
}

function renderOneHTMLSquare(id){
    return /*html*/`
        <div id="square${id}" onclick="handelClick(${id})" class="square">${id}</div>
        `
}

function handelClick(id){
    if(checkIfClicked[id - 1] == false){
        document.getElementById('square' + id).classList.add('red');
        checkIfClicked[id - 1] = true;
    }else if(checkIfClicked[id - 1] == true){
        document.getElementById('square' + id).innerHTML = '';
        checkIfClicked[id - 1] = 'rot';
    }else if(checkIfClicked[id - 1] == 'rot'){
        document.getElementById('square' + id).classList.remove('red');
        document.getElementById('square' + id).innerHTML = id;
        checkIfClicked[id - 1] = false;
    }
}