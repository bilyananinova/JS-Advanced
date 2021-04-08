let { stringOperations } = require('./solution.js')
let { expect, assert } = require('chai')

describe('Tests...', function () {

	it('constructor', function () {

		assert.isFunction(stringOperations.stringSlicer)
		assert.isFunction(stringOperations.wordChecker)
		assert.isFunction(stringOperations.printEveryNthElement)

        
	});

	it('stringSlicer', function () {

		assert.equal(stringOperations.stringSlicer('aaaaa'), 'aaa...')

    });

	it('wordChecker', function () {

		assert.equal(stringOperations.wordChecker('hello', 'Hello, world!'), 'hello')
		assert.equal(stringOperations.wordChecker('SoftUni', 'Hello, world!'), 'softuni not found!')
        
	});

	it('printEveryNthElement', function () {

		assert.throw(() => stringOperations.printEveryNthElement('a', ['a', 'b', 'c', 'd'], ), 'The input is not valid!')
		assert.throw(() => stringOperations.printEveryNthElement(2, 'aaaaa'), 'The input is not valid!')
		assert.deepEqual(stringOperations.printEveryNthElement(2, ['1', '2', '3']), ['1', '3'])
        
	});

});