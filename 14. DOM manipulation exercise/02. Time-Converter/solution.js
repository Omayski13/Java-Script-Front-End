function attachEventsListeners() {

    let days = document.getElementById('days');
    let daysButton = document.getElementById('daysBtn');

    let hours = document.getElementById('hours');
    let hoursButton = document.getElementById('hoursBtn');

    let minutes = document.getElementById('minutes');
    let minutesButton = document.getElementById('minutesBtn');

    let seconds = document.getElementById('seconds');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', daysConvert)
    hoursButton.addEventListener('click', hoursConvert)
    minutesButton.addEventListener('click', minutesConvert)
    secondsButton.addEventListener('click', secondsConvert)

    function daysConvert(e){
        hours.value = days.value * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }

    function hoursConvert(e){
        days.value = hours.value / 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }

    function minutesConvert(e){
        hours.value = minutes.value / 60
        days.value = hours.value / 24
        seconds.value = minutes.value * 60
    }

    function secondsConvert(e){
        minutes.value = seconds.value / 60
        hours.value = minutes.value / 60
        days.value = hours.value / 24
    }
}