let createCalculator = require('./addSubtract')
let { expect } = require('chai')

describe('createCalculator', () => {

    it('Keep an internal sum which can’t be modified from the outside', () => {
        let calc = createCalculator()
        calc.value = 5;
        expect(calc.get()).to.equal(0);
    })

    it('get return correct value', () => {
        let calc = createCalculator()
        expect(calc.get()).to.equal(0);
    })

    it('add function return number', () => {
        let calc = createCalculator()
        calc.add(5);
        expect(calc.get()).to.equal(5);
    })

    it('add function return parsed number', () => {
        let calc = createCalculator()
        calc.add('5');
        expect(calc.get()).to.equal(5);
    })

    it('subtract function return number', () => {
        let calc = createCalculator()
        calc.subtract(3);
        expect(calc.get()).to.equal(-3);
    })

    it('subtract function return parsed number', () => {
        let calc = createCalculator()
        calc.subtract('3');
        expect(calc.get()).to.equal(-3);
    })

    it('return correct result 7+1', ()=> {
        let calc = createCalculator()
        calc.add(7)
        calc.add('1')
        expect(calc.get()).to.equal(8)
    })

    it('return correct result 7-1', ()=> {
        let calc = createCalculator()
        calc.subtract('7')
        calc.subtract(1)
        expect(calc.get()).to.equal(-8)
    })

    it('return correct result subtract(3) and add(2)', ()=> {
        let calc = createCalculator()
        calc.subtract(3)
        calc.add(2)
        expect(calc.get()).to.equal(-1)
    })

    it('return correct result add(3) and subtract(2)', ()=> {
        let calc = createCalculator()
        calc.add(3)
        calc.subtract(2)
        expect(calc.get()).to.equal(1)
    })

    it('return correct result add(1.2) and add(2.5)', ()=> {
        let calc = createCalculator()
        calc.add(1.2)
        calc.add(2.5)
        expect(calc.get()).to.equal(3.7)
    })

    it('return correct result subtract(1.2) and subtract(2.5)', ()=> {
        let calc = createCalculator()
        calc.subtract(1.2)
        calc.subtract(2.5)
        expect(calc.get()).to.equal(-3.7)
    })

    it('return correct result with add and subtract function', ()=> {
        let calc = createCalculator()
        calc.add(3)
        calc.subtract('5')
        calc.add(2)
        calc.subtract('4')
        expect(calc.get()).to.equal(-4)
    })

})
