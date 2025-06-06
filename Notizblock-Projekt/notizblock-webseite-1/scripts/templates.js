function getNoteTemplate(indexNote){
    return /*html*/`
        <div class="note">
            <h2>${notesTitles[indexNote]}</h2>
            <p>${notes[indexNote]}</p>  
            <div>
                <button class="btn" onclick="deleteNote(${indexNote})">X</button>
                <button class="btn" onclick="archivNote(${indexNote})">A</button>
            </div>
        </div>
    `
}

function getArchivNoteTemplate(indexArchivNote){
    return /*html*/`
        <div class="note">
            <h2>${archivNotesTitles[indexArchivNote]}</h2> 
            <p>${archivNotes[indexArchivNote]}</p>
            <div>
                <button class="btn" onclick="deleteNoteFromArchiv(${indexArchivNote})">X</button>
                <button class="btn" onclick="backToNoteFromArchiv(${indexArchivNote})">N</button>
            </div>
        </div>
    `
}

function getTrashNoteTemplate(indexTrashNote){
    return /*html*/`
        <div class="note">
            <h2>${trashNotesTitles[indexTrashNote]}</h2>
            <p>${trashNotes[indexTrashNote]}</p>
            <div>
                <button class="btn" onclick="deleteTrashNote(${indexTrashNote})">X</button>
                <button class="btn" onclick="backToNoteFromTrash(${indexTrashNote})">N</button>
            </div>
        </div>
    `
}