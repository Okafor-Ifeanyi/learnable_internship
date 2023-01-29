class Obervers {
    constructor() {
        this.observers = new Set()        
    }

    // This is to add observers
    addObserver (observer) {
        this.observers.add(observer)
    }

    // This is to remove observers
    removeObserver(observer) {
        this.observers.delete(observer)
    }

    // This is to notify observers 
    notify(context) {
        for (let observer of this.observers) {
            observer.update(context)
        }
    }
}

class Telephone {
    constructor() {
        this.phone_numbers = new Set();
    }

    // This is to add Phone numbers
    getInstance(number) {
        this.phone_numbers.add(number)
        console.log(`${number} added}`);
    }

    // This is to remove Phone numbers
    removePhoneNumber(number) {
        this.phone_numbers.delete(number)
    }

    // This is to dial phone numbers
    dial(number) {
        try {
            let index = this.phone_numbers.indexOf(number);
            console.log(`Now dailing ${this.telephone_book[index]}`);
            return Obervers.notify(`${number} - Dialed`)
        }
        catch(err) {
            console.log("Number not found")
        }
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

class Observer1 {
    constructor() { 
        this.observerName = "Bio"
    }
    
    printNum(number) {
        const addNum = Telephone.getInstance(number)
        return addNum
    }
}

// const observer = new Obervers();
// const telephone = new Telephone();
// telephone.addPhoneNumber("09095220213")

const bio = new Observer1()
bio.printNum(021456987)
