let HolidayPackage = require('./02');
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("HolidayPackage", function () {
    it("constructor", function () {
        let instance = new HolidayPackage('Italy', 'Summer');
        expect(instance.destination = 'Italy').to.equal('Italy');
        expect(instance.destination = 'Summer').to.equal('Summer');
        expect(instance._insuranceIncluded == false).to.equal(true);

    });

    it("showVacationers", function () {
        let instance = new HolidayPackage('Italy', 'Summer');
        expect(instance.vacationers, 'No vacationers are added yet').to.be.empty;
        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev'];
        expect(instance.showVacationers()).to.equal(`Vacationers:\n${instance.vacationers.join("\n")}`)

    });

    it("addVacationer", function () {
        let instance = new HolidayPackage('Italy', 'Summer');

        expect(() => instance.addVacationer(2)).to.throw('Vacationer name must be a non-empty string');
        expect(() => instance.addVacationer(' ')).to.throw('Vacationer name must be a non-empty string');
        expect(() => instance.addVacationer('Petar Petrov Petrov')).to.throw('Name must consist of first name and last name');

    });

    it("addVacationer", function () {
        let instance = new HolidayPackage('Italy', 'Summer');

        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev'];
        expect(instance.vacationers).to.have.lengthOf(3);

    });

    it("insuranceIncluded", function () {
        let instance = new HolidayPackage('Italy', 'Summer');
        expect(() => instance.insuranceIncluded = 'Petar').to.throw('Insurance status must be a boolean');
        expect(instance.insuranceIncluded = true).to.equal(true);
    });
    

    it("generateHolidayPackage", function () {
        let instance = new HolidayPackage('Italy', 'Summer');

        expect(() => instance.generateHolidayPackage([])).to.throw('There must be at least 1 vacationer added');

    });

    it("generateHolidayPackage", function () {
        let instance = new HolidayPackage('Italy', 'Summer');

        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev'];
        expect(instance.vacationers.length * 400).to.equal(1200);
    });

    it('generateHolidayPackage', function () {
        let instance = new HolidayPackage('Italy', 'Summer');

        instance.season = 'Spring';
        instance.vacationers = ['Petar Petrov', 'Ivan Ivanov', 'Georgi Georgiev'];
        expect(instance.vacationers.length * 400).to.equal(1200);

        instance.season = 'Winter';
        expect(instance.vacationers.length * 400 + 200).to.equal(1400);

        instance.insuranceIncluded = true;
        expect(instance.vacationers.length * 400 + 200 + 100).to.equal(1500);

        instance.insuranceIncluded = false;
        expect(instance.vacationers.length * 400 + 200 + 0).to.equal(1400);
    });

    it('print true price add season and insurance', function () {
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

    it('print true price without season and insurance', function () {
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
