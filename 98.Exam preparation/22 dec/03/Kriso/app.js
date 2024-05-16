const baseUrl = 'http://localhost:3030/jsonstore/gifts'

//input fields
const giftInputElement = document.getElementById('gift')
const forInputElement = document.getElementById('for')
const priceInputElement = document.getElementById('price')

//buttons
const loadButton = document.getElementById('load-presents')
const addButton = document.getElementById('add-present')
const editButton = document.getElementById('edit-present')

//others

const listGifts = document.getElementById('gift-list')
currentPresentId = null


// functionality

const getPresents = async () =>{
    const response = await fetch(baseUrl)
    const data = await response.json()

    
    
    listGifts.innerHTML = ''

    for (const present of Object.values(data)) {
        

        const divGiftSocks = document.createElement('div')
        divGiftSocks.classList.add('gift-sock')

        //create buttons
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-btn')
        deleteButton.textContent = 'Delete'

        const changeButton = document.createElement('button')
        changeButton.classList.add('change-btn')
        changeButton.textContent = 'Change'

        const divButtonsContainer = document.createElement('div')
        divButtonsContainer.classList.add('buttons-container')

        divButtonsContainer.appendChild(changeButton)
        divButtonsContainer.appendChild(deleteButton)

        //create paragraphs
        const giftParagraph = document.createElement('p')
        giftParagraph.textContent = present.gift
        
        const forParagraph = document.createElement('p')
        forParagraph.textContent = present.for

        const priceParagraph = document.createElement('p')
        priceParagraph.textContent = present.price

        const divContent = document.createElement('div')
        divContent.classList.add('content')

        divContent.appendChild(giftParagraph)
        divContent.appendChild(forParagraph)
        divContent.appendChild(priceParagraph)

        divGiftSocks.appendChild(divContent)
        divGiftSocks.appendChild(divButtonsContainer)

        listGifts.appendChild(divGiftSocks)

        editButton.disabled = true

        changeButton.addEventListener('click', () =>{

            currentPresentId = present._id

            giftInputElement.value = present.gift
            forInputElement.value = present.for
            priceInputElement.value = present.price

            divGiftSocks.remove()

            editButton.disabled = false
            addButton.disabled = true
        })

        deleteButton.addEventListener('click', async () =>{
            const response = await fetch(`${baseUrl}/${present._id}`,{
                method:'DELETE',
            })

            divGiftSocks.remove()
        })

       





        
    }
}

loadButton.addEventListener('click', getPresents)

addButton.addEventListener('click', async() =>{

    const gift = giftInputElement.value
    const forFor = forInputElement.value
    const price = priceInputElement.value
    

    const response = await fetch(baseUrl,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({gift:gift,
        for:forFor,
        price:price}),
    })

    clearInputFields()

    await getPresents()

})

editButton.addEventListener('click', async () =>{

    const gift = giftInputElement.value
    const forFor = forInputElement.value
    const price = priceInputElement.value

    const response = await fetch(`${baseUrl}/${currentPresentId}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            _id:currentPresentId,
            gift:gift,
            for:forFor,
            price:price,
        })
    })

    await getPresents()

    editButton.disabled = true
    addButton.disabled = false

    clearInputFields()

    currentPresentId = null
})


function clearInputFields(){
    giftInputElement.value = ''
    forInputElement.value = ''
    priceInputElement.value = ''
}