class List {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(element) {
        this.array.push(element);
        this.array.sort((a, b) => a - b);
        this.size++;
        return this.array;
    }

    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.size--;
        } else {
            throw new Error('Index otside boundary');
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        } else {
            throw new Error('Index outside boundary');
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
