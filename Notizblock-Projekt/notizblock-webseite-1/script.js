let notes = ['banana', 'rasen mähen'];
let notesTitles = ['Ba', 'Aufgabe']

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);   
    }
}

function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
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

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);
    renderTrashNotes();
}