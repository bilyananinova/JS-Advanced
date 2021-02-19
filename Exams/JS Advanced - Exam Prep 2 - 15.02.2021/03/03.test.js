let { dealership } = require('./03')
let { expect, assert } = require('chai')


describe('Tests...', function () {

    it('constructor', function () {
        assert.isFunction(dealership.newCarCost)
        assert.isFunction(dealership.carEquipment)
        assert.isFunction(dealership.euroCategory)
    })

    it('newCarCost', function () {
        assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000)
        assert.equal(dealership.newCarCost('Toyota', 30000), 30000)
    })

    it('carEquipment', function () {
        let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
        let indexArr = [0, 2, 3]

        expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['heated seats', 'sport rims', 'navigation'])
    })

    it('euroCategory', function () {
        expect(dealership.euroCategory(2)).to.be.equal(`Your euro category is low, so there is no discount from the final price!`)
    
        expect(dealership.euroCategory(5)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
    
    })
})