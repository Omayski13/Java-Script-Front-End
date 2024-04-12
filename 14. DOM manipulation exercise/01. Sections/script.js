function create(words) {
   let mainDiv = document.getElementById('content')

   for (const word of words) {

      let paragraph = document.createElement('p')
      let div = document.createElement('div')

      paragraph.textContent = word
      paragraph.style.display = 'none'

      div.appendChild(paragraph)
      mainDiv.appendChild(div)

      div.addEventListener('click', () =>{
         paragraph.style.display = ''
      })
       
   }
}