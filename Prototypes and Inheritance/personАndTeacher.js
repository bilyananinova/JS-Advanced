function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let a = personAndTeacher()
let b = a.Person
let c = new b('Pesho', 'pesho@mail.mail')
console.log(c);
let d = personAndTeacher()
let e = a.Teacher
let f = new e('Pesho', 'pesho@mail.mail', 'Math')
console.log(f);
