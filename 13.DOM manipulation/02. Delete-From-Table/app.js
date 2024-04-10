function deleteByEmail() {
    let deleted = false
    let result = document.getElementById('result')
    let rows = Array.from(document.querySelectorAll('tr'))
    const searchedEmail = document.querySelector('input[name="email"]').value
    console.log(searchedEmail)
    for (const row of rows) {
        if (row.children[1].textContent === searchedEmail){
            row.remove()
            deleted = true
        }
    }
    if (deleted){
        result.textContent = 'Deleted'
    } else {result.textContent = 'Not found.'}
}