const menu = {
    1 : {
        name: "Milk",
        price: 5000,
    },
    2 : {
        name: "Milo",
        price: 3000,
    },
    3 : {
        name: "Sugar",
        price: 500,
    },
    4 : {
        name: "Plantain",
        price: 100,
    },
    5 : {
        name: "Igbo",
        price: 5000,
    }
}

var count = 0 
for (const item in menu) {
    var id = item
    var price = menu[item].price
    var name = menu[item].name
    console.log(`${id} - ${name} - ${price}`)
    count += 1
}
i = 0
const cart = []
while ( i < count){
    var id = prompt(`You have ${count-i} slots or "break" to exit \n 
    Add an item to your list with the listed ID`);

    // Base function
    if (id === "break") {
        break
    }
    else if (id > count) {
        console.log("Out of limit")
        continue
    }
    else{
        cart.push(id)
    }
    i += 1
}
console.log(cart)
var total = 0 

for (let i = 0; i < cart.length; i++) {
    let num = cart[i]
    // console.log(typeof num)
    // if (typeof num === "int") {
        console.log(menu[num])

        total += menu[num].price
    // }
}
console.log("\n")
console.log("Your Total shopping is "+ total)