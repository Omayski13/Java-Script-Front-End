function extractText() {
    result = []
    let textArea = document.getElementById('result')
    const documentItems = Array.from(document.querySelectorAll('ul li'))
    for (const item of documentItems) {
        result.push(item.textContent)
    }
    
    textArea.value = (result.join('\n'))

}