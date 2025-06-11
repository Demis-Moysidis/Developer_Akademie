let allNotesObject = {
    'notes': ['Rasen mähen', 'Buch lesen'],
    'notesTitles': ['Aufgabe 1', 'Aufgabe 2'],

    'trashNotes': [],
    'trashNotesTitles': [],

    'archivNotes': [],
    'archivNotesTitles': []
}

function init(){
    renderAllNotes();
}

function renderAllNotes(){
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes(){  

    getNotesAndTitleNotesFromLocalStorage();

    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotesObject['notes'].length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);   
    }
}

function renderArchivNotes(){

    getArchivNotesAndArchivTitelsNotesFromLocalStorage();

    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < allNotesObject['archivNotes'].length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);   
    }    
}

function renderTrashNotes(){

    getTrashNotesAndTrashTitelsNotesFromLocalStorage();

    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotesObject['trashNotes'].length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
    }    
}

function getNotesAndTitleNotesFromLocalStorage(){
    let notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'))
    if(notesFromLocalStorage != null){
        allNotesObject['notes'] = notesFromLocalStorage
    }

    let notesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('notesTitles'))
    if(notesTitelsFromLocalStorage != null){
        allNotesObject['notesTitles'] = notesTitelsFromLocalStorage
    }
}

function getArchivNotesAndArchivTitelsNotesFromLocalStorage(){
    let archivNotesFromLocalStorage = JSON.parse(localStorage.getItem('archivNotes'))
    if(archivNotesFromLocalStorage != null){
        allNotesObject['archivNotes'] = archivNotesFromLocalStorage
    }

    let archivNotesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('archivNotesTitles'))
    if(archivNotesTitelsFromLocalStorage != null){
        allNotesObject['archivNotesTitles'] = archivNotesTitelsFromLocalStorage
    }
}

function getTrashNotesAndTrashTitelsNotesFromLocalStorage(){
    let trashNotesFromLocalStorage = JSON.parse(localStorage.getItem('trashNotes'))
    if(trashNotesFromLocalStorage != null){
        allNotesObject['trashNotes'] = trashNotesFromLocalStorage
    }

    let trashNotesTitelsFromLocalStorage = JSON.parse(localStorage.getItem('trashNotesTitles'))
    if(trashNotesTitelsFromLocalStorage != null){
        allNotesObject['trashNotesTitles'] = trashNotesTitelsFromLocalStorage
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

    allNotesObject['notes'].push(noteInput);
    allNotesObject['notesTitles'].push(noteTitle);

    noteInputRef.value = "";
    noteTitleRef.value = "";

    localStorage.setItem('notes', JSON.stringify(allNotesObject['notes']));
    localStorage.setItem('notesTitles', JSON.stringify(allNotesObject['notesTitles']));

    renderNotes();
}

function moveNote(indexNote, fromArray, toArray){
   
    let toMoveNode = allNotesObject[fromArray].splice(indexNote, 1);
    allNotesObject[toArray].push(toMoveNode[0]);
    let toMoveNodeTitle = allNotesObject[fromArray + 'Titles'].splice(indexNote, 1);
    allNotesObject[toArray + 'Titles'].push(toMoveNodeTitle[0]);

    localStorage.setItem(fromArray, JSON.stringify(allNotesObject[fromArray]));
    localStorage.setItem(fromArray + 'Titles', JSON.stringify(allNotesObject[fromArray + 'Titles']));

    localStorage.setItem(toArray, JSON.stringify(allNotesObject[toArray]));
    localStorage.setItem(toArray + 'Titles', JSON.stringify(allNotesObject[toArray + 'Titles']));

    renderAllNotes();
}

function deleteTrashNote(indexTrashNote){
    allNotesObject['trashNotes'].splice(indexTrashNote, 1);
    allNotesObject['trashNotesTitles'].splice(indexTrashNote, 1);

    localStorage.setItem('trashNotes', JSON.stringify(allNotesObject['trashNotes']));
    localStorage.setItem('trashNotesTitles', JSON.stringify(allNotesObject['trashNotesTitles']));

    renderTrashNotes();
}