function orderPrice(product, quantity){
    const prices ={
        coffee : 1.50,
	    water : 1.00,
    	coke : 1.40,
    	snacks : 2.00,

    }
    console.log(`${(prices[product] * quantity).toFixed(2)}`)

}

orderPrice("water", 5)
orderPrice("coffee", 2)