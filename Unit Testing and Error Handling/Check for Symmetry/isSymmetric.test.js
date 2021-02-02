const isSymmetric = require('./isSymmetric')
const { expect } = require('chai')

describe('Symmetric', () => {

    it('works with valid symettric input', () => {
        expect(isSymmetric([1, 1])).to.be.true
    })

    it('works with valid non-symetricinput', () => {
        expect(isSymmetric([1, 2])).to.be.false
    })

    it('returns false with invalid argument', () => {
        expect(isSymmetric('a')).to.be.false
    })

    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true
    })

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true
    })

    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false
    })

    it('returns false for invalid input', () => {
        expect(isSymmetric(['1', 1])).to.be.false
    })
})