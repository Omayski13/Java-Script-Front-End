function solve (number){
    let textNumber = number.toString()
    let result = 0
    let same = true
    for (let i = 0; i < textNumber.length; i++){
        result += Number(textNumber[i])
        if(textNumber[0] !== textNumber[i]){
            same = false 
        }
    }
    console.log(same)
    console.log(result)
}

solve(2222222)
solve(1234)