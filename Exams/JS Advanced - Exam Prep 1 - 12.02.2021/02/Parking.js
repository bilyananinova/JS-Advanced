class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.capacity == 0) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel, carNumber, payed: false })
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(c => c.carNumber == carNumber);

        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        } else if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.capacity++;
            this.vehicles.splice(this.vehicles.indexOf(car), 1)
            return `${carNumber} left the parking lot.`;
        }
    }

    pay(carNumber) {
        let car = this.vehicles.find(c => c.carNumber == carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;

    }

    getStatistics(carNumber) {
        if (carNumber) {

            let car = this.vehicles.find(c => c.carNumber == carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed == false ? 'Not payed' : 'Has payed'}`;

        } else {
            let result = [`The Parking Lot has ${this.capacity} empty spots left.`];
            Object.values(this.vehicles).sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    result.push(`${car.carModel} == ${car.carNumber} - ${car.payed == false ? 'Not payed' : 'Has payed'}`)
                });

            return result.join('\n')
        }
    }

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
