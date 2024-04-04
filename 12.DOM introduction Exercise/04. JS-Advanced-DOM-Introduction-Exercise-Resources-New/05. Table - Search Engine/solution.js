function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let seachedWord = document.getElementById('searchField').value
      console.log(seachedWord)
      let rowsArray = Array.from(document.querySelectorAll('tr'))
      for (let index = 2; index < rowsArray.length; index++) {
         if (rowsArray[index].textContent.includes(seachedWord)){
            console.log(rowsArray[index].textContent);
            rowsArray[index].classList.add("select")
         }
      }
   }
}