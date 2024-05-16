window.addEventListener("load", solve);

function solve() {
    const inputPlayerName = document.getElementById('player')
    const inputScore = document.getElementById('score')
    const inputRound = document.getElementById('round')
    const addButton = document.getElementById('add-btn')
    addButton.addEventListener('click', addEvent)
    
    

    function addEvent(){

      const clearButton = document.querySelector('.clear')
      clearButton.addEventListener('click',clearEvent)
      
      const sureList = document.getElementById('sure-list')
      const scoreboardList = document.getElementById('scoreboard-list')

      // create li with class "dart-items"
      let liDartItems = document.createElement('li')
      liDartItems.classList.add('dart-item')

      //create article
      let articleElement = document.createElement('article')

      //create paragraphs
      let playerParagraph = document.createElement('p')
      playerParagraph.textContent = inputPlayerName.value
      let playerText = inputPlayerName.value

      let scoreParagraph = document.createElement('p')
      scoreParagraph.textContent = `Score: ${inputScore.value}`
      let scoreText = inputScore.value

      let roundParagraph = document.createElement('p')
      roundParagraph.textContent = `Round: ${inputRound.value}`
      let roundText = inputRound.value
      
      //create buttons
      let editButton = document.createElement('button')
      editButton.classList.add('btn','edit')
      editButton.textContent = 'edit'
      editButton.addEventListener('click',editEvent)

      let okButton = document.createElement('button')
      okButton.classList.add('btn','ok')
      okButton.textContent = 'ok'
      okButton.addEventListener('click', okEvent)

      sureList.appendChild(liDartItems)
      liDartItems.appendChild(articleElement)
      articleElement.appendChild(playerParagraph)
      articleElement.appendChild(scoreParagraph)
      articleElement.appendChild(roundParagraph)

      liDartItems.appendChild(editButton)
      liDartItems.appendChild(okButton)

      inputPlayerName.value = ''
      inputScore.value = ''
      inputRound.value = ''
      addButton.disabled=true

      function editEvent(){
        sureList.removeChild(liDartItems)
        inputPlayerName.value = playerText
        inputScore.value = scoreText
        inputRound.value = roundText

        addButton.disabled=false
      }

      function okEvent(){
        addButton.disabled=false
        scoreboardList.appendChild(liDartItems)
        liDartItems.removeChild(okButton)
        liDartItems.removeChild(editButton)
        sureList.removeChild(liDartItems)
      }

      function clearEvent(){
        location.reload()
      }

    }
  }
  