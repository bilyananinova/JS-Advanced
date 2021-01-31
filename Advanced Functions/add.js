function solution(a) {

    let result = a;

    return function (b) {
        return result + b;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
