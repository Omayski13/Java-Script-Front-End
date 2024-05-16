window.addEventListener("load", solve);

function solve(){
    let formElement = document.querySelector("form");
    const inputPlace = document.getElementById('place')
    const inputAction = document.getElementById('action')
    const inputPerson = document.getElementById('person')
    const addButton = document.getElementById('add-btn')
    addButton.addEventListener('click',addEvent)

    function addEvent(){

        if (inputPlace.value === '' || 
        inputAction.value === ''|| 
        inputPerson.value === ''){
            return
        }

        const taskList = document.getElementById('task-list')
        const doneList = document.getElementById('done-list')
    

        //create li with id 'clean-task'
        let liCleanTask = document.createElement('li')
        liCleanTask.classList.add('clean-task')

        //create article
        let article = document.createElement('article')

        //create paragraphs
        let placePara = document.createElement('p')
        placePara.textContent = `Place:${inputPlace.value}`
        let placeText = inputPlace.value

        let actionPara = document.createElement('p')
        actionPara.textContent = `Action:${inputAction.value}`
        let actionText = inputAction.value

        let personPara = document.createElement('p')
        personPara.textContent = `Person:${inputPerson.value}`
        let personText = inputPerson.value

        //create div with class buttons
        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons')

        //create buttons
        let editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', EditEvent)

        let doneButton = document.createElement('button')
        doneButton.classList.add('done')
        doneButton.textContent = 'Done'
        doneButton.addEventListener('click',doneEvent)

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', deleteEvent)

        taskList.appendChild(liCleanTask)
        liCleanTask.appendChild(article)
        liCleanTask.appendChild(buttonsDiv)

        article.appendChild(placePara)
        article.appendChild(actionPara)
        article.appendChild(personPara)

        buttonsDiv.appendChild(editButton)
        buttonsDiv.appendChild(doneButton)

        formElement.reset();

        
        function EditEvent(){
            inputAction.value = actionText
            inputPlace.value = placeText
            inputPerson.value = personText
            taskList.removeChild(liCleanTask)
            addButton.disabled=false
        }

        function doneEvent(){
            doneList.appendChild(liCleanTask)
            buttonsDiv.removeChild(editButton)
            buttonsDiv.removeChild(doneButton)
            buttonsDiv.appendChild(deleteButton)
            addButton.disabled=false
            
        }

        function deleteEvent(){
            doneList.removeChild(liCleanTask)
        }
    }
}