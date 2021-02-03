let lookupChar = require('./charLookup')
let { expect } = require('chai')

/*
•	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
o	If both parameters have correct types and values - return the character at the specified index in the string.
*/

describe('lookupChar function', () => {
    it('first and second parameters are valid', () => {
        expect(lookupChar('abcd', 2)).to.equal('c')
    })

    it('first and second parameters are valid', () => {
        expect(lookupChar('string', 5)).to.equal('g')
    })

    it('first and second parameters are invalid', () => {
        expect(lookupChar(5, 'string')).to.equal(undefined)
    })

    it('first parameter is invalid', () => {
        expect(lookupChar(5, 3)).to.equal(undefined)
    })

    it('second parameter is invalid', () => {
        expect(lookupChar('string', 'str')).to.equal(undefined)
    })

    it('second parameter is pointfloat', () => {
        expect(lookupChar('string', 2.2)).to.equal(undefined)
    })

    it('the value of the index is equal than string length', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index')
    })

    it('the value of the index is bigger than string length', () => {
        expect(lookupChar('string', 8)).to.equal('Incorrect index')
    })

    it('the value of the index is negative number', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index')
    })
})