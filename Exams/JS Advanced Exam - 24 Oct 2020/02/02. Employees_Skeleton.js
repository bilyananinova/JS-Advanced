function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;

        }

        addTask(id, taskName, priority) {
            let taskObject = {}
            taskObject = { id, taskName, priority }
            if (priority == 'high') {
                this.tasks.unshift(taskObject)
            } else {
                this.tasks.push(taskObject)
            }

            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {
            let task = this.tasks.shift()
            let result = '';
            if (this.tasks.length > 0) {
                return task
            } else {
                result = `${this.firstName}, you have finished all your tasks. You can rest now.`
            }

            return result
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let result = [`Tasks, that need to be completed:`]
            this.tasks.forEach(obj => {
                result.push(`${obj.id}: ${obj.taskName} - ${obj.priority}`)

            })
            return result.join('\n')
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            // this.firstName = firstName;
            // this.lastName = lastName;
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience;
        }

        learn(years) {
            return this.experience += years;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            // this.firstName = firstName;
            // this.lastName = lastName;
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {
            let task = this.tasks.find(obj => obj.id === taskId)

            if (task.priority == 'high') {
                task.priority = 'low'
            } else if (task.priority == 'low') {
                task.priority = 'high'
            }

            if (task.priority == 'high') {
                this.tasks.unshift(task)
            } else {
                this.tasks.push(task)
            }

            return task
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());


const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());


const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);