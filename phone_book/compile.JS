class TelephoneBook {
    constructor() {
        this.telephone_book = [];
    }

    addPhoneNumber(obj) {
        this.telephone_book.push(obj);
        return console.log()

    }

    removePhoneNumber(observer) {
        this.observers.delete(observer)
    }

    dial(observer) {
        try {
            let index = this.observers.indexOf(observer);
            return this.telephone_book[index];
        }
        catch(err) {
            console.log("Number not found")
        }
    }
    count() {
        return this.telephone_book.length;
    }

    get(index) {
        if (index > -1 && index < this.telephone_book.length) {
            return this.telephone_book[index];
        }
    }

    indexOf(obj, startIndex) {
        let i = startIndex;

        while (i < this.telephone_book.length) {
            if (this.telephone_book[i] === obj) {
                return i;
            }
            i++;
        }

        return -1;
    }

    removeAt(index) {
        this.telephone_book.splice(index, 1);
    }
}

class Subject {
    constructor() {
      this.observers = new telephone_book();
    }
  
    addObserver(observer) {
      this.observers.add(observer);
    }
  
    removeObserver(observer) {
      this.observers.removeAt(this.observers.indexOf(observer, 0));
    }
  
    notify(context) {
        const observerCount = this.observers.count();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context);
        }
    }
}

class Observer {
    constructor() {}
    update() {
        // ...
    }
}

// Concrete Subject
class ConcreteSubject extends Subject {
    constructor(element) {
      // Call the constructor of the super class.
      super();
      this.element = element;
  
      // Clicking the checkbox will trigger notifications to its observers
        this.element.onclick = () => {
            this.notify(this.element.checked);
        };
    }
}

// Concrete Observer
  
class ConcreteObserver extends Observer {
    constructor(element) {
      super();
      this.element = element;
    }
  
    // Override with custom update behaviour
    update(value) {
      this.element.checked = value;
    }
  }