let Calculator = require('./calculator')
let { expext, assert } = require('chai')

describe('Tests...', () => {
    it('constructor', () => {
        let calc = new Calculator()

        assert.isArray(calc.expenses)
        assert.deepEqual(calc.expenses, [])
    })

    it('constructor', () => {
        let calc = new Calculator()

        assert.isFunction(calc.add)
        assert.isFunction(calc.divideNums)
        assert.isFunction(calc.toString)
        assert.isFunction(calc.orderBy)
    })

    it('add', () => {
        let calc = new Calculator()

        let data1 = 10
        let data2 = 'Pesho'
        let data3 = '5'

        calc.add(data1)
        assert.deepEqual(calc.expenses, [10])

        calc.add(data2)
        assert.deepEqual(calc.expenses, [10, 'Pesho'])

        calc.add(data3)
        assert.deepEqual(calc.expenses, [10, 'Pesho', '5'])

    })

    it('divideNums', () => {
        let calc = new Calculator()

        calc.expenses = [10, '5', 'Pesho', 10]
        assert.equal(calc.divideNums(), 1)

    })

    it('divideNums', () => {
        let calc = new Calculator()

        calc.expenses = [10, '5', 'Pesho', 0]
        assert.equal(calc.divideNums(), 'Cannot divide by zero')

        calc.expenses = [undefined]
        assert.throw(() => calc.divideNums(), 'There are no numbers in the array!')
    })

    it('toString', () => {
        let calc = new Calculator()

        assert.equal(calc.toString(), 'empty array')

        calc.expenses = [10, '5', 'Pesho']
        assert.equal(calc.toString(), '10 -> 5 -> Pesho')

    })

    it('orderBy', () => {
        let calc = new Calculator()

        assert.equal(calc.orderBy(), 'empty')

        calc.expenses = [10, '5', 'Pesho']
        assert.equal(calc.orderBy(), '10, 5, Pesho')

        calc.expenses = [10, 7, 9, 3]
        assert.equal(calc.orderBy(), '3, 7, 9, 10')



    })
})