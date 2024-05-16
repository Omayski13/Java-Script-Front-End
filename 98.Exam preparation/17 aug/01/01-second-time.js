function astro(input){
    let astronauts = []
    let n = Number(input[0])
    let currentIndex = 1
    
    while(currentIndex <= n){
        const[name,oxygen,energy] = input[currentIndex].split(' ');
        astronauts.push({name,oxygen,energy});
        currentIndex++;
    }

    

    while (input[currentIndex] !== 'End'){
        let splittedAction = input[currentIndex].split(' - ')
        let action = splittedAction[0]
        let name = findAstrounat(splittedAction[1])
        let amount = Number(splittedAction[2])
        if (action === 'Explore'){
            let energy = Number(name.energy)
            if (energy >= amount){
                name.energy -= amount
                console.log(`${name.name} has successfully explored a new area and now has ${name.energy} energy!`)
            } else {
                console.log(`${name.name} does not have enough energy to explore!`)
            }
        }

        else if( action === 'Refuel'){
            let energy = Number(name.energy)
            let recoveredEnergy = 0
            if (energy + amount <= 200){
                recoveredEnergy = amount
                energy += amount
                name.energy = energy
            } else{
                recoveredEnergy = 200 - name.energy
                name.energy = 200
            }
            console.log(`${name.name} refueled their energy by ${recoveredEnergy}!`)
        }

        else if (action === 'Breathe'){
            let oxygen = Number(name.oxygen)
            let recoveredOxygen = 0
            if(oxygen + amount <= 100){
                oxygen += amount
                name.oxygen = oxygen
                recoveredOxygen = amount
            } else {
                recoveredOxygen = 100 - name.oxygen
                name.oxygen = 100
            }
            console.log(`${name.name} took a breath and recovered ${recoveredOxygen} oxygen!`)
        }

        }

        currentIndex++;

        function findAstrounat(name){
            return astronauts.find (astronaut => astronaut.name === name)
    }

    

}

astro([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']
)