function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
  //Your program will receive four parameters: three values and a function that takes 4 parameters

  return (value) => currencyFormatter(separator, symbol, symbolFirst, value);
}

createFormatter();

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}

//dollarFormatter референция към createFormatter
let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71
