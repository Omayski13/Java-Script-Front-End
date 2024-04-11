function focused() {
    let fields = Array.from(document.querySelectorAll('div input'))

    for (const field of fields) {
        field.addEventListener('focus',onFocus)
        field.addEventListener('blur',offFocus)

        function onFocus(e){
            e.currentTarget.parentNode.className = 'focused'
        }

        function offFocus(e){
            e.currentTarget.parentNode.classList.remove('focused')
        }
        
    }
}