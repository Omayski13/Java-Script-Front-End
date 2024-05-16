function astro(input){
    let astronauts = [];
    let n = Number(input[0]);
    let currentIndex = 1;

    while(currentIndex <= n){
        const[name,oxygen,energy] = input[currentIndex].split(' ')
        astronauts.push({name,oxygen,energy});
        currentIndex++;
    }
    
    while(input[currentIndex] !== 'End'){
        let splittedCommand = input[currentIndex].split(' - ')
        
        let command = splittedCommand[0]
        let astronaut = findAstrounat(splittedCommand[1])
        let amount = Number(splittedCommand[2])
        

        if (command === 'Explore'){
            let energy = Number(astronaut.energy)
            if (energy < amount){
                console.log(`${astronaut.name} does not have enough energy to explore!`)
            } else {
                astronaut.energy -= amount
                console.log(`${astronaut.name} has successfully explored a new area and now has ${astronaut.energy} energy!`)
            }
        }

        else if (command === 'Refuel'){
            let energy = Number(astronaut.energy)
            let recoveredEnergy = 0
            if (energy + amount <= 200){
                recoveredEnergy = amount
                energy += amount
                astronaut.energy = energy
            } else{
                recoveredEnergy = 200 - astronaut.energy
                astronaut.energy = 200
            }
            console.log(`${astronaut.name} refueled their energy by ${recoveredEnergy}!`)
        }

        else if (command === 'Breathe'){
            let oxygen = Number(astronaut.oxygen)
            let recoveredOxygen = 0
            if (oxygen + amount <= 100){
                recoveredOxygen = amount
                oxygen += amount
                astronaut.oxygen = oxygen
            } else{
                recoveredOxygen = 100 - oxygen
                astronaut.oxygen = 100
            }
            console.log(`${astronaut.name} took a breath and recovered ${recoveredOxygen} oxygen!`)
        }


        currentIndex++;
    }

    function findAstrounat(name){
        return astronauts.find (astronaut => astronaut.name === name)
    };

    astronauts.forEach(astronaut => {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`)  
    });

}


astro([
    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'End'
])


// astro([  '3',
// 'John 50 120',
// 'Kate 80 180',
// 'Rob 70 150',
// 'Explore - John - 50',
// 'Refuel - Kate - 30',
// 'Breathe - Rob - 20',
// 'End']
// )