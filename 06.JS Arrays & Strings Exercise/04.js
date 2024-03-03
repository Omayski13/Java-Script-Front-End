function solve(array){
    let newArray = []

    while(array.length > 0){
        let smallest = Number.MAX_SAFE_INTEGER
        for (num of array){
            if(num < smallest){
                smallest = num
            }
        }
        newArray.push(smallest)
        indexOfSmallest = array.indexOf(smallest)
        array.splice(indexOfSmallest,1)
        
        if (array.length === 0){
            break
        } 

        let biggest = Number.MIN_SAFE_INTEGER
        for (num of array){
            if(num > biggest){
                biggest = num
            }
        }
        newArray.push(biggest)
        indexOfBiggest = array.indexOf(biggest)
        array.splice(indexOfBiggest,1)     
    }
    return newArray
}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])