function solve(array){
    const userName = array.shift()
    let counter = 4
    for (currentUserName of array){
        counter -= 1
        currentUserName = currentUserName.split('').reverse().join('')
        if (userName === currentUserName){
            console.log(`User ${userName} logged in.`)
            break} else{
                if ( counter === 0){
                    console.log(`User ${userName} blocked!`)
                    break}
                console.log("Incorrect password. Try again.")
            }
        
        
    }
}

solve(['momo','omom'])
solve(['Acer','login','go','let me in','recA'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])