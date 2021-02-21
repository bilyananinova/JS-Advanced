function solve() {
    const TASKS = {
        JUNIOR: ['is working on a simple task.'],
        SENIOR: [
            'is working on a complicated task.',
            'is taking time off work.',
            'is supervising junior workers.'
        ],
        MANAGER: [
            'scheduled a meeting.',
            'is preparing a quarterly report.'
        ],
    }
    class Employee {
        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
            if (new.target === Employee) {

                throw new Error('Cannot instantiate directly!');

            }
        }

        work() {
            if (this._index === this.tasks.length) {
                this._index = 0;
            }
            console.log(`${this.name} ${this.tasks[this._index]}`)
            this._index++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }

    }

    class Junior extends Employee {
        constructor(name, age,) {
            super(name, age, TASKS.JUNIOR)
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }


    return {
        Employee,
        Junior,
        Senior,
        Manager
    }

}

let company = solution()
let junior = new company.Junior('Pesho', 22)
console.log(junior);

let senior = new company.Senior('Gosho', 25)
console.log(senior);

let manager = new company.Manager('Ivan', 33)
console.log(manager);