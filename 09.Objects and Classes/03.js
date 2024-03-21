function toObject (text){
    const obj = JSON.parse(text)

    for (const entry of Object.entries(obj)) {
        [key,value] = entry
        console.log(`${key}: ${value}`)
        
    }
}

toObject('{"name": "George", "age": 40, "town": "Sofia"}')
toObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')