window.addEventListener("load", solve);

function solve() {
  //input field
  const nameInputElement = document.getElementById('name')  
  const phoneInputElement = document.getElementById('phone')  
  const categoryInputElement = document.getElementById('category')
  //buttons 
  const addButton = document.getElementById('add-btn')
  const checkList = document.getElementById('check-list')
  const contactList = document.getElementById('contact-list')

  addButton.addEventListener('click',addEvent);
  

  function addEvent(){

    if (nameInputElement.value === '' ||
        phoneInputElement.value === ''||
        categoryInputElement.value === ''){
            return;
        }

    //create buttons
    const editButton = document.createElement('button')
    editButton.classList.add('edit-btn')
    editButton.addEventListener('click',editEvent)
    
    const saveButton = document.createElement('button')
    saveButton.classList.add('save-btn')
    saveButton.addEventListener('click',saveEvent)

    //create div buttons
    const divButtons = document.createElement('div')
    divButtons.classList.add('buttons')

    // atach buttons to div
    divButtons.appendChild(editButton)
    divButtons.appendChild(saveButton)

    //create parag
    const nameParagraph = document.createElement('p')
    nameParagraph.textContent = `name:${nameInputElement.value}`
    let nameText = nameInputElement.value

    const phoneParagraph = document.createElement('p')
    phoneParagraph.textContent = `phone:${phoneInputElement.value}`
    let phoneText = phoneInputElement.value

    const categoryParagraph = document.createElement('p')
    categoryParagraph.textContent = `category:${categoryInputElement.value}`
    let categoryText = categoryInputElement.value
    
    // create article
    const article = document.createElement('article')

    //atach para to article
    article.appendChild(nameParagraph)
    article.appendChild(phoneParagraph)
    article.appendChild(categoryParagraph)

    //create li

    const li = document.createElement('li')

    //atach div buttons and artcile to li

    li.appendChild(article)
    li.appendChild(divButtons)

    //atach li to dom

    checkList.appendChild(li)

    //clear input fields

    clearInputData()

    function editEvent(){
      nameInputElement.value = nameText
      phoneInputElement.value = phoneText
      categoryInputElement.value = categoryText
      checkList.removeChild(li)
    }

    function saveEvent(){
      //create delete button
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('del-btn')
      deleteButton.addEventListener('click',deleteEvent)


      // li.removeChild(divButtons)
      // li.appendChild(deleteButton)

      li.removeChild(divButtons)
      li.appendChild(deleteButton)

      contactList.appendChild(li)
      checkList.removeChild(li)

      function deleteEvent(){
        contactList.removeChild(li)
      }

    }
  }

  function clearInputData(){
    nameInputElement.value = ''
    phoneInputElement.value = ''
    categoryInputElement.value = ''

  }
  
  }
  