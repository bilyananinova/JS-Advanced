let { numberOperations } = require("./solution.js");
let { expect, assert } = require('chai')


describe('Tests...', function () {

	it('constructor', function () {

		assert.isFunction(numberOperations.powNumber)
		assert.isFunction(numberOperations.numberChecker)
		assert.isFunction(numberOperations.sumArrays)

	});

	it('powNumber', function () {

		assert.equal(numberOperations.powNumber(2), 4)
		assert.equal(numberOperations.powNumber(0), 0)
		assert.equal(numberOperations.powNumber(-2), 4)

	});

	it('numberChecker', function () {

		assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!')
		assert.equal(numberOperations.numberChecker('105'), 'The number is greater or equal to 100!')
		assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
		assert.throw(() => numberOperations.numberChecker('aaa'), 'The input is not a number!')

	});

	it('sumArrays', function () {
		let arr1 = [1, 2, 3, 4]
		let arr2 = [1, 2, 3]
		assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [2, 4, 6, 4])

		arr1 = [10, 20, 30]
		arr2 = [10, 20, 30, 40]
		assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [20, 40, 60, 40])

		arr1 = [5, 2, 8]
		arr2 = [5, 2, 8]
		assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [10, 4, 16])

	});

});