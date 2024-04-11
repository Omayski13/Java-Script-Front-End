function attachGradientEvents() {
    let gradientElem = document.getElementById('gradient')
    gradientElem.addEventListener('mousemove', mouseOn)
    gradientElem.addEventListener('mouseout', mouseRemove)

    function mouseOn(e){
        let power = e.offsetX / (e.target.clientWidth -1)
        power = Math.trunc(power * 100)
        document.getElementById('result').textContent = `${power}%`

    }

    function mouseRemove(e){
        document.getElementById('result').textContent = ''

    }

}