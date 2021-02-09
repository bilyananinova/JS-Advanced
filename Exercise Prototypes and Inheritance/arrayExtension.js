(function solve() {
    Array.prototype.last = function () {
        console.log(this);
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((a, c) => a + c, 0);
    }

    Array.prototype.average = function () {
        return this.reduce((a, c) => a + c, 0) / this.length;
    }
})();

let arr = new Array(3);
let array = [1, 2, 3];
console.log(array.last());
console.log(array.skip(2));
console.log(array.take(2));
console.log(array.sum());
console.log(array.average());
