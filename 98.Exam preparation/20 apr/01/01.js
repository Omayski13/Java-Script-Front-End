function race(input){
    
    let horses = (input[0].split('|')).reverse();
    let currentIndex = 1;

    while(input[currentIndex] !== 'Finish'){
        let splittedCommand = input[currentIndex].split(' ')
        let command = splittedCommand[0]

        if (command === 'Retake'){
            let horse1 = splittedCommand[1]
            let horse2 = splittedCommand[2]
            let horse1pos = horses.indexOf(horse1) 
            let horse2pos = horses.indexOf(horse2) 
            if (horse1pos > horse2pos){
                // horses.splice(horse1pos,1)
                // horses.splice(horse2pos,0, horse1)
                horses[horse1pos] = horse2
                horses[horse2pos] = horse1
                console.log(`${horse1} retakes ${horse2}.`)
            }
        }

        else if (command === 'Trouble'){
            let horse = splittedCommand[1]
            let horsePos = horses.indexOf(horse)
            let horse2 = horses[horsePos+1]
            if (horsePos != horses.length - 1){
                horses[horsePos] = horse2
                horses[horsePos+1] = horse
                console.log(`Trouble for ${horse} - drops one position.`)
            }
            
        }

        else if (command === 'Rage'){
            let horse = splittedCommand[1]
            let horsePos = horses.indexOf(horse)
            if(horsePos === 1){
                horses.splice(horsePos,1)
                horses.splice(horsePos - 2, 0 ,horse)
            }
            if(horsePos > 1){
                horses.splice(horsePos,1)
                horses.splice(horsePos - 2, 0 ,horse)
                console.log(`${horse} rages 2 positions ahead.`)
            }
            
            
        }

        else if (command === 'Miracle'){
            let lastHorse = horses[horses.length - 1]
            let lengthHorses = horses.length
            horses.splice(lengthHorses - 1,1)
            horses.splice(0, 0 ,lastHorse)
            console.log(`What a miracle - ${lastHorse} becomes first.`) 
        }

        currentIndex++;
    }
    let winner = horses[0]
    let reversedHorses = horses.reverse()
    console.log(reversedHorses.join('->'))
    console.log(`The winner is: ${winner}`)
}



race((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
)
