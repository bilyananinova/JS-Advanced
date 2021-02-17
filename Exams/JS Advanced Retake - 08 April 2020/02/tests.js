let { Repository } = require("./solution.js");
let { expect, assert } = require('chai')


describe('Tests …', function () {
	let instance = new Repository({
		name: "string",
		age: "number",
		birthday: "object"
	})

	it('constructor', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		assert.isObject(instance.props)
		assert.isFunction(instance.nextId)
		assert.deepEqual(instance.data, new Map());
		assert.equal(instance.count, 0);
	});

	it('get', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		let entity = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(entity)
		assert.deepEqual(instance.data.size, 1)

		let entity1 = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		let entity2 = {
			name: "Pesho1",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		let entity3 = {
			name: "Pesho2",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(entity1)
		instance.add(entity2)
		instance.add(entity3)
		assert.deepEqual(instance.data.size, 4)

	});

	it('add', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })


		let entity = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		
		expect(instance.add(entity)).to.equal(0)
		expect(instance.add(entity)).to.equal(1)

	});

	it('getId', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		let entity = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(entity)
		instance.add(entity)

		expect(instance.getId(0)).to.deep.equal(entity)
		expect(instance.getId(1)).to.deep.equal(entity)

		expect(() => instance.getId(5)).to.throw(`Entity with id: 5 does not exist!`)

	});

	it('update', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		let entity = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(entity)
		instance.add(entity)

		let newEntity = {
			name: 'Gosho',
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(newEntity)
		instance.update(1, newEntity)

		expect(() => instance.update(5, newEntity)).to.throw(`Entity with id: 5 does not exist!`)
	});

	it('del', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		expect(() => instance.del(5)).to.throw(`Entity with id: 5 does not exist!`)


		let entity = {
			name: "Pesho",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		let entity1 = {
			name: "Pesho1",
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		let newEntity = {
			name: 'Gosho',
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		instance.add(entity)
		instance.add(entity1)
		instance.add(newEntity)
		instance.del(0)
		instance.del(1)

		expect(Array.from(instance.data.entries())).to.deep.equal([[2, newEntity]])
	});

	it('_validate', function () {
		let instance = new Repository({ name: "string", age: "number", birthday: "object" })

		let newEntity = {
			firstName: 'Gosho',
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		expect(() => instance.add(newEntity)).to.throw(`Property name is missing from the entity!`)

		let entity = {
			name: 'Gosho',
			age: '22',
			birthday: new Date(1998, 0, 7)
		};

		expect(() => instance.add(entity)).to.throw(`Property age is not of correct type!`)

		let entity1 = {
			name: 222,
			age: 22,
			birthday: new Date(1998, 0, 7)
		};

		expect(() => instance.add(entity1)).to.throw(`Property name is not of correct type!`)

	});

});