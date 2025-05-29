function sendMessage(){
    let inputName = document.getElementById('name').value;
    let inputMessage = document.getElementById('message').value;

    // console.log(inputName, inputMessage)

    if(inputName.length < 3 || inputMessage.length < 5){
        document.getElementById('red_message').classList.remove('d_none')
    }else{
        document.getElementById('red_message').classList.add('d_none')
        document.getElementById('messagesContainer').innerHTML += `<p>${inputName}: ${inputMessage}</p>`;
    }
 
}

function toggleMode(){
    document.body.classList.toggle('dark')
}