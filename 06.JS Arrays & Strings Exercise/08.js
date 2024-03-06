function solve(text){
    array = []

        for (let i = 1; i < text.length +1; i++){
            if(i === text.length){
                array.push(text)
                break
            }
            if (text[i] === text[i].toUpperCase()){
            let newWord = text.slice(0, i)
            array.push(newWord)
            text = text.slice(i)
            i = 1
            continue
            }
        
        }
    console.log(array.join(', '))

}   



solve('Hold')
solve('ThisIsSoAnnoyingToDo')
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')