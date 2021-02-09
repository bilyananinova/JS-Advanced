// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(value) {
//         let fullname = value.split(' ')
//         this.firstName = fullname[0]
//         this.lastName = fullname[1]
//     }
// }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get () {
            return `${this.firstName} ${this.lastName}`
        },

        set(value) {
            let fullname = value.split(' ')
            this.firstName = fullname[0]
            this.lastName = fullname[1]
        }
    });
}

let person = new Person("Peter", "Ivanov");
console.log(person);
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
