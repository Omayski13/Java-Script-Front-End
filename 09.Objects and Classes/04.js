function toJSON(name,lastName,hairColor){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let text = JSON.stringify(person)
    console.log(text)

}

toJSON('George', 'Jones', 'Brown')
toJSON('Peter', 'Smith', 'Blond')