let pizzUni = require('./03')
let { assert, expect } = require('chai')

describe("Tests …", function () {

    it('pizzaUni', function () {
        assert.isFunction(pizzUni.makeAnOrder)
        assert.isFunction(pizzUni.getRemainingWork)
        assert.isFunction(pizzUni.orderType)
    });

    it('makeOrder', function () {

        let obj1 = { orderedPizza: '', orderedDrink: '' }
        assert.throw(() => pizzUni.makeAnOrder(obj1), 'You must order at least 1 Pizza to finish the order.')

        let obj2 = { orderedPizza: 'pizza1' }
        assert.equal(pizzUni.makeAnOrder(obj2), 'You just ordered pizza1')

        let obj3 = { orderedPizza: 'pizza1', orderedDrink: 'drink1' }
        assert.equal(pizzUni.makeAnOrder(obj3), 'You just ordered pizza1 and drink1.')
    });

    it('getRemainingWork', function () {
        let array = []

        assert.equal(pizzUni.getRemainingWork(array), `All orders are complete!`)
        
        array = [{ pizzaName: 'Pizza1', status: 'preparing' }]
        assert.equal(pizzUni.getRemainingWork(array), `The following pizzas are still preparing: Pizza1.`)


        array = [{ pizzaName: 'Pizza1', status: 'preparing' },
        { pizzaName: 'Pizza2', status: 'preparing' },
        { pizzaName: 'Pizza3', status: 'preparing' }]
        assert.equal(pizzUni.getRemainingWork(array), `The following pizzas are still preparing: Pizza1, Pizza2, Pizza3.`)

        array = [{ pizzaName: 'Pizza1', status: 'preparing' },
        { pizzaName: 'Pizza2', status: 'ready' },
        { pizzaName: 'Pizza3', status: 'preparing' }]
        assert.equal(pizzUni.getRemainingWork(array), `The following pizzas are still preparing: Pizza1, Pizza3.`)

    });

    it('orderType', function () {

        assert.equal(pizzUni.orderType(10, 'Carry Out'), 9)
        assert.equal(pizzUni.orderType(10, 'Delivery'), 10)
    });

});
