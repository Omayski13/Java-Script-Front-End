function wordExtractor(text){
    array = text.split(" ")
    words = []
    for(let i = 0; i < array.length; i++){
        let searcedWord = array[i]
        let counter = 0
        for (const word of array) {
            if (searcedWord.toLowerCase() === word.toLowerCase()){counter +=1}
        }
    if (counter % 2 !== 0){
        if(!words.includes(searcedWord.toLowerCase())){
            words.push(searcedWord.toLowerCase())
        }
    }
    }
    console.log(words.join(" "))
}

wordExtractor('C# Php PHP PhP 3 5')