function addItem() {
    
    let newLi = document.createElement('li')
    let a = document.createElement('a')
    a.href = '#'
    a.textContent = '[Delete]'
    a.addEventListener('click', deleteButtonClick)

    const newRow = document.getElementById('newItemText').value
    newLi.textContent = newRow
    newLi.appendChild(a)
    
    let ul = document.getElementById('items')
    
    ul.appendChild(newLi)

    function deleteButtonClick(e) {
        e.currentTarget.parentNode.remove()
    }
}