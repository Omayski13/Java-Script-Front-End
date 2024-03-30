function solve() {
  const text = document.getElementById('text').value
  const convention = document.getElementById('naming-convention').value
  textAsArray = text.split(' ')
  let result = ''
  switch(convention){
    case 'Pascal Case':
      for (let word of textAsArray) {
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        result += word 
        console.log(result)
        }
      break;
    case 'Camel Case':
      for (let word of textAsArray) {
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        result += word 
        result = result[0].toLowerCase() + result.slice(1)
        console.log(result)
        }
      break;
    default:
      result = 'Error!'
      break;
  }
  document.getElementById('result').textContent = result
}