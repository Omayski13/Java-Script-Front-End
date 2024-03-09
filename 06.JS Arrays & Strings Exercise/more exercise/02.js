function solve(array){
    let days = 0
    let money = 0
    let firstPurchased = 0
    let bitcoins = 0



    while (array.length !== 0){
        days += 1
        let minedGold = array.shift()
        if(days % 3 ===0){
            minedGold *= 0.7
        }
        money += minedGold * 67.51
        dayEarnedBitcoins = Math.floor(money / 11949.16)
        if (bitcoins ===0 && money >= 11949.16){firstPurchased = days}
        money -= dayEarnedBitcoins * 11949.16
        bitcoins += dayEarnedBitcoins
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurchased}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
    
}


solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])
