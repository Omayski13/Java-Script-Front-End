function solve(speed, area){
    let status = ''
    let overLimit = false
    let difference = 0
    let limit = 0

    if (area === 'motorway'){
        limit = 130
        if (speed > limit){
            overLimit = true
            difference = speed - limit
        }
    }else if (area === 'interstate'){
        limit = 90
        if (speed > limit){
            overLimit = true
            difference = speed - limit
        }
    }else if (area === 'city'){
        limit = 50
        if (speed > limit){
            overLimit = true
            difference = speed - limit
        }
    }else if (area === 'residential'){
        limit = 20
        if (speed > limit){
            overLimit = true
            difference = speed - limit
        }
    }

    if (overLimit){
        if (difference <= 20 ){
            status = 'speeding'
        } else if (difference <= 40){
            status = 'excessive speeding'
        }else if(difference > 40){
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }else{
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
}


// solve(40, 'city')
solve(21, 'residential')
// solve(120, 'interstate')