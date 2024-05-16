function adventure(input){
    let n = Number(input[0])
    let currentIndex = 1
    let heroes = []

    while(currentIndex <= n){
        const [name,hp,bullets] = input[currentIndex].split(' ')
        heroes.push({name, hp, bullets})

        currentIndex++;
    }

    while(input[currentIndex] !== 'Ride Off Into Sunset'){
        let splittedAction = input[currentIndex].split(' - ')
        let action = splittedAction[0]
        let character = findCharacter(splittedAction[1])

        if(action === 'FireShot'){
            let target = splittedAction[2]
            let currentBullets = Number(character.bullets)
            if(currentBullets > 0){
                currentBullets -= 1;
                character.bullets = currentBullets
                console.log(`${character.name} has successfully hit ${target} and now has ${character.bullets} bullets!`)
            } else {
                console.log(`${character.name} doesn't have enough bullets to shoot at ${target}!`)
            }
        }

        if (action === 'TakeHit'){
            let damage = Number(splittedAction[2])
            let attacker = splittedAction[3]
            let currentHp = Number(character.hp)
            if((currentHp - damage) > 0){
                currentHp -= damage
                character.hp = currentHp
                console.log(`${character.name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`)
            } else{
                let indexOfCurrentHero = heroes.indexOf(character)
                console.log(`${character.name} was gunned down by ${attacker}!`)
                heroes.splice(indexOfCurrentHero,1)
            }
        }

        if (action === 'Reload'){
            let currentBullets = Number(character.bullets)
            let reloadedBullets = 6 - currentBullets
            if(currentBullets < 6){
                character.bullets = 6
                console.log(`${character.name} reloaded ${reloadedBullets} bullets!`)
            } else {
                console.log(`${character.name}'s pistol is fully loaded!`)
            }
        }

        if (action === 'PatchUp'){
            let amount = Number(splittedAction[2])
            let currentHp = Number(character.hp)
            let healedHp = 100 - currentHp

            if (currentHp === 100){
                console.log(`${character.name} is in full health!`)
            } else {
                if (currentHp + amount <= 100){
                    healedHp = amount
                }
                character.hp += healedHp 
                console.log(`${character.name} patched up and recovered ${healedHp} HP!`)
            }

        }

        currentIndex++;
    }

    heroes.forEach(character => {
        console.log(`${character.name}\n HP: ${character.hp}\n Bullets: ${character.bullets}`)
    });


    function findCharacter(name){
        return heroes.find(character => character.name === name);  
    }

}


adventure((["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])
)