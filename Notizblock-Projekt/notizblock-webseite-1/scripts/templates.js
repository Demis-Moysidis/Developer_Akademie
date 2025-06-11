function getNoteTemplate(indexNote){
    return /*html*/`
        <div class="note">
            <h2>${allNotesObject['notesTitles'][indexNote]}</h2>
            <p>${allNotesObject['notes'][indexNote]}</p>  
            <div>
                <button class="btn" onclick="moveNote(${indexNote}, 'notes','trashNotes')">X</button>
                <button class="btn" onclick="moveNote(${indexNote}, 'notes','archivNotes')">A</button>
            </div>
        </div>
    `
}

function getArchivNoteTemplate(indexArchivNote){
    return /*html*/`
        <div class="note">
            <h2>${allNotesObject['archivNotesTitles'][indexArchivNote]}</h2> 
            <p>${allNotesObject['archivNotes'][indexArchivNote]}</p>
            <div>
                <button class="btn" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">X</button>
                <button class="btn" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">N</button>
            </div>
        </div>
    `
}

function getTrashNoteTemplate(indexTrashNote){
    return /*html*/`
        <div class="note">
            <h2>${allNotesObject['trashNotesTitles'][indexTrashNote]}</h2>
            <p>${allNotesObject['trashNotes'][indexTrashNote]}</p>
            <div>
                <button class="btn" onclick="deleteTrashNote(${indexTrashNote})">X</button>
                <button class="btn" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">N</button>
            </div>
        </div>
    `
}