function getFibonator() {
  let numA = 0;
  let numB = 1;

  return function fib() {
    let result = numA + numB;
    numB = numA
    numA = result;
    return numA;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
