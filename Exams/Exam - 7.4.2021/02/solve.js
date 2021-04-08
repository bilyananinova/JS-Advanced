class Hotel {
    constructor(name, capacity) {
        this.name = name
        this.capacity = capacity
        this.bookings = []
        this.currentBookingNumber = 1
        this.roomsTypeCapacity = {
            single: capacity * 0.50,
            double: capacity * 0.30,
            maisonette: capacity * 0.20
        }
    }

    get roomsPricing() {
        let obj = {
            single: 50,
            double: 90,
            maisonette: 135,
        }

        return obj
    }

    rentARoom(clientName, roomType, nights) {

        let print = ''

        if (this.roomsTypeCapacity[roomType] <= 0) {
            print += `No ${roomType} rooms available!`

            for (const room of Object.keys(this.roomsTypeCapacity)) {
                if (room != roomType && this.roomsTypeCapacity[room] > 0) {
                    print += ` Available ${room} rooms: ${this.roomsTypeCapacity[room]}.`
                }
            }

        }

        if (print != '') {
            return print
        }

        let curBookNumber = this.currentBookingNumber
        let guest = {
            clientName,
            roomType,
            nights,
            curBookNumber

        }
        this.currentBookingNumber++
        this.capacity--;
        this.roomsTypeCapacity[roomType]--;
        this.bookings.push(guest)

        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${curBookNumber}.`
    }

    checkOut(currentBookingNumber) {

        let client = this.bookings.find(b => b.curBookNumber == currentBookingNumber)

        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        let pricePerNight = this.roomsPricing
        let totalMoney = client.nights * pricePerNight[client.roomType]

        let index = this.bookings.indexOf(client)
        this.bookings.splice(index, 1)
        this.capacity++;
        this.roomsTypeCapacity[client.roomType]++;
        
        return `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`
    }

    report() {

        let result = [`${this.name.toUpperCase()} DATABASE:`, `--------------------`];

        if (this.bookings.length > 0) {

            this.bookings.forEach((b, i) => {
                result.push(`bookingNumber - ${b.curBookNumber}`,
                    `clientName - ${b.clientName}`,
                    `roomType - ${b.roomType}`,
                    `nights - ${b.nights}`)

                if (i < this.bookings.length - 1) {
                    result.push('----------')
                }
            })

        } else {
            result.push(`There are currently no bookings.`)
        }

        return result.join('\n')
    }

}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.checkOut(2));
console.log(hotel.report());

