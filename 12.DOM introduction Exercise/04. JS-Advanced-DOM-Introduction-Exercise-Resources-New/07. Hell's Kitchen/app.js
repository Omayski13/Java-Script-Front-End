function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = {}
      const inputText = document.querySelector('textarea').value
      let ArrayinputText = inputText.split('"')

      function removeItemAll(ArrayinputText, value) {
         let i = 0;
         while (i < ArrayinputText.length) {
           if (ArrayinputText[i] === value) {
            ArrayinputText.splice(i, 1);
           } else {
             ++i;
           }
         }
         return ArrayinputText;
      }
      removeItemAll(ArrayinputText, ']')
      removeItemAll(ArrayinputText, '[')
      removeItemAll(ArrayinputText, ',')
      
      for (const elem of ArrayinputText) {
         console.log(elem)
         const restaurant = elem.split('-')[0]
         restaurants[restaurant] = elem.split('-')[1]
         const workersInfomation = (elem.split('-')[1]).split(' ')
         console.log(workersInfomation)

         let averageSalary = 0
         let bigestSalary = 0
         let workers = []
         for (const workerInfo of workersInformation) {
            removeItemAll(ArrayinputText, '')
            const worker = workerInfo[0]
               
            }

            
         }
         
      }

      
   }
}