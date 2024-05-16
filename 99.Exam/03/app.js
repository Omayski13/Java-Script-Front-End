const baseUrl = 'http://localhost:3030/jsonstore/games'

//input fields
const nameInputElement = document.getElementById('g-name')
const typeInputElement = document.getElementById('type')
const playersInputElement = document.getElementById('players')

//buttons

const loadButton = document.getElementById('load-games')
const addButton = document.getElementById('add-game')
const editButton = document.getElementById('edit-game')


//others

const gameList = document.getElementById('games-list')
let currentGameId = null




//functionality

const loadGames = async() =>{
    const response = await fetch(baseUrl)
    const data = await response.json()

    gameList.innerHTML = ''

    for (const game of Object.values(data)) {
        // create buttons
        const changeButton = document.createElement('button')
        changeButton.classList.add('change-btn')
        changeButton.textContent = 'Change'
        
        const deletButton = document.createElement('button')
        deletButton.classList.add('delete-btn')
        deletButton.textContent = 'Delete'

        // create div with class buttons-container
        const divButtonsContainer = document.createElement('div')
        divButtonsContainer.classList.add('buttons-container')

        //atach buttons to div with class buttons-container
        divButtonsContainer.appendChild(changeButton)
        divButtonsContainer.appendChild(deletButton)
        
        //create div with class content
        const divContent = document.createElement('div')
        divContent.classList.add('content')

        //create paragraphs

        const nameParagraph = document.createElement('p')
        nameParagraph.textContent = game.name

        const typeParagraph = document.createElement('p')
        typeParagraph.textContent = game.type

        const playersParagraph = document.createElement('p')
        playersParagraph.textContent = game.players

        // attach paragraphs to div with class content
        divContent.appendChild(nameParagraph)
        divContent.appendChild(playersParagraph)
        divContent.appendChild(typeParagraph)

        //create div class board-games

        const divBoardGame = document.createElement('div')
        divBoardGame.classList.add('board-game')

        //attach div buttons and div class content ot div boardgames
        divBoardGame.appendChild(divContent)
        divBoardGame.appendChild(divButtonsContainer)

        //atach board games to dom
        gameList.appendChild(divBoardGame)

        editButton.disabled = true

        changeButton.addEventListener('click', () =>{

            currentGameId = game._id

            nameInputElement.value = game.name
            typeInputElement.value = game.type
            playersInputElement.value = game.players

            divBoardGame.remove()

            editButton.disabled = false
            addButton.disabled = true
        })

        deletButton.addEventListener('click', async () =>{
            const response = await fetch(`${baseUrl}/${game._id}`,{
                method:'DELETE'
            })

            divBoardGame.remove()
        })

    }
}

loadButton.addEventListener('click', loadGames)

addButton.addEventListener('click', async() =>{

    const name = nameInputElement.value
    const type = typeInputElement.value
    const players = playersInputElement.value

    const response = await fetch(baseUrl,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            name:name,
            type:type,
            players:players})
    })

    clearInputFields()

    await loadGames()
})

editButton.addEventListener('click', async () =>{

    const name = nameInputElement.value
    const type = typeInputElement.value
    const players = playersInputElement.value

    const response = await fetch(`${baseUrl}/${currentGameId}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            '_id':currentGameId,
            name:name,
            type:type,
            players:players
        })
    })

    editButton.disabled = true
    addButton.disabled = false

    await loadGames()

    clearInputFields()

    currentGameId = null

})


function clearInputFields(){
    nameInputElement.value = ''
    typeInputElement.value = ''
    playersInputElement.value = ''
}