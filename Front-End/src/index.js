
let data = fetch('http://localhost:3000/api/v1/notes') // make a request promise thing.
.then(res => res.json()) // wait 4 the json to come back!
.then(x => { // do things with the json
handleLoadNotes(x)
})

function handleLoadNotes(x){
  //do things
  x.forEach(function(noteInfo){ // needs argument
    //forEach vs for (x of collection)
    let noteList = document.querySelector('.noteList')
    let newElement = document.createElement('div')
    newElement.innerHTML = `
    <ul>
    <li> ${noteInfo.title} </li>
    <li> ${noteInfo.body} </li>

    </ul>
    `
    noteList.appendChild(newElement)
  })
}

function handle
