
class Note {
  constructor(title, body){
    this.title = title
    this.body = body
  }
  render() {
    //renders a new note on the notelist
    let noteList = document.querySelector('#noteList')
    let newElement = document.createElement('div')
    newElement.innerHTML = `
    <ul class = 'note'>
    <li> ${this.title} </li>
    <li> ${this.body} </li>
    </ul>`
    noteList.appendChild(newElement)
  }
}

let data = fetch('http://localhost:3000/api/v1/notes') // make a request promise thing.
.then(res => res.json()) // wait 4 the json to come back!
.then(res => { // do things with the json
handleLoadNotes(res) // add elements to page
handleAddListenersToNotesList() // add event listener to noteslist area with delegation
})

function handleLoadSingleNote(title,body){
  let note = new Note(title,body)
  note.render()
}

function handleLoadNotes(dbNotes){
  //do things
  dbNotes.forEach( (dbNote) => { handleLoadSingleNote(dbNote.title, dbNote.body)})
}

function handleAddListenersToNotesList() {
  let notesList = document.querySelector('#noteList')
  notesList.addEventListener("click", function(e) {
     if (e.target.parentNode.className === 'note'){
       let notePanel = document.getElementById('notePanel')
       // remove child nodes
       notePanel.innerHTML = ''
       // add selected node.
       let x = e.target.parentNode.cloneNode(true)
       notePanel.appendChild(x)
    }
  }
)
}
function createNewNote() {
  // get input field
  let titleInput = document.querySelector("[name=title]").value
  let bodyInput = document.querySelector("[name=body]").value

  //send to rails api to create a new note on backend --> then front end.
  fetch('http://localhost:3000/api/v1/notes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // what kind of data am i sending?
        'Accept': 'application/json' // what kind of data do i want back?
      },
      body: JSON.stringify({ // pass the data
        title: titleInput,
        body: bodyInput,
      })
    }).then( () =>
      handleLoadSingleNote(titleInput,bodyInput)

    )
  }

function handleNewNoteButtonClick() {
  let form = document.getElementById("formArea")
  form.style.display = "block"
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("createButton")
  button.addEventListener("click", handleNewNoteButtonClick)
})
