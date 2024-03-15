function sumOddAndEvens(number){
    strNum = number.toString()
    let odd = 0
    let even = 0
    
    for(digit of strNum){
        num = Number(digit)

        if (num % 2 == 0){
            even += num
        } else {odd += num}
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

sumOddAndEvens(1000435)
sumOddAndEvens(3495892137259234)
