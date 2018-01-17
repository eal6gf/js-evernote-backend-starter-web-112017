
let data = fetch('http://localhost:3000/api/v1/notes') // make a request promise thing.
.then(res => res.json()) // wait 4 the json to come back!
.then(res => { // do things with the json
handleLoadNotes(res) // add elements to page
handleAddListenersToNotesList() // add event listener to noteslist area with delegation
})

function handleLoadNotes(e){
  //do things
  e.forEach(function(noteInfo){ // needs argument
    //forEach vs for (x of collection)
    let noteList = document.querySelector('#noteList')
    let newElement = document.createElement('div')
    newElement.innerHTML = `
    <ul class = 'note'>
    <li> ${noteInfo.title} </li>
    <li> ${noteInfo.body} </li>
    </ul>
    `
    noteList.appendChild(newElement)
  })
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

function handleNewNoteButtonClick() {

  let form = document.getElementById("formArea")
  form.style.display = "block"
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("createButton")
  button.addEventListener("click", handleNewNoteButtonClick)
})
