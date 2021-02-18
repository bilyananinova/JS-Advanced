let HolidayPackage = require('./02');
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("HolidayPackage", function () {
    beforeEach(() => rep = new HolidayPackage('destination', 'season'));
    it("constructor", function () {

        assert.isArray(rep.vacationers)
        assert.isString(rep.destination)
        assert.isString(rep.season)
        assert.isBoolean(rep.insuranceIncluded)

        assert.equal(rep.destination, 'destination')
        assert.equal(rep.season, 'season')

    });

    it("constructor", function () {

        assert.isFunction(rep.showVacationers)
        assert.isFunction(rep.addVacationer)
        assert.isFunction(rep.generateHolidayPackage)
    });

    it("showVacationers", function () {

        assert.equal(rep.showVacationers(), `No vacationers are added yet`)

        rep.vacationers = ['Pesho Peshov']
        assert.equal(rep.showVacationers(), `Vacationers:\nPesho Peshov`)

        rep.vacationers = ['Pesho Peshov', 'Ivan Ivanov']
        assert.equal(rep.showVacationers(), `Vacationers:\nPesho Peshov\nIvan Ivanov`)

    });

    it("addVacationer", function () {

        assert.throw(() => rep.addVacationer(2), `Vacationer name must be a non-empty string`)
        assert.throw(() => rep.addVacationer(' '), `Vacationer name must be a non-empty string`)
        assert.throw(() => rep.addVacationer('Pesho'), `Name must consist of first name and last name`)

        let actual = rep.vacationers['Pesho Peshov']
        assert.deepEqual(rep.addVacationer('Pesho Peshov'), actual)
    });

    it("get insuranceIncluded", function () {

        assert.equal(rep._insuranceIncluded, false)

        rep._insuranceIncluded = true
        assert.equal(rep._insuranceIncluded, true)

    });

    it("set insuranceIncluded", function () {

        assert.throw(() => rep.insuranceIncluded = 2, `Insurance status must be a boolean`)

        rep.insuranceIncluded = true;
        assert.equal(rep.insuranceIncluded, true)
    });

    it('generateHolidayPackage', function () {

        rep.vacationers = []
        assert.throw(() => rep.generateHolidayPackage(), 'There must be at least 1 vacationer added')

        rep.destination = 'Italy'
        rep.vacationers = ['Pesho Peshov']
        let totalPrice = rep.vacationers.length * 400;
        rep.season = 'Spring'
        rep.insuranceIncluded = false
        if (rep.season === "Summer" || rep.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += rep.insuranceIncluded === true ? 100 : 0;

        assert.equal(totalPrice, 400)
        assert.equal(rep.generateHolidayPackage(), `Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshov\nPrice: 400`)

    });

    it('generateHolidayPackage', function () {

        rep.destination = 'Italy'
        rep.vacationers = ['Pesho Peshov']
        let totalPrice = rep.vacationers.length * 400;
        rep.season = 'Summer'
        rep.insuranceIncluded = false
        if (rep.season === "Summer" || rep.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += rep.insuranceIncluded === true ? 100 : 0;

        assert.equal(totalPrice, 600)
        assert.equal(rep.generateHolidayPackage(), `Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshov\nPrice: 600`)

    });

    it('generateHolidayPackage', function () {

        rep.destination = 'Italy'
        rep.vacationers = ['Pesho Peshov']
        let totalPrice = rep.vacationers.length * 400;
        rep.season = 'Summer'
        rep.insuranceIncluded = true
        if (rep.season === "Summer" || rep.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += rep.insuranceIncluded === true ? 100 : 0;

        assert.equal(totalPrice, 700)
        assert.equal(rep.generateHolidayPackage(), `Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshov\nPrice: 700`)

    });

});
