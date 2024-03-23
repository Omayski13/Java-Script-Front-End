function storeProvion(stock,ordered){
    let store = {}

    for (let i = 0; i < stock.length; i+=2) {
        store[stock[i]] = Number(stock[i+1]) 
    }

    for (let i = 0; i < ordered.length; i+=2) {
        let product = ordered[i]
        let quantity = Number(ordered[i+1])

        if (store.hasOwnProperty(product)){
            store[product] += quantity
                } else {
            store[product] = quantity
        }  
    }

    for (const data of Object.entries(store)) {
        console.log(`${data[0]} -> ${data[1]}`)
    }
}



storeProvion([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )