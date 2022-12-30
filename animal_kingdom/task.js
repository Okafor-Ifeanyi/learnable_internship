class AnimalKingdom {
    constructor() {
        if (this.constructor === AnimalKingdom) {
            throw new Error("Mammal cannot be called or Instantiated")
        }
    }
    num_of_eyes = 2
    #eat () {
        console.log("We love food")
    }
    eatSelf() {
        this.#eat()
    }
    bloodtype () {
        throw new Error("This cannot be implemented directly")
    }
    backBone () {
        throw new Error("This cannot be implemented directly")
    }
}
class ColdBlooded extends AnimalKingdom{
    bloodtype() {
        const bloodtype = console.log("This family is Cold Blooded")
        return bloodtype
    }
}
class WarmBlooded extends AnimalKingdom{
    bloodtype() {
        const bloodtype = console.log("This family Warm Blooded")
        return bloodtype
    }
}
class Arthropoda extends ColdBlooded {
    backBone() {
        const backBone = console.log("This family has No backbone")
        return backBone
    }
}
class Fish extends ColdBlooded {
    backBone() {
        const backBone = console.log("This family has backbone")
        return backBone
    }
}
class Amphibia extends ColdBlooded {
    backBone() {
        const backBone = console.log("This family has backbone")
        return backBone
    }
}
class Reptiles extends ColdBlooded {
    backBone() {
        const backBone = console.log("This family has backbone")
        return backBone
    }
}
class AVES extends WarmBlooded {
    backBone() {
        const backBone = console.log("This family has backbone")
        return backBone
    }
}
class Mammals extends WarmBlooded {
    backBone() {
        const backBone = console.log("This family has backbone")
        return backBone
    }
}

const arthropoda = new Arthropoda()
console.log(arthropoda.constructor.name);
arthropoda.bloodtype()
arthropoda.backBone()
arthropoda.eatSelf()
console.log('\n')

const fish = new Fish()
console.log(fish.constructor.name);
fish.bloodtype()
fish.backBone()
fish.eatSelf()
console.log('\n')

const amphibia = new Amphibia()
console.log(amphibia.constructor.name);
amphibia.bloodtype()
amphibia.backBone()
amphibia.eatSelf()
console.log('\n')

const reptiles = new Reptiles()
console.log(reptiles.constructor.name);
reptiles.bloodtype()
reptiles.backBone()
reptiles.eatSelf()
console.log('\n')

const aves = new AVES()
console.log(aves.constructor.name);
aves.bloodtype()
aves.backBone()
aves.eatSelf()
console.log('\n')

const mammals = new Mammals()
console.log(mammals.constructor.name);
mammals.bloodtype()
mammals.backBone()
mammals.eatSelf()
console.log('\n')