const baseUrl = 'http://localhost:3030/jsonstore/tasks'

//input fiels 
const nameInputElement = document.getElementById('name')
const daysInputElement = document.getElementById('num-days')
const dateInputElement = document.getElementById('from-date')

// buttons 

const loadVacantionButton = document.getElementById('load-vacations')
const addButton = document.getElementById('add-vacation')
const editButton = document.getElementById('edit-vacation')

//others 

const listDiv = document.getElementById('list')

currentId = null



// functionality of the code

const loadVacantionsEvent = async () => {
    const response =  await fetch(baseUrl)
    const data = await response.json()
    

    listDiv.innerHTML = ''

    for (const vacantion of Object.values(data)) {

        //create elements
        const changeButton = document.createElement('button')
        changeButton.classList.add('change-btn')
        changeButton.textContent = 'Change'
        
        const doneButton = document.createElement('button')
        doneButton.classList.add('done-btn')
        doneButton.textContent = 'Done'

        const h2NameElement = document.createElement('h2')
        h2NameElement.textContent = vacantion.name

        const h3DateElement = document.createElement('h3')
        h3DateElement.textContent = vacantion.date

        const h3DaysElement = document.createElement('h3')
        h3DaysElement.textContent = vacantion.days

        //create container

        const divContainer = document.createElement('div')
        divContainer.classList.add('container')

        //attach elems to container

        divContainer.appendChild(h2NameElement)
        divContainer.appendChild(h3DateElement)
        divContainer.appendChild(h3DaysElement)
        divContainer.appendChild(changeButton)
        divContainer.appendChild(doneButton)

        //atach container to dom
        listDiv.appendChild(divContainer)

        changeButton.addEventListener('click', () =>{

            currentId = vacantion._id

            nameInputElement.value = vacantion.name
            daysInputElement.value = vacantion.days
            dateInputElement.value =  vacantion.date

            addButton.disabled = true
            editButton.disabled = false

            divContainer.remove()
            
        })

        doneButton.addEventListener('click',async () => {
            await fetch(`${baseUrl}/${vacantion._id}`,{
                method:'DELETE'
            })

            divContainer.remove()

        })
        
    }


}

loadVacantionButton.addEventListener('click', loadVacantionsEvent)


addButton.addEventListener('click', async () =>{
    const name = nameInputElement.value
    const date = dateInputElement.value
    const days = daysInputElement.value

    const response = await fetch(baseUrl, {
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
            name:name,
            days:days,
            date:date,
            
        })
    })

    
    nameInputElement.value = ''
    daysInputElement.value = ''
    dateInputElement.value =  ''

    

})

editButton.addEventListener('click', async () =>{


    const name = nameInputElement.value
    const date = dateInputElement.value
    const days = daysInputElement.value
    console.log(currentId)

    const response = await fetch(`${baseUrl}/${currentId}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
            _id:currentId,
            name: name,
            days: days,
            date: date
        })
    })

    

    nameInputElement.value = ''
    daysInputElement.value = ''
    dateInputElement.value =  ''
    
    currentId = null
    editButton.disabled = true
    addButton.disabled = false

    


})


