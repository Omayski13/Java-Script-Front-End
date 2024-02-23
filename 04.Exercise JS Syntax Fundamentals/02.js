function solve (people,type,day){
    let pricePerPerson = 0
    let result = 0
    if (type === 'Students'){
        if (day === 'Friday'){
            pricePerPerson = 8.45
        }else if (day ==='Saturday'){
            pricePerPerson = 9.80
        }else if (day === 'Sunday'){
            pricePerPerson = 10.46
        }
    }else if(type === 'Business'){
        if (day === 'Friday'){
            pricePerPerson = 10.90
        }else if (day ==='Saturday'){
            pricePerPerson = 15.60
        }else if (day === 'Sunday'){
            pricePerPerson = 16
        }
    }else if(type === 'Regular'){
        if (day === 'Friday'){
            pricePerPerson = 15
        }else if (day ==='Saturday'){
            pricePerPerson = 20
        }else if (day === 'Sunday'){
            pricePerPerson = 22.50
        }
    }
    result = people*pricePerPerson

    if(type === 'Students' && people >=30){
        result *= 0.85
    }else if (type === 'Business' && people >=100){
        result -= pricePerPerson*10
    }else if (type === 'Business' && people >=10 && people <= 20){
        result *= 0.95
    }
    console.log(`Total price: ${result.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday"
    )
solve(40,
    "Regular",
    "Saturday"
    )
