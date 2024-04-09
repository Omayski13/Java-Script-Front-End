function addItem() {
    
    let newLi = document.createElement('li')
    const newRow = document.getElementById('newItemText').value
    newLi.textContent = newRow
    
    let ul = document.getElementById('items')
    
    ul.appendChild(newLi)

}