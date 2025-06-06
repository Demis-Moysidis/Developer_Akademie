let notes = ['banana', 'rasen mähen'];
let notesTitles = ['Ba', 'Aufgabe'];

let trashNotes = [];
let trashNotesTitles = [];

function init(){
    renderNotes();
    renderTrashNotes();
}

function renderNotes(){  

    getNotesAndTitleNotesFromLocalStorage();

    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);   
    }
}

function renderTrashNotes(){

    getTrashNotesAndTrashTitelsNotesFromLocalStorage();

    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
    }    
}

function getNotesAndTitleNotesFromLocalStorage(){
    let notesFromLocalStorage = JSON.parse(localStorage.getItem('myNotesData'))
    if(notesFromLocalStorage != null){
        notes = notesFromLocalStorage
    }

    let notesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('myNotesTitelsData'))
    if(notesTitelsFromLocalStorage != null){
        notesTitles = notesTitelsFromLocalStorage
    }
}

function getTrashNotesAndTrashTitelsNotesFromLocalStorage(){
    let trashNotesFromLocalStorage = JSON.parse(localStorage.getItem('myTrashNotesData'))
    if(trashNotesFromLocalStorage != null){
        trashNotes = trashNotesFromLocalStorage
    }

    let trashNotesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('myTrashNotesData'))
    if(trashNotesTitelsFromLocalStorage != null){
        trashNotesTitles = trashNotesTitelsFromLocalStorage
    }
}

function getNoteTemplate(indexNote){
    return /*html*/`
        <p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}
            <button onclick="deleteNote(${indexNote})">X</button>
        </p>
    `
}

function getTrashNoteTemplate(indexTrashNote){
    return /*html*/`
        <p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}
            <button onclick="deleteTrashNote(${indexTrashNote})">X</button>
        </p>
    `
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    let noteTitleRef = document.getElementById('note_title');
    let noteTitle = noteTitleRef.value;    

    notes.push(noteInput);
    notesTitles.push(noteTitle);

    noteInputRef.value = "";
    noteTitleRef.value = "";

    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitelsData', JSON.stringify(notesTitles));

    renderNotes();
}

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    localStorage.setItem('myTrashNotesData', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashNotesTitleData', JSON.stringify(trashNotesTitles));

    notes.splice(indexNote, 1);
    notesTitles.splice(indexNote, 1);
    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitelsData', JSON.stringify(notesTitles));

    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    localStorage.setItem('myTrashNotesData', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashNotesTitleData', JSON.stringify(trashNotesTitles));

    renderTrashNotes();
}