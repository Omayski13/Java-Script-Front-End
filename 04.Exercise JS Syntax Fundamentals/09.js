function solve(fruit,weight,pricePerKilogram){
    const pricePerGram = pricePerKilogram / 1000
    let result = weight * pricePerGram
    console.log(`I need $${result.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)
solve('orange', 2500, 1.80)