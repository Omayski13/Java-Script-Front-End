function sumTable() {
    const table = document.querySelectorAll('table tr td:nth-child(even):not(#sum)')
    let result = 0
    
    for (const price of table) {
        result += Number(price.textContent)
    }
    document.getElementById('sum').textContent = result
    
}