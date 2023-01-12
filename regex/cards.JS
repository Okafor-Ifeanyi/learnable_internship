// console.log("Good Day, Pick mode of pryment")
// card = ['MasterCard', "Visa", "Verve"]

function card_validator(num){
    // Patterns formulas
    var D_pattern = /^6\d{15}$/
    var MS_pattern = /^5\d{15}$/
    var V_pattern = /^4\d{15}$/
    var AE_pattern = /^3\d{14}$/

    // Declaration to various cards
    const master_card = MS_pattern.exec(num)
    var visa_card = V_pattern.exec(num)
    var american_express = AE_pattern.exec(num)
    var discover = D_pattern.exec(num)


    if (master_card != null){
        console.log(`${master_card[0]} is a valid MasterCard, Proceed to payment`)
    } else if (visa_card != null) {
        console.log(`${visa_card[0]} is a valid Visa Card, Proceed to payment`)
    } else if (american_express != null) {
        console.log(`${american_express[0]} - American Express Card, Proceed to payment`)
    } else if (discover != null) {
        console.log(`${discover[0]} is a Discovery Card, Proceed to payment`)
    } else {
        console.log("Credit card not valid, Please Cross Check input")
    }  
}

console.log(card_validator("5443243213212134"))