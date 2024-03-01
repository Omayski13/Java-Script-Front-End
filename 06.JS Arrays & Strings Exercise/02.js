function solve (array , num){
    let newArray = []
    newArray.push(array[0])
    let counter = 0
    for (el of array){
        if( counter === num){
            newArray.push(el)
            counter = 1
        }else{counter +=1}
    }
    return newArray

}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
// solve()
// solve()