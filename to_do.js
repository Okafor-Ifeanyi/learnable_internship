console.log("hello World")
// prompt("What do you want? ")
const list = []
let count = 0

const date = new Date();
console.log(date)

addToList = (name) => {
    // for (let i = 0; i < name.length; i++) {
    object = {
        id: count + 1,
        Name: name,
        Date: date
        }

    list.push(object)
    console.log(list)
    count = count + 1
} 

addToList("Benard") 