

// function solve (num1,num2,num3){

//     let result = 0

//     if (num1 > num2 && num1 >num3){
//         result = num1
//     }else if (num2 > num1 && num2 > num3){
//         result = num2
//     } else if (num3 > num1 && num3 > num2){
//         result = num3
//     }
//     console.log(`The largest number is ${result}.`)
// }




// function solve (num1,num2,num3){

//     let array = [num1,num2,num3]
//     let result = Number.MIN_SAFE_INTEGER

//     for (let i = 0; i < array.length; i++){
//         if (array[i] > result){
//             result = array[i]
//         } 
//     }
//     console.log(result)

// }






function solve (num1, num2, num3){

    let array = [num2,num1,num3]
    let result = Number.MIN_SAFE_INTEGER

    for (let i =0 ; i < array.length; i++){
        if (array[i] > result){
            result = array[i]
        }
    }
    console.log(result)
}



solve(5, -3, 16)
solve(-3, -5, -22.5)