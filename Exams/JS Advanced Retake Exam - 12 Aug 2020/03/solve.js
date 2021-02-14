class Movie {
    constructor(movieName, ticketPrice) {

        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        let screen = { date, hall, description }

        let check = this.screenings.find(x => x.date == date && x.hall == hall)

        if (check) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        } else {
            this.screenings.push(screen);
            return `New screening of ${this.movieName} is added.`
        }
    }

    endScreening(date, hall, soldTickets) {
        let check = this.screenings.find(x => x.date == date && x.hall == hall)

        if (!check) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        } else {
            let profit = soldTickets * this.ticketPrice
            this.totalProfit += profit
            this.totalSoldTickets += soldTickets
            this.screenings.splice(this.screenings.indexOf(check), 1)
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`

        }
    }

    toString() {
        let result = [];
        result.push(`${this.movieName} full information:`, `Total profit: ${this.totalProfit.toFixed(0)}$`, `Sold Tickets: ${this.totalSoldTickets}`)

        if (this.screenings.length > 0) {
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
            result.push(`Remaining film screenings:`)
            this.screenings.forEach(x => {
                result.push(`${x.hall} - ${x.date} - ${x.description}`)
            })
        } else {
            result.push('No more screenings!')
        }
        return result.join('\n')
    }

}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
