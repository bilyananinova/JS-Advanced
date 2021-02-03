let mathEnforcer = require('./mathEnforcer')
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('mathEnforcer', () => {
    describe('addFive', () => {

        it('return undefined if input is string', () => {
            expect(mathEnforcer.addFive('aaaa')).to.equal(undefined);
        })

        it('return result if input is number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })

        it('return result with negative number', function () {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        })

        it('return result with negative number', function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })

        it('return result with floating point number', function () {
            expect(mathEnforcer.addFive(4.50)).to.be.closeTo(9.50, 0.01);
        })
    })

    describe('subtractTen', () => {
        it('return undefined if input is string', () => {
            expect(mathEnforcer.subtractTen('aaaa')).to.equal(undefined);
        })

        it('return result if input is number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })

        it('return result with negative number', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })

        it('return result with negative number', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })

        it('return result with floating point number', function () {
            expect(mathEnforcer.subtractTen(4.50)).to.be.closeTo(-5.50, 0.01);
        })
    })

    describe('sum', () => {
        it('return undefined if first parameter is string', () => {
            expect(mathEnforcer.sum('a', 2)).to.equal(undefined);
        })

        it('return undefined if second parameter is string', () => {
            expect(mathEnforcer.sum(5, 'c')).to.equal(undefined);
        })

        it('return result if patameters are number', () => {
            expect(mathEnforcer.sum(5, 7)).to.equal(12);
        })

        it('return result if first parameter is negative number', () => {
            expect(mathEnforcer.sum(-5, 7)).to.equal(2);
        })

        it('return result if second parameter is negative number', () => {
            expect(mathEnforcer.sum(5, -7)).to.equal(-2);
        })

        it('return result if first and second parameters are negative number', () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        })

        it('return result with first floating point number', function () {
            expect(mathEnforcer.sum(4.50, 1)).to.be.closeTo(5.50, 0.01);
        })

        it('return result with second floating point number', function () {
            expect(mathEnforcer.sum(1, 5.5)).to.be.closeTo(6.50, 0.01);
        })

        it('return result first and second parameters are floating point number', function () {
            expect(mathEnforcer.sum(1.5, 1.7)).to.be.closeTo(3.2, 0.01);
        })

    })
})