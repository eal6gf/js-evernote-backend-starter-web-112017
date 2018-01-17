
let data = fetch('http://localhost:3000/api/v1/notes') // make a request promise thing.
.then(res => res.json()) // wait 4 the json to come back!
.then(res => { // do things with the json
handleLoadNotes(res)
handleAddListenersToNotesList()
})

function handleLoadNotes(e){
  //do things
  e.forEach(function(noteInfo){ // needs argument
    //forEach vs for (x of collection)
    let noteList = document.querySelector('#noteList')
    let newElement = document.createElement('div')
    newElement.innerHTML = `
    <ul>
    <li class='noteList'> ${noteInfo.title} </li>
    <li class='noteList'> ${noteInfo.body} </li>
    </ul>
    `
    noteList.appendChild(newElement)
  })
}

function handleAddListenersToNotesList(){
  let notesList = document.querySelectorAll('#noteList')
  for(let note of notesList) {
    note.addEventListener('click', handleNoteListClickEvent)
  }
}

function handleNoteListClickEvent(e){
  //delegation event to handle clicks
  debugger
  if (e.target.className === 'noteList'){
    let notePanel = document.getElementById('notePanel')
    //remove child nodes
    notePanel.innerHTML = ''
    //add selected node.
    notePanel.appendChild(e.target)
  }
}
