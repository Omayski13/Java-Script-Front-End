window.addEventListener("load", solve);

function solve() {
  let formElements = document.querySelector('form');
  const inputStudent = document.getElementById('student');
  const inputUniversity = document.getElementById('university');
  const inputScore = document.getElementById('score');
  const nextButton = document.getElementById('next-btn');
  nextButton.addEventListener('click',nextEvent);

  function nextEvent(){
    const previewList = document.getElementById('preview-list');
    const candidatesList = document.getElementById('candidates-list');

    if (inputStudent === ''||
      inputUniversity === '' ||
      inputScore === ''){ 
        return;
      }

    // create li wiht class 'aplication'
    let liAplication = document.createElement('li')
    liAplication.classList.add('application')

    // create article
    let article = document.createElement('article')

    // create h4 
    let nameH4Element = document.createElement('h4')
    nameH4Element.textContent = inputStudent.value
    let textStudent = inputStudent.value

    // create paragraphs
    let universityParagraph = document.createElement('p')
    universityParagraph.textContent = `University: ${inputUniversity.value}`
    let universityText = inputUniversity.value


    let scoreParagraph = document.createElement('p')
    scoreParagraph.textContent = `Score: ${inputScore.value}`
    let scoreText = inputScore.value

    //create buttons

    let editButton = document.createElement('button')
    editButton.classList.add('action-btn','edit')
    editButton.textContent = 'edit'
    editButton.addEventListener('click',editEvent)

    let applyButton = document.createElement('button')
    applyButton.classList.add('action-btn','apply')
    applyButton.textContent = 'apply'
    applyButton.addEventListener('click',applyEvent)

    previewList.appendChild(liAplication)
    
    liAplication.appendChild(article)
    article.appendChild(nameH4Element)
    article.appendChild(universityParagraph)
    article.appendChild(scoreParagraph)

    liAplication.appendChild(editButton)
    liAplication.appendChild(applyButton)

    formElements.reset()
    nextButton.disabled=true

    function editEvent(){
      previewList.removeChild(liAplication)
      inputStudent.value = textStudent
      inputUniversity.value = universityText
      inputScore.value = scoreText
      nextButton.disabled=false
    }

    function applyEvent(){
      previewList.removeChild(liAplication)
      candidatesList.appendChild(liAplication)
      
      liAplication.removeChild(editButton)
      liAplication.removeChild(applyButton)
      nextButton.disabled=false
    }

  }
  
  }
  