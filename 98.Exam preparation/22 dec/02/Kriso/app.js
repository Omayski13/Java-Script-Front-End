window.addEventListener("load", solve);

function solve(){
    //input fiels 
    const placeInputElement = document.getElementById('place')
    const actionInputElement = document.getElementById('action')
    const personInputElement = document.getElementById('person')
    //buttons
    const addButton = document.getElementById('add-btn')
    //other
    const tastList = document.getElementById('task-list')
    const doneList = document.getElementById('done-list')
    const formElement = document.querySelector('form')

    addButton.addEventListener('click',addEvent)

    function addEvent(){

        if (placeInputElement.value === '' ||
            actionInputElement.value === ''||
            personInputElement.value === ''){
                return;
            }
        
        //create buttons
        const editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', editEvent)
        
        const doneButton = document.createElement('button')
        doneButton.classList.add('done')
        doneButton.textContent = 'Done'
        doneButton.addEventListener('click', doneEvent)

        //create div clas buttons

        const divButtons = document.createElement('div')
        divButtons.classList.add('buttons')

        divButtons.appendChild(editButton)
        divButtons.appendChild(doneButton)

        //create paragraphs

        const placeParagraph = document.createElement('p')
        placeParagraph.textContent = `Place:${placeInputElement.value}`
        let placeText = placeInputElement.value

        const actionParagraph = document.createElement('p')
        actionParagraph.textContent = `Action:${actionInputElement.value}`
        let actionText = actionInputElement.value

        const personParagraph = document.createElement('p')
        personParagraph.textContent = `Person:${placeInputElement.value}`
        let personText = personInputElement.value

        //create article

        const article = document.createElement('article')
        article.appendChild(placeParagraph)
        article.appendChild(actionParagraph)
        article.appendChild(personParagraph)

        //create li clean task
        const liCleanTask = document.createElement('li')
        liCleanTask.classList.add('clean-task')
        
        liCleanTask.appendChild(article)
        liCleanTask.appendChild(divButtons)

        // atach li clean task to dom
        tastList.appendChild(liCleanTask)

        formElement.reset()

        function editEvent(){
            actionInputElement.value = actionText
            placeInputElement.value = placeText
            personInputElement.value = personText
            tastList.removeChild(liCleanTask)
        }

        function doneEvent(){
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', deleteEvent)

            liCleanTask.removeChild(divButtons)
            liCleanTask.appendChild(deleteButton)
            doneList.appendChild(liCleanTask)
            tastList.removeChild(liCleanTask)

            function deleteEvent(){
                doneList.removeChild(liCleanTask)
            }



        }

    }

        
}