const baseUrl = 'http://localhost:3030/jsonstore/tasks'

//input fiels
const nameInputField = document.getElementById('name')
const daysInputField = document.getElementById('num-days')
const dateInputField = document.getElementById('from-date')

//buttons
const addButton = document.getElementById('add-vacation')
const editButton = document.getElementById('edit-vacation')
const loadVacantionbutton = document.getElementById('load-vacations')


//other
const divList = document.getElementById('list')




const loadvacantions = async () =>{
    const response = await fetch(baseUrl)
    const data = await response.json()

    divList.innerHTML = ''

    for (const vacantion of Object.values(data)) {

        //buttons
        const changeButton = document.createElement('button')
        changeButton.classList.add('change-btn')
        changeButton.textContent = 'Change'
        
        const doneButton = document.createElement('button')
        doneButton.classList.add('done-btn')
        doneButton.textContent = 'Done'

        //h2;h3

        const h2NameElement = document.createElement('h2')
        h2NameElement.textContent = vacantion.name

        const h3daysElement = document.createElement('h3')
        h3daysElement.textContent = vacantion.days

        const h3dateElement = document.createElement('h3')
        h3dateElement.textContent = vacantion.date

        const divContainer = document.createElement('div')
        divContainer.classList.add('container')

        divContainer.appendChild(h2NameElement)
        divContainer.appendChild(h3daysElement)
        divContainer.appendChild(h3dateElement)
        divContainer.appendChild(changeButton)
        divContainer.appendChild(doneButton)

        divList.appendChild(divContainer)
        
    }

    
}

loadVacantionbutton.addEventListener('click', loadvacantions)

addButton.addEventListener('click', async () =>{

    await loadvacantions()

    const name = nameInputField.value
    const days = daysInputField.value
    const date = dateInputField.value
    const newVacantion = getInputData()

    console.log(newVacantion)

    const response = await fetch (baseUrl, {
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(newVacantion)
        // body: JSON.stringify({name:name,
        // days:days,
        // date:date}),
    })


    


    

} )



function getInputData() {
    const name = nameInputField.value
    const days = daysInputField.value
    const date = dateInputField.value

    return { name, days, date }

}

function clearInputData() {
    nameInputField.value.value = '';
    daysInputField.value = '';
    dateInputField.value = '';
}