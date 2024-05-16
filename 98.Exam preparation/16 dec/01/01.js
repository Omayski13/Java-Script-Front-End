function cafetaria(input){
    let baristas = [];
    const n = Number(input[0]);
    let currentIndex = 1

    while (currentIndex <= n) {
        const[name, shift, coffeeTypes] = input[currentIndex].split(' ')
        baristas.push({name,shift,coffeeTypes: coffeeTypes.split(',')})
        currentIndex ++;
    }

    while (input[currentIndex] !== 'Closed'){
        splittedCommand = input[currentIndex].split(' / ')
        const command = splittedCommand[0]
        const name = splittedCommand[1]
        if (command === 'Prepare'){
            let shift = splittedCommand[2]
            let coffeeType = splittedCommand[3]
            let barista = findBarista(name)
            if(barista.shift !== shift || (!barista.coffeeTypes.includes(coffeeType))){
                console.log(`${barista.name} is not available to prepare a ${coffeeType}.`)
            } else{
                console.log(`${barista.name} has prepared a ${coffeeType} for you!`)
            }
        }
        else if (command === 'Change Shift'){
            let newShift = splittedCommand[2]
            let barista = findBarista(name)
            barista.shift = newShift
            console.log(`${barista.name} has updated his shift to: ${newShift}`)

        }
        else if (command === 'Learn'){
            let newCoffeeType = splittedCommand[2]
            let barista = findBarista(name)
            if(barista.coffeeTypes.includes(newCoffeeType)){
                console.log(`${barista.name} knows how to make ${newCoffeeType}.`)
            } else{
                barista.coffeeTypes.push(newCoffeeType)
                console.log(`${barista.name} has learned a new coffee type: ${newCoffeeType}.`)
            }

        }
        currentIndex ++
    }
    function findBarista(name){
        return baristas.find(barista => barista.name === name);
    }

    baristas.forEach(barista =>{
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`)
    })

}

cafetaria([
    '3',
      'Alice night Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    )