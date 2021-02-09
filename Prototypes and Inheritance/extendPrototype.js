function extendProrotype(classToExtend) {

    classToExtend.prototype.species = 'Human'

    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
    
}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let classToExtend = new Person('b', 'c')
let a = extendProrotype(classToExtend)
console.log(a);