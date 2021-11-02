function createReceipt(basket) { 

    let totalCart = 0
    const cart = basket.forEach(item => {
        totalCart += item.price * item.quantity        
    });

    // decalring the variable using let so can change the value accordingly
    let result = { 
        items: basket,
        total: totalCart
    }
    
    // checking if the array is empty
    // no values will change the return value to null 
    if (basket.length < 1) {
        result = null
    }

    return result

}

module.exports = createReceipt
