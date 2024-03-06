function solve(text){
    array = text.split(' ')
    specialWords = []
    isSpecialWord = true

    let RegExp = /^[a-zA-Z]+$/


    function isLetter(c) {
        return RegExp.test(c);
      }

    

    for (el of array){
        if (el[0] === '#' && el.length > 1){
            for (let i = 0; i < el.length; i++){
                if (isLetter(el[i]) === false && el[i] !== '#'){
                   isSpecialWord = false
                }

            }
            if (isSpecialWord === true){
                console.log(el.slice(1))
                }   
        }
    }
}

solve('#special  word in #socialMedia')
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')


