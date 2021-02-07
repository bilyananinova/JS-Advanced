class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        for (let value of [username, salary, position, department]) {
            this.validate(value)
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ username, salary, position })
        return `New employee is hired. Name: ${username}. Position: ${position}`

    }

    bestDepartment() {
        let bestDepartment = {};
        let maxSalary = 0;
        for (const department in this.departments) {
            let average = this.departments[department].reduce((a, c) => a + c.salary, 0) / this.departments[department].length

            if (average > maxSalary) {
                bestDepartment = department;
                maxSalary = average
            }
        }

        let output = [`Best Department is: ${bestDepartment}`, `Average salary: ${maxSalary.toFixed(2)}`]
        this.departments[bestDepartment]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .forEach(element => {
                output.push(`${element.username} ${element.salary} ${element.position}`)
            });



        return output.join('\n')
    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error('Invalid input!')
        }
    }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
