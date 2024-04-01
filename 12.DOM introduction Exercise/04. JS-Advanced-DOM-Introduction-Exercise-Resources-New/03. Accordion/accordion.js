function toggle() {
    const extraText = document.getElementById('extra')
    const buttonText = document.getElementsByClassName('button')[0]
    console.log(buttonText.textContent)
    if(extraText.style.display === 'none'){
        extraText.style.display = 'block'
        buttonText.textContent = 'Less'
    } else {
        extraText.style.display = 'none'
        buttonText.textContent = 'More'
    }
}