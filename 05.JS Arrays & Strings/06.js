function solve(string, word){
    let count = 0
    const myArray = string.split(' ')
    for ( el of myArray){
        if (el === word){
            count+=1 
        }
    }console.log(count)
}

solve('This is a word and it also is a sentence',
'is'
)
solve('softuni is great place for learning new programming languages',
'softuni'
)