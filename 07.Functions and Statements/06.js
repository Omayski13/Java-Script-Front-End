function signCheck(num1,num2,num3){
    result = num1*num2*num3
    function isNegative(result){
        return result < 0
    }

    let negative = isNegative(result)

    if (negative){
        console.log("Negative")
    } else {console.log("Positive")}
}


// signCheck( 5,
//     12,
//    -15
//    )
signCheck(-6,
    -12,
     14
    )
signCheck(-1,
    -2,
    -3
    )