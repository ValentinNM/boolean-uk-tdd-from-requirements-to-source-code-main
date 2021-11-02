// step 1: import the source file to test
const totalCost = require("../src/totalCost")

// description of the overall function/algorithm return 
// describe => allow us to gather tests(SPECS) into separate groupings
// ?SPECS => specification of the test (as part of te test)
describe('Shoping Cart Amount', () => { 

    // it => a.k.a SPEC
    it("returns the total cost of the cart if has >0 values ", () => { 
        // I. setup => here we declaring the values
        
        const basket = [
            { name:"Carrots", price : 2.5, quantity : 4 },
            { name:"Tomatoes", price : 3.5, quantity : 2 }
        ]

        // II. execute => call the imported function and pass data through to execute
        const result = totalCost(basket)
        console.log("result1: ", result)

        // III. verify => 
        expect(result).toEqual(17)
    })
    
    it("returns 0 if cart has no items ", () => { 
        // I. setup
        
        const basket = [
            // { name:"Carrots", price : 2.5, quantity : 1 },
            // { name:"Tomatoes", price : 3.5, quantity : 2 }
        ]
        // II. execute
        const result = totalCost(basket)
        console.log("result2: ", result)

        // III. verify
        expect(result).toEqual(0)
    })
})

