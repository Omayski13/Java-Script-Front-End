function counterWords(array){
    let words = []
    let searchedWords = array.shift()
    searchedWords = searchedWords.split(" ")
    for(let i =0 ; i < searchedWords.length; i++){
        let searcWord = searchedWords[i]
        let counter = 0
        for (const word of array) {
            if (word === searcWord){counter += 1}
        }
        words.push({
            'word': searcWord,
            'times': counter
        })

        words.sort((a,b) => {
            return b.times - a.times
        })
    }
    for (const word of words) {
        console.log(`${word.word} - ${word.times}`)  
    }
}


counterWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
counterWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )