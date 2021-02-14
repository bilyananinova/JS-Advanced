function solveClasses() {

    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {

            if (this.events.includes(title)) {
                throw new Error('This event is already added!')
            }

            this.events.push(title)
            return `Event is added.`
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }

        toString() {
            let result = `${this.name} hall - ${this.capacity}`
            if (this.events.length > 0) {
                result += '\n'
                result += `Events: ${this.events.join(', ')}`
            }

            return result.trim()
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name)
            this.events = [];
            this.screenSize = screenSize;
        }

        close() {
            this.events = [];
            return super.close() + 'Аll screenings are over.'
        }

        toString() {
            let result = super.toString()
            result += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`

            return result.trim()

        }

    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name)
            this.capacity = capacity;
            this.name = name;
            this.events = [];
            this.performer = [];
        }

        hallEvent(title, performers) {
            let result = super.hallEvent(title)
            this.performer.push(performers);
            return result
        }

        close() {
            this.performer = [];
            return result = super.close() + "Аll performances are over.";
        }

        toString() {
            let result = super.toString()
            if (this.events.length > 0) {
                result += `\nPerformers: ${this.performer.join(', ')}.`
            }

            return result.trim()
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}

let classes = solveClasses();
// let hall = new classes.Hall(20, 'Main');
// console.log(hall.hallEvent('Breakfast Ideas'));
// console.log(hall.hallEvent('Annual Charity Ball'));
// console.log(hall.toString());
// console.log(hall.close());

// let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
// console.log(movieHall.hallEvent('Top Gun: Maverick'));
// console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
