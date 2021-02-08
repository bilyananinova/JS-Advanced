let PaymentPackage = require('./PaymentPackage')
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('PaymentPackage tests', () => {
    let wrongVal = [NaN, {}, null, '', undefined]
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('Name', 100)
    })

    it('constructor has name property', () => {
        expect(instance._name).to.equal('Name');
    })

    it('constructor has value property', () => {
        expect(instance._value).to.equal(100);
    })

    it('constructor has VAT property', () => {
        expect(instance._VAT).to.equal(20);
    })

    it('constructor has active property', () => {
        expect(instance._active).to.be.true;
    })

    //test getter
    it('name has "Name" property', () => {
        expect(instance.name).to.equal('Name');
    })

    it('change name property', () => {
        instance.name = 'Stamat'
        expect(instance.name).to.equal('Stamat')
    })

    it('type of name property to be a string', () => {
        expect(typeof instance.name).to.equal('string')
    })

    it('throw an error if type is not a string', () => {
        wrongVal.forEach(val => {
            expect(() => instance.name = val).to.throw('Name must be a non-empty string');
        })
    })

    it('throw an error if type of name is number', () => {
        expect(() => instance.name = 5).to.throw('Name must be a non-empty string');
    })

    it('throw an error if name is empry string', () => {
        expect(() => instance.name = '').to.throw('Name must be a non-empty string')
    })

    //value 
    it('type of new Value is number', () => {
        expect(instance.value = 10).to.equal(10)
    })

    it('throw an error if type of new Value is string', () => {
        expect(() => instance.value = '10').to.throw('Value must be a non-negative number')
    })

    it('throw an error if value is negative number', () => {
        expect(() => instance.value = -5).to.throw('Value must be a non-negative number')
    })

    it('throw an error if value is 0', () => {
        // instance.value = 0;
        expect(() => instance.value = 0).to.not.throw()
    })
    
    //VAT
    it('set new value of VAT', () => {
        instance.VAT = 40
        expect(instance.VAT).to.equal(40);
    })

    it('throw new Error if VAT is negative number', () => {
        expect(() => instance.VAT = -20).to.throw('VAT must be a non-negative number')
    })

    it('throw new Error if VAT is string type', () => {
        expect(() => instance.VAT = '40').to.throw('VAT must be a non-negative number')
    })

    //active
    it('active type must be boolean, not number', () => {
        expect(() => instance.active = 1).to.throw('Active status must be a boolean')
    })

    it('active type must be boolean, not string', () => {
        expect(() => instance.active = 'a').to.throw('Active status must be a boolean')
    })

    it('active type boolean true', () => {
        expect(instance.active == true).to.equal(true)
    })

    it('active type boolean false', () => {
        expect(instance.active == false).to.equal(false)
    })

    it('toString', () => {

        function getString(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }

        expect(instance.toString() == getString('Name', 100,)).to.be.true;
        instance.name = 'Pesho'
        expect(instance.toString() == getString('Pesho', 100)).to.be.true;
        instance.value = 20 // and  name Pesho
        expect(instance.toString() == getString('Pesho', 20)).to.be.true;
        instance.VAT = 200 // and name Pesho and value 20
        expect(instance.toString() == getString('Pesho', 20, 200)).to.be.true;
        instance.active = false // and name Pesho and value 20 and vat 200
        expect(instance.toString() == getString('Pesho', 20, 200, false)).to.be.true;
    })

})