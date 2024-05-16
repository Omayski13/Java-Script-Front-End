function race(input){
    let riders = [];
    const n = input[0];
    let currentIndex = 1;

    while(currentIndex <= n){
        const[name,fuel,pos]= input[currentIndex].split('|')
        riders.push({name,fuel,pos})
        currentIndex++;
    }

    while(input[currentIndex] !== 'Finish'){
        let splittedCommand = input[currentIndex].split(' - ')
        let command = splittedCommand[0]

        if (command === 'StopForFuel'){
            let rider = findRider(splittedCommand[1])
            let minFuel = splittedCommand[2]
            let newPos = splittedCommand[3]
            let fuel = Number(rider.fuel)
            if(fuel > minFuel){
                console.log(`${rider.name} does not need to stop for fuel!`)
            } else {
                rider.pos = newPos
                console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.pos}.`)
            }
        }

        else if (command === 'Overtaking'){
            let rider1 = findRider(splittedCommand[1])
            let rider2 = findRider(splittedCommand[2])
            let rider1Pos = Number(rider1.pos)
            let rider2Pos = Number(rider2.pos)
            if (rider1Pos < rider2Pos){
                rider1.pos = rider2Pos
                rider2.pos = rider1Pos
                console.log(`${rider1.name} overtook ${rider2.name}!`)
            }
        }

        else if (command === 'EngineFail'){
            let rider = findRider(splittedCommand[1])
            let index = riders.indexOf(rider)
            riders.splice(index,1)
            console.log(`${rider.name} is out of the race because of a technical issue, ${splittedCommand[2]} laps before the finish.`)
        }
        currentIndex++;
    }

    function findRider(name){
        return riders.find(rider => rider.name === name)
    }

    riders.forEach(rider => {
        console.log(`${rider.name}\n  Final position: ${rider.pos}`)
        
    });
}


race((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)

race((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)