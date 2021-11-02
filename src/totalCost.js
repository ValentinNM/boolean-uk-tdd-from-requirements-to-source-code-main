function totalCost(basket) { 

    let total = 0
    const cart = basket.forEach(item => {
        total += item.price * item.quantity        
    });

    return total
    // console.log()
}

module.exports = totalCost