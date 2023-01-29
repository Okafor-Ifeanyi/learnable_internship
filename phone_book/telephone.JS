class Telephone {
    constructor() {
        this.observers = new Set();  
        this.phone_numbers = new Set();
    }

    // Observers
    // This class is used to add observers
    addObserver (observer) {
        this.observers.add(observer)
    }

    // This class is used to remove observers
    removeObserver(observer) {
        this.observers.delete(observer)
    }

    // This class is used to notify observers 
    notify(context) {
        for (let observer of this.observers) {
            observer.update(context)
        }
    }

    // Phone Book
    // This is to add Phone numbers
    addPhoneNumber(number) {
        this.phone_numbers.add(number)
        console.log(`${number} added`);
    }

    // This is to remove Phone numbers
    removePhoneNumber(number) {
        this.phone_numbers.delete(number)
    }

    // This is to dial phone numbers
    dial(number) {
        let available = this.phone_numbers.has(number)
        if (available) {
            console.log(`Now dailing ${number}`);
            return this.notify(`${number} - Dialed`)
        }
        else {
            console.log("Number not found")
        }
        // try {
        //     let index = this.phone_numbers.(number);
        //     console.log(`Now dailing ${this.telephone_book[index]}`);
        //     return this.notify(`${number} - Dialed`)
        // }
        // catch(err) {
        // }
    }

    // This is to get a specific number from the list by its index
    get(index) {
        if (index > -1 && index < this.phone_numbers.length) {
        return console.log(this.phone_numbers[index])
        }
    }
}

class Observer{
    constructor() { }
    update() {

    }
}

class Observer1 extends Telephone{
    constructor() { 
        super()
        this.observerName = "Bio"
    }
    
    // printNum(number) {
    //     const addNum = Telephone.addPhoneNumber(number)
    //     return addNum
    // }
}

class Observer2 extends Telephone{
    constructor() { 
        super()
        this.observerName = "Ifeanyi"
    }
    // DialNumber(number) {
    //     const DailNum = Telephone.dial(number)
    //     return DailNum
    // } 
}

const test = new Telephone()
test.addPhoneNumber("08095220213")
test.dial("08095220213")

const obs1 = new Observer1()
obs1.addPhoneNumber("08095220213")

const obs2 = new Observer2()
obs1.dial("08095220289")
