function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let constructor = Object.getPrototypeOf(this).constructor.name
            let name = this.name
            let email = this.email
            let output = constructor !== 'Person' ? `${constructor} (name: ${name}, email: ${email},` 
            :`${constructor} (name: ${name}, email: ${email})`
            
            return output
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let inh = super.toString()
            return `${inh} subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let inh = super.toString()
            return `${inh} course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let a = toStringExtension()
let b = a.Person
let c = new b('Pesho', 'pesho@mail.mail')
console.log(c.toString())
let d = toStringExtension()
let e = d.Teacher
let f = new e('Pesho', 'pesho@mail.mail', 'Math')
console.log(f.toString())
let g = toStringExtension()
let h = g.Student
let i = new h('Pesho', 'pesho@mail.mail', 'Scince')
console.log(i.toString())