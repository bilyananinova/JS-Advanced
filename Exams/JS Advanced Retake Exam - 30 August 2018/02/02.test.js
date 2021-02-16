let HolidayPackage = require('./02');
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("HolidayPackage", function () {
    it("constructor", function () {
        let instance = new HolidayPackage('Italy', 'summer')
        assert.deepEqual(instance.vacationers, [])
        assert.deepEqual(instance.destination, 'Italy')
        assert.deepEqual(instance.season, 'summer')
        assert.deepEqual(instance.insuranceIncluded, false)
    });

    it("constructor", function () {
        assert.equal(HolidayPackage.prototype.vacationers)
        assert.equal(HolidayPackage.prototype.destination)
        assert.equal(HolidayPackage.prototype.season)
        assert.equal(HolidayPackage.prototype.insuranceIncluded)
    });

    it("showVacationers", function () {
        let instance = new HolidayPackage('Italy', 'summer')

        assert.equal(instance.showVacationers(), 'No vacationers are added yet')

        instance.vacationers = ['a', 'b', 'c']
        instance.showVacationers();
        assert.equal(instance.showVacationers(), 'Vacationers:\na\nb\nc')

    });

    it("addVacationer", function () {
        let instance = new HolidayPackage('Italy', 'summer')
        instance.addVacationer('Pesho Peshov')
        assert.deepEqual(instance.vacationers, ['Pesho Peshov'])

        assert.throw(() => instance.addVacationer(5), 'Vacationer name must be a non-empty string')
        assert.throw(() => instance.addVacationer(' '), 'Vacationer name must be a non-empty string')
        assert.throw(() => instance.addVacationer(' '), 'Vacationer name must be a non-empty string')

        assert.throw(() => instance.addVacationer('Pesho'), 'Name must consist of first name and last name')

    });

    it("get insuranceIncluded", function () {
        let instance = new HolidayPackage('Italy', 'summer')
        assert.equal(instance._insuranceIncluded, false)

        instance._insuranceIncluded = true
        assert.equal(instance._insuranceIncluded, true)
    });

    it("set insuranceIncluded", function () {
        let instance = new HolidayPackage('Italy', 'summer')
        assert(() => instance.insuranceIncluded = 'Petar', 'Insurance status must be a boolean');
        assert.throw(() => instance.insuranceIncluded('Pesho'), TypeError)
        instance.insuranceIncluded = true
        assert.equal(instance._insuranceIncluded, true)

    });

    it('generateHolidayPackage', function () {
        let instance = new HolidayPackage('Italy', 'summer')
        assert.throw(() => instance.generateHolidayPackage(), 'There must be at least 1 vacationer added');
    });

    it('generateHolidayPackage', function () {
        let instance = new HolidayPackage('Italy', 'summer')

        function compare(destination, vacationers, totalPrice) {
            return [`Holiday Package Generated`,
                `Destination: '${destination}`,
                `${vacationers}`,
                `Price: ${totalPrice}`].join('\n')

        }

        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev']
        instance.season = 'Spring';
        instance.insuranceIncluded = false;
        let totalPrice = instance.vacationers.length * 400;
        if (instance.season === "Summer" || instance.season === "Winter") {
            totalPrice += 200;
        }
        totalPrice += instance.insuranceIncluded === true ? 100 : 0;

        expect(instance.generateHolidayPackage() == compare(instance.destination, instance.vacationers, totalPrice)).to.be.equal

    });

    it('toString', function () {
        let instance = new HolidayPackage('Italy', 'Summer');
        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev']
        let totalPrice = instance.vacationers.length * 400;
        instance.season = 'Summer';
        instance.insuranceIncluded = true;
        if (instance.season === "Summer" || instance.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += instance.insuranceIncluded === true ? 100 : 0;

        expect(instance.generateHolidayPackage()).to.equal("Holiday Package Generated\n" +
            "Destination: " + instance.destination + "\n" +
            instance.showVacationers() + "\n" +
            "Price: " + totalPrice)

    })

    it('toString', function () {
        let instance = new HolidayPackage('Italy', 'Summer');
        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev']
        let totalPrice = instance.vacationers.length * 400;
        instance.season = 'Spring';
        instance.insuranceIncluded = false;
        if (instance.season === "Summer" || instance.season === "Winter") {
            totalPrice += 200;
        }
        totalPrice += instance.insuranceIncluded === true ? 100 : 0;
        expect(instance.generateHolidayPackage()).to.equal("Holiday Package Generated\n" +
            "Destination: " + instance.destination + "\n" +
            instance.showVacationers() + "\n" +
            "Price: " + totalPrice)
    })


});

