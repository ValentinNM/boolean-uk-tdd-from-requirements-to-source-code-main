const createReceipt = require("../src/createReceipt")

describe("Generate a receipt", () => { 

it("if has items, show the itmes and total cost", () => { 

    // setup
    const basket = [
        { name:"Carrots", price : 2.5, quantity : 4 },
        { name:"Tomatoes", price : 3.5, quantity : 2 }
    ]

    // execute
    const result = createReceipt(basket)

    // verify
    expect(result).toEqual({ items: basket, total: 17})

} )

it("should return null if no items are given", () => {

    // setup
    const basket = []


    // execute
    const result = createReceipt(basket)

    // verify
    console.log("result blank receipt")
    expect(result).toEqual(null)

    })
})
