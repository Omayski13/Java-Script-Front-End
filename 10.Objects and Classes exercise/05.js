function superheroes(array){
    heroes = []

    for (heroData of array){
        splittedHeroData = heroData.split(" / ")
        let heroName = splittedHeroData[0]
        let heroLevel = Number(splittedHeroData[1])
        let items = []

        for (let i = 2; i <= splittedHeroData.length; i++){
            items.push(splittedHeroData[i])
        }

        heroes.push({
            'name': heroName,
            'level': heroLevel,
            'items': items
        })

    }
    
    heroes.sort((a, b) => {
        return a.level - b.level
    })

    for (let hero of heroes) {
        console.log([`Hero: ${hero['Hero']}`, `level => ${hero['level']}`, `items => ${hero['Items']}`].join('\n'))
    }
}

superheroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )