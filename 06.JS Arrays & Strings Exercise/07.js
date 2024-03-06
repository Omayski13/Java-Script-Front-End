function solve (word, text){
    text = text.toLowerCase()
    let found = false
    array = text.split(' ')
    for ( el of array){
        if (el === word){
            found = true
        }
    }
    if (found === true){
    console.log(word)
    } else{console.log(`${word} not found!`)}
}

solve('javascript',
'JavaScript is the best programming language'
)

solve('python',
'JavaScript is the best programming language'
)