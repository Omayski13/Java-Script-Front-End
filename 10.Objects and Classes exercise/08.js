function piccolo(array){
    let carNumbers = []
    for (const data of array) {
        let [direction,number] = data.split(", ")
        let numWithNumbers = Number(number.slice(2,6))
    

        if (direction == 'IN'){
            carNumbers.push({
                'fullNumber': number,
                'onlyNumbers': numWithNumbers
            })
        } else if (direction == 'OUT'){
            for (const currentNumber of carNumbers) {
                if(currentNumber.fullNumber === number){
                    let index = carNumbers.indexOf(currentNumber)
                    carNumbers.splice(index,1)
                }            
            }
        }   
    }
    carNumbers.sort((a,b) => {
        return a.onlyNumbers - b.onlyNumbers
    })

    if (carNumbers.length === 0){
        console.log("Parking Lot is Empty")
    }else {
        for (const number of carNumbers) {
            console.log(number.fullNumber)
        }
    }
}

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']
// )

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)