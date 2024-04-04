
function search() {
   const towns = Array.from(document.querySelectorAll('li'))
   const searchedText = document.getElementById('searchText').value

   let counter = 0
   
   for (const town of towns) {
      console.log(town.textContent)
      if (town.textContent.includes(searchedText)){
         
         town.style.fontWeight = 'bold'
         town.style.textDecoration = 'underline'
         counter += 1
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`
}