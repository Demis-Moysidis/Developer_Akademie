let notes = ['Rasen mähen', 'Buch lesen'];
let notesTitles = ['Aufgabe 1', 'Aufgabe 2'];

let trashNotes = [];
let trashNotesTitles = [];

let archivNotes = [];
let archivNotesTitles = [];

function init(){
    renderNotes();
    renderArchivNotes();
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

function renderArchivNotes(){

    getArchivNotesAndArchivTitelsNotesFromLocalStorage();

    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);   
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

    let notesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('myNotesTitlesData'))
    if(notesTitelsFromLocalStorage != null){
        notesTitles = notesTitelsFromLocalStorage
    }
}

function getArchivNotesAndArchivTitelsNotesFromLocalStorage(){
    let archivNotesFromLocalStorage = JSON.parse(localStorage.getItem('myArchivNotesData'))
    if(archivNotesFromLocalStorage != null){
        archivNotes = archivNotesFromLocalStorage
    }

    let archivNotesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('myArchivNotesTitlesData'))
    if(archivNotesTitelsFromLocalStorage != null){
        archivNotesTitles = archivNotesTitelsFromLocalStorage
    }
}

function getTrashNotesAndTrashTitelsNotesFromLocalStorage(){
    let trashNotesFromLocalStorage = JSON.parse(localStorage.getItem('myTrashNotesData'))
    if(trashNotesFromLocalStorage != null){
        trashNotes = trashNotesFromLocalStorage
    }

    let trashNotesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('myTrashNotesTitlesData'))
    if(trashNotesTitelsFromLocalStorage != null){
        trashNotesTitles = trashNotesTitelsFromLocalStorage
    }
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    let noteTitleRef = document.getElementById('note_title');
    let noteTitle = noteTitleRef.value;
    
    if(!noteTitle || !noteInput){
        return
    }

    notes.push(noteInput);
    notesTitles.push(noteTitle);

    noteInputRef.value = "";
    noteTitleRef.value = "";

    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitlesData', JSON.stringify(notesTitles));

    renderNotes();
}

function archivNote(indexNote){
    let archivNote = notes.splice(indexNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = notesTitles.splice(indexNote, 1);
    archivNotesTitles.push(archivNoteTitle[0]);
    localStorage.setItem('myArchivNotesData', JSON.stringify(archivNotes));
    localStorage.setItem('myArchivNotesTitlesData', JSON.stringify(archivNotesTitles));

    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitlesData', JSON.stringify(notesTitles));

    renderNotes();
    renderArchivNotes();
}

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    localStorage.setItem('myTrashNotesData', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashNotesTitlesData', JSON.stringify(trashNotesTitles));

    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitlesData', JSON.stringify(notesTitles));

    renderNotes();
    renderTrashNotes();
}

function deleteNoteFromArchiv(indexNote){
    let trashNote = archivNotes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = archivNotesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    localStorage.setItem('myTrashNotesData', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashNotesTitlesData', JSON.stringify(trashNotesTitles));

    localStorage.setItem('myArchivNotesData', JSON.stringify(archivNotes));
    localStorage.setItem('myArchivNotesTitlesData', JSON.stringify(archivNotesTitles));

    renderArchivNotes();
    renderTrashNotes();
}

function backToNoteFromArchiv(indexNote){
    let backToNote = archivNotes.splice(indexNote, 1);
    notes.push(backToNote[0]);
    let backToNoteTitle = archivNotesTitles.splice(indexNote, 1);
    notesTitles.push(backToNoteTitle[0]);
    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitlesData', JSON.stringify(notesTitles));

    localStorage.setItem('myArchivNotesData', JSON.stringify(archivNotes));
    localStorage.setItem('myArchivNotesTitlesData', JSON.stringify(archivNotesTitles));

    renderArchivNotes();
    renderNotes();
}

function backToNoteFromTrash(indexNote){
    let backToNote = trashNotes.splice(indexNote, 1);
    notes.push(backToNote[0]);
    let backToNoteTitle = trashNotesTitles.splice(indexNote, 1);
    notesTitles.push(backToNoteTitle[0]);
    localStorage.setItem('myNotesData', JSON.stringify(notes));
    localStorage.setItem('myNotesTitlesData', JSON.stringify(notesTitles));

    localStorage.setItem('myTrashNotesData', JSON.stringify(archivNotes));
    localStorage.setItem('myTrashNotesTitlesData', JSON.stringify(archivNotesTitles));

    renderTrashNotes();
    renderNotes();
}

function deleteTrashNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    localStorage.setItem('myTrashNotesData', JSON.stringify(trashNotes));
    localStorage.setItem('myTrashNotesTitlesData', JSON.stringify(trashNotesTitles));

    renderTrashNotes();
}