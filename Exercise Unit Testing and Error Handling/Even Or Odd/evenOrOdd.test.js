let isOddOrEven = require('./evenOrOdd')
let { expect } = require('chai')

describe('isOddOrEven', () => {
    it('dont works with array input', () => {
        expect(isOddOrEven([1, 2, 3])).to.undefined
    })

    it('dont works with numbers input', () => {
        expect(isOddOrEven(1, 2, 3)).to.undefined
    })

    it('return even with alphabetical string input', () => {
        expect(isOddOrEven('abcd')).to.equal('even')
    })

    it('return odd with alphabetical string input', () => {
        expect(isOddOrEven('abc')).to.equal('odd')
    })

    it('return odd with number string input', () => {
        expect(isOddOrEven('1111111')).to.equal('odd')
    })
})