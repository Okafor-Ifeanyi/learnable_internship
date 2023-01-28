class Telephpne {
    constructor() {
        this.observers = new Set()
    }

    addPhoneNUmber (observer) {
        this.observers.add(observer)
    }

    removePhoneNumber(observer) {
        this.observers.delete(observer)
    }

    notify(context) {
        for (let observer of this.observers) {
            observer.update(context)
        }
    }

    dial(context) {
        try {
            let index = this.observers.indexOf(observer);
            for (let observer of this.observers) {
                observer.update(context)
            }
            console.log(`Now dailing ${this.telephone_book[index]}`);
            return this.notify(context)
        }
        catch(err) {
            console.log("Number not found")
        }
    }

    get(index) {
        if (index > -1 && index < this.observers.length) {
            return this.observers[index];
        }
    }
}

class Observer{
    constructor() { }
    update() {

    }
}