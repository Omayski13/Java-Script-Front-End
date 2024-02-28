function solve(word, start,end){
    const newWord = word.slice(start, end + 1)
    console.log(newWord)
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)