function solve(number){
    let sum = 0
    let numberString = number.toString()
    for (let i=0; i < numberString.lenght; i++ ){
        sum += Number(numberString[i]);

    }

    console.log(sum)
}

solve(245678)
solve(97561)
solve(543)